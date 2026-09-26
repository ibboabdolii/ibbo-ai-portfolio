import { portfolioProjects, projectsToPrompt, type PortfolioLanguage } from '@/data/portfolio';
import { tool } from 'ai';
import { z } from 'zod';

const focusSchema = z
  .enum(['all', 'featured', 'v2000', 'abb', 'vision', 'field', 'personal'])
  .optional()
  .describe(
    'Optional project focus. Use featured for top projects, v2000 for the gyro/serial case, abb for ABB robot cases, vision for machine vision, field for service/production, and personal for personal or learning projects.'
  );

export const getProjects = tool({
  description:
    'Shows Ibbo Abdoli’s selected technical projects, full case-page links, and public evidence links. Use a focused subset when possible.',
  parameters: z.object({
    language: z.enum(['sv', 'en']).optional().describe('Visitor language. Use sv for Swedish and en for English.'),
    focus: focusSchema,
  }),
  execute: async ({ language, focus }) => {
    const lang: PortfolioLanguage = language ?? 'en';
    const selected = (() => {
      switch (focus) {
        case 'featured':
          return portfolioProjects.filter((project) => project.track === 'featured');
        case 'v2000':
          return portfolioProjects.filter((project) => project.id === 'v2000-gyro-serial');
        case 'abb':
          return portfolioProjects.filter(
            (project) => project.id === 'robot-pallet-clearance' || project.id === 'abb-restart-safety'
          );
        case 'vision':
          return portfolioProjects.filter((project) => project.id === 'vision-datamatrix-glue');
        case 'field':
          return portfolioProjects.filter((project) => project.track === 'field');
        case 'personal':
          return portfolioProjects.filter(
            (project) => project.track === 'personal' || project.track === 'lab'
          );
        default:
          return portfolioProjects;
      }
    })();

    const intro =
      lang === 'sv'
        ? 'Utvalda aktuella projekt. Kundkänsliga detaljer är anonymiserade och verifiering skiljs från pågående felsökning.'
        : 'Selected current projects. Customer-sensitive details are anonymized and verified findings are kept separate from ongoing troubleshooting.';

    return `${intro}\n\n${projectsToPrompt(lang, selected)}`;
  },
});
