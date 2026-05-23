import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Summarizes Ibbo Abdoli\'s resume focus and explains that his CV is available in Swedish and English. Use when the user asks about resume, CV, hiring fit, or professional background.',
  parameters: z.object({}),
  execute: async () => {
    return `
My CV is available in Swedish and English.

Recommended use:
- Swedish CV: best for companies and recruiters in Sweden.
- English CV: best for LinkedIn, international roles, and English job ads.

Resume focus:
- Service Engineer / Automation Technician work in Sweden
- Industrial automation, production support, and downtime troubleshooting
- PLC/I/O verification and signal diagnosis
- ABB robot troubleshooting, RobotStudio simulation, and RAPID review
- Machine vision support with EA Vision Studio and Cognex VisionPro
- Electrical fault finding, preventive maintenance, service reports, and technical handover

For a recruiter or manager, my strongest fit is hands-on automation service, troubleshooting, robot/vision support, electrical fault finding, and production downtime reduction.

You can use the Resume/CV card on this website to download the CV.
    `.trim();
  },
});
