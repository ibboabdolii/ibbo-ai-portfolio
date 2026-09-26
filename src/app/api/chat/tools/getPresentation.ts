import { localized, portfolioProfile } from '@/data/portfolio';
import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description: 'Returns a concise introduction of Ibbo Abdoli. Pass the visitor language when possible.',
  parameters: z.object({ language: z.enum(['sv', 'en']).optional() }),
  execute: async ({ language }) => {
    const lang = language === 'en' ? 'en' : 'sv';
    return {
      name: portfolioProfile.name,
      role: localized(portfolioProfile.role, lang),
      location: localized(portfolioProfile.location, lang),
      employer: portfolioProfile.employer,
      introduction: localized(portfolioProfile.intro, lang),
    };
  },
});
