import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description: 'Shares a short note about Ibbo Abdoli’s working mindset and discipline.',
  parameters: z.object({ language: z.enum(['sv', 'en']).optional() }),
  execute: async ({ language }) => {
    return language === 'sv'
      ? 'Jag arbetar lugnt och stegvis även under tidspress. Säkerhet först, sedan larm, signaler och verifierbara fakta. Jag tar backup före ändringar och försöker isolera en sak i taget.'
      : 'I work calmly and step by step even under time pressure. Safety comes first, followed by alarms, signals, and verifiable facts. I take backups before changes and try to isolate one thing at a time.';
  },
});
