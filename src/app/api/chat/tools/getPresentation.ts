import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Returns a concise personal introduction of Ibbo Abdoli in Swedish and English. Use for questions like "Who are you?", "Tell me about yourself", "Vem är du?", or recruiter/customer intro questions.',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation_sv: `
Jag är Ibbo Abdoli, servicetekniker och automationstekniker i Södertälje / Stockholm.

Jag arbetar praktiskt med industriell automation, el-felsökning, PLC/I/O-verifiering, ABB-robotar, RobotStudio, RAPID-granskning och maskinvision med system som EA Vision Studio och Cognex VisionPro.

Mitt värde ligger i praktisk felsökning i produktionsmiljö: säkra maskinen, läsa felbilden, verifiera signaler, hitta rotorsak, testa säkert och dokumentera åtgärden tydligt.

Jag passar särskilt bra för uppdrag inom automationservice, robot-/visionsfelsökning, el-felsökning, produktionssupport och minskning av driftstopp.
      `.trim(),
      presentation_en: `
I’m Ibbo Abdoli, a Service Engineer / Automation Technician based in the Södertälje and Stockholm area in Sweden.

I work hands-on with industrial automation, electrical troubleshooting, PLC/I/O verification, ABB robots, RobotStudio, RAPID review, and machine vision systems such as EA Vision Studio and Cognex VisionPro.

My value is practical troubleshooting in production environments: secure the machine, read the fault, verify signals, isolate the real root cause, test safely, and document the result clearly.

I’m most relevant for roles or assignments involving automation service, robot/vision troubleshooting, electrical fault finding, production support, and downtime reduction.
      `.trim(),
    };
  },
});
