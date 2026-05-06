import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Provides information on how to contact me. Use when the user asks how to get in touch.',
  parameters: z.object({}),
  execute: async () => {
    return `
You can reach me through the Contact section on this page.
I am available for automation service, production troubleshooting and technical support work.
If you need help with ABB robots, machine vision, PLC/I/O or electrical service, use the contact details above.
    `.trim();
  },
});
