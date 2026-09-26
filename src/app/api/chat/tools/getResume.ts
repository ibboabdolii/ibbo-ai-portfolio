import { portfolioCv } from '@/data/portfolio';
import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description: 'Provides Ibbo Abdoli’s current CV availability and focus.',
  parameters: z.object({ language: z.enum(['sv', 'en']).optional() }),
  execute: async ({ language }) => {
    const sv = language === 'sv';
    return `
${sv ? 'Min CV finns på svenska och engelska.' : 'My CV is available in Swedish and English.'}

- ${sv ? 'Svensk CV' : 'Swedish CV'}: ${portfolioCv.sv}
- ${sv ? 'Engelsk CV' : 'English CV'}: ${portfolioCv.en}
- ${sv ? 'Uppdaterad' : 'Updated'}: ${portfolioCv.updated}

${sv
  ? 'Fokus: fältservice, industriell automation, PLC/I/O, ABB-robotar, RobotStudio, maskinvision, el-felsökning och teknisk dokumentation.'
  : 'Focus: field service, industrial automation, PLC/I/O, ABB robots, RobotStudio, machine vision, electrical troubleshooting, and technical documentation.'}
    `.trim();
  },
});
