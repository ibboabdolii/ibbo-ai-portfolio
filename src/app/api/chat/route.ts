import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';

import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getExperience } from './tools/getExperience';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSport';

export const maxDuration = 30;

const MAX_BODY_BYTES = 32_000;
const MAX_MESSAGES = 30;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_REQUESTS = 18;

type RateEntry = { count: number; resetAt: number };
type RateGlobal = typeof globalThis & { __ibboPortfolioRateLimit?: Map<string, RateEntry> };

const rateStore = (globalThis as RateGlobal).__ibboPortfolioRateLimit ?? new Map<string, RateEntry>();
(globalThis as RateGlobal).__ibboPortfolioRateLimit = rateStore;

function errorHandler(error: unknown) {
  if (error == null) return 'Unknown error';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return JSON.stringify(error);
}

function clientKey(req: Request) {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

function rateLimit(req: Request) {
  const key = clientKey(req);
  const now = Date.now();
  const current = rateStore.get(key);

  if (!current || current.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_REQUESTS) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export async function POST(req: Request) {
  try {
    const limit = rateLimit(req);
    if (!limit.allowed) {
      return new Response('Too many requests. Please try again shortly.', {
        status: 429,
        headers: { 'Retry-After': String(limit.retryAfter) },
      });
    }

    const declaredLength = Number(req.headers.get('content-length') || '0');
    if (declaredLength > MAX_BODY_BYTES) {
      return new Response('Request too large.', { status: 413 });
    }

    const rawBody = await req.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return new Response('Request too large.', { status: 413 });
    }

    const body = JSON.parse(rawBody);
    const messages = body?.messages;
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
      return new Response('Invalid chat request.', { status: 400 });
    }

    const validRoles = new Set(['user', 'assistant']);
    const hasInvalidMessage = messages.some(
      (message: unknown) =>
        typeof message !== 'object' ||
        message === null ||
        !validRoles.has(String((message as { role?: unknown }).role))
    );

    if (hasInvalidMessage) {
      return new Response('Unsupported chat message role.', { status: 400 });
    }

    const PORTFOLIO_GUARD = {
      role: 'system' as const,
      content: `
STRICT PORTFOLIO RULES:
- Use the portfolio tools as source of truth for Ibbo's projects, skills, experience, CV, and contact details.
- Never invent customer identities behind anonymized cases, private information, credentials, exact production metrics, or unverified outcomes.
- Keep answers practical and concise.
- Do not claim unresolved or in-test work was fully solved.
`,
    };

    messages.unshift(SYSTEM_PROMPT);
    messages.unshift(PORTFOLIO_GUARD);

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getSports,
      getCrazy,
      getExperience,
    };

    const modelId = process.env.OPENAI_MODEL?.trim() || 'gpt-4o-mini';

    const result = streamText({
      model: openai(modelId),
      messages,
      tools,
      toolCallStreaming: true,
      maxSteps: 3,
    });

    return result.toDataStreamResponse({ getErrorMessage: errorHandler });
  } catch (err) {
    console.error('Portfolio chat request failed', err);
    return new Response('Unable to process this chat request.', { status: 500 });
  }
}
