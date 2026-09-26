import { skillsToPrompt, type PortfolioLanguage } from '@/data/portfolio';
import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description: 'Shows Ibbo Abdoli’s current technical skills. Pass the visitor language when possible.',
  parameters: z.object({
    language: z.enum(['sv', 'en']).optional(),
  }),
  execute: async ({ language }) => {
    const lang: PortfolioLanguage = language ?? 'en';
    const intro = lang === 'sv'
      ? 'Mina viktigaste teknikområden är:'
      : 'My main technical areas are:';
    return `${intro}\n\n${skillsToPrompt(lang)}`;
  },
});
