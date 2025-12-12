import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Provides information on how to contact me. Use when the user asks how to get in touch.',
  parameters: z.object({}),
  execute: async () => {
    return (
      "You can find my contact details above on this page.\n\n" +
      "Feel free to reach out via email or through the Contact section of my website. I'll be happy to get back to you 🙂"
    );
  },
});
