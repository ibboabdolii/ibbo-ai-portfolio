import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool show a list of my skills.',
  parameters: z.object({}),
  execute: async () => {
    return "My skills are listed in the Skills section above, covering industrial automation, PLCs, ABB robots, electrical installations, and field service work.";
  },
});
