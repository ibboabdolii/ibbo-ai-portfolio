import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool shows where to access my resume or CV.',
  parameters: z.object({}),
  execute: async () => {
    return `
My resume is available through the resume section on this page.
Download the PDF to see my service engineering experience, automation projects, and technical documentation work.
    `.trim();
  },
});
