import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Ibbo Abdoli. It is used to answer questions like "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation: `
I’m Ibbo Abdoli, a Service Engineer and Automation Technician based in Södertälje / Stockholm, Sweden.
I work hands-on with industrial automation, electrical troubleshooting, PLC/I/O, ABB robots and machine vision systems.

My focus is to reduce unplanned production downtime by finding the real technical root cause step by step, then restoring stable and safe production.
      `.trim(),
    };
  },
});
