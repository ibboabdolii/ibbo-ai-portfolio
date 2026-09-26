import { tool } from 'ai';
import { z } from 'zod';

export const getSports = tool({
  description: 'Shares a short personal note about Ibbo Abdoli’s balance outside work.',
  parameters: z.object({ language: z.enum(['sv', 'en']).optional() }),
  execute: async ({ language }) => {
    return language === 'sv'
      ? 'Utanför jobbet gillar jag att vara aktiv, resa och laga mat med vänner. En stabil rutin hjälper mig att hålla fokus och tålamod i teknisk felsökning.'
      : 'Outside work I enjoy staying active, travelling, and cooking with friends. A stable routine helps me keep focus and patience during technical troubleshooting.';
  },
});
