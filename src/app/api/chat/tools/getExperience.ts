import { localized, portfolioProfile, portfolioProjects, type PortfolioLanguage } from '@/data/portfolio';
import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description: 'Summarizes Ibbo Abdoli’s current professional field experience. Pass the visitor language when possible.',
  parameters: z.object({
    language: z.enum(['sv', 'en']).optional(),
  }),
  execute: async ({ language }) => {
    const lang: PortfolioLanguage = language ?? 'en';
    const recent = portfolioProjects.slice(0, 5).map((project) => `- ${localized(project.title, lang)} (${project.period})`).join('\n');

    if (lang === 'sv') {
      return `
Jag är ${portfolioProfile.role.sv} i Södertälje/Stockholm och arbetar på ${portfolioProfile.employer}.

Mitt arbete är produktionsnära och omfattar bland annat:
- PLC/I/O-diagnostik, PROFINET, givare, sekvensvillkor och kommunikation
- ABB IRC5, RobotStudio, RAPID, SafeMove och rörelsefelsökning
- EA Vision Studio, Cognex VisionPro och Basler-kameror
- el-felsökning, motorer, pumpar, skåp, kablage och säkerhetskretsar
- backup, kontrollerade ändringar, funktionsprov och servicerapportering

Några aktuella case:
${recent}

Mitt arbetssätt är: säkra maskinen → bekräfta felbilden → spåra signaler → isolera rotorsak → testa säkert → dokumentera.
      `.trim();
    }

    return `
I work as a ${portfolioProfile.role.en} in the Södertälje/Stockholm area at ${portfolioProfile.employer}.

My work is production-oriented and includes:
- PLC/I/O diagnostics, PROFINET, sensors, sequence conditions, and communication
- ABB IRC5, RobotStudio, RAPID, SafeMove, and motion troubleshooting
- EA Vision Studio, Cognex VisionPro, and Basler cameras
- electrical fault finding across motors, pumps, cabinets, wiring, and safety circuits
- backups, controlled changes, functional testing, and service reporting

Recent cases include:
${recent}

My working method is: secure the machine → confirm the fault → trace signals → isolate root cause → test safely → document.
    `.trim();
  },
});
