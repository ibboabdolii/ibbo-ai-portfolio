import { projectsToPrompt, type PortfolioLanguage } from '@/data/portfolio';
import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description: 'Shows Ibbo Abdoli’s current selected technical projects. Pass the visitor language when possible.',
  parameters: z.object({
    language: z.enum(['sv', 'en']).optional().describe('Visitor language. Use sv for Swedish and en for English.'),
  }),
  execute: async ({ language }) => {
    const lang: PortfolioLanguage = language ?? 'en';
    const intro = lang === 'sv'
      ? 'Utvalda aktuella projekt. Kundkänsliga detaljer är anonymiserade och verifiering skiljs från pågående felsökning.'
      : 'Selected current projects. Customer-sensitive details are anonymized and verified findings are kept separate from ongoing troubleshooting.';
    return `${intro}\n\n${projectsToPrompt(lang)}`;
  },
});
