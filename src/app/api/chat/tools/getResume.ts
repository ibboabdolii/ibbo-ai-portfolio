import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Summarizes Ibbo Abdoli\'s resume focus and explains how to review his CV/profile. Use when the user asks about resume, CV, hiring fit, or professional background.',
  parameters: z.object({}),
  execute: async () => {
    return `
My resume/profile is focused on practical service engineering and industrial automation work.

Relevant areas:
- Service Engineer / Automation Technician work in Sweden
- Industrial electrical troubleshooting and production support
- PLC/I/O verification and signal diagnosis
- ABB robot troubleshooting, RobotStudio simulation, and RAPID program review
- Machine vision support with EA Vision Studio and Cognex VisionPro
- Technical documentation, service reports, preventive maintenance, and handover to maintenance teams

For a recruiter or manager, the strongest fit is hands-on automation service, troubleshooting, robot/vision support, electrical fault finding, and production downtime reduction.

You can also review my main website here: https://ibboabdoli.com
    `.trim();
  },
});
