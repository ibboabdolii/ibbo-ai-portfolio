import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Ibbo Abdoli. It is used to answer questions like "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation: `
I'm Ibbo Abdoli, a Service Engineer and Industrial Automation Technician based in Sweden.
I work at Elektroautomatik i Sverige AB, focusing on troubleshooting, commissioning, and optimizing industrial automation systems.

My background includes PLC programming, industrial electrical installations, ABB robots, and field service operations across production environments such as Scania, Lantmännen, Volvo, and Meritor.

I’m highly detail-oriented, thrive in complex technical environments, and enjoy solving challenging problems that improve system reliability, safety, and performance.
      `.trim(),
    };
  },
});
