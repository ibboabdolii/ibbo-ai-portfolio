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

    // 🔒 قفل سخت برای جلوگیری از اغراق و خلاصه‌سازی مهارت‌ها
    const HARD_SYSTEM_GUARD = {
      role: 'system' as const,
      content: `
You are an AI assistant for a personal portfolio website.

STRICT RULES:
- NEVER use words like "Proficient", "Skilled", "Expert", "Advanced", or similar.
- NEVER invent skill levels or rewrite skills in long paragraphs.
- If asked about skills, ALWAYS call the tool: getSkills.
- If asked about projects, ALWAYS call the tool: getProjects.
- Keep answers short, factual, and realistic.
- Refer users to the website sections (Skills & Expertise, Projects) for details.
`,
    };

    // ترتیب مهم است: اول قفل سخت، بعد SYSTEM_PROMPT، بعد پیام‌های کاربر
    messages.unshift(SYSTEM_PROMPT);
    messages.unshift(HARD_SYSTEM_GUARD);

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
      maxSteps: 3, // ⬅️ اجازه می‌دهد tool واقعاً اجرا و پاسخ نهایی ساخته شود
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
