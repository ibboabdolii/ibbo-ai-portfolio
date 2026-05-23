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

function errorHandler(error: unknown) {
  if (error == null) return 'Unknown error';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const PORTFOLIO_GUARD = {
      role: 'system' as const,
      content: `
You are the assistant for Ibbo Abdoli's personal portfolio website.

STRICT RULES:
- Stay focused on Ibbo's portfolio, automation work, service experience, projects, skills, troubleshooting approach, resume, and contact details.
- Do not invent exact years, certifications, private information, or confidential customer details.
- Keep answers practical, concise, and realistic.
- Avoid inflated claims such as "expert", "guru", "world-class", or "best".
- If asked about skills, use getSkills when useful.
- If asked about projects or cases, use getProjects when useful.
- If asked about contact or availability, use getContact.
- If asked about resume or CV, use getResume.
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

    const result = streamText({
      model: openai('gpt-4o-mini'),
      messages,
      tools,
      toolCallStreaming: true,
      maxSteps: 3,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
