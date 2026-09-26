import { portfolioContact } from '@/data/portfolio';
import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'Provides contact and booking information for Ibbo Abdoli.',
  parameters: z.object({ language: z.enum(['sv', 'en']).optional() }),
  execute: async ({ language }) => {
    const sv = language === 'sv';
    return `
${sv ? 'Kontakta mig via:' : 'Contact me via:'}
- Email: ${portfolioContact.email}
- Website: ${portfolioContact.website}
- AI portfolio: ${portfolioContact.aiPortfolio}
- LinkedIn: ${portfolioContact.linkedin}
- GitHub: ${portfolioContact.github}
- ${sv ? 'Boka 15 minuter' : 'Book 15 minutes'}: ${portfolioContact.booking15}
- ${sv ? 'Boka 30 minuter' : 'Book 30 minutes'}: ${portfolioContact.booking30}

${sv ? 'Bra ämnen: automationservice, PLC/I/O, ABB-robotar, RobotStudio, maskinvision, el-felsökning och produktionsstopp.' : 'Good topics: automation service, PLC/I/O, ABB robots, RobotStudio, machine vision, electrical troubleshooting, and production downtime.'}
    `.trim();
  },
});
