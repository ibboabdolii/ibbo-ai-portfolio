import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool shows the main technical skills and service strengths of Ibbo Abdoli.',
  parameters: z.object({}),
  execute: async () => {
    return `
My main skills are:
- Machine vision systems: EA Vision Studio, Cognex VisionPro, camera settings, trigger functions, and robot integration
- ABB robots: RobotStudio simulation, RAPID programming, gripper control, position verification, and safety signals
- PLC/I/O troubleshooting: Siemens TIA Portal, S7-1200, signal verification, and communication checks
- Electrical fault finding: thermography, motor troubleshooting, wiring, sensors, and cabinet work
- Communication systems: Weber applicators, Zebra printers, signal timing, and configuration
- Production support: preventive maintenance, root-cause analysis, documentation, and service reporting
- Simulation and learning: Factory I/O, sorting logic, and GitHub practice projects
- Safety-focused service: alarm verification, safety states, and operator support
    `.trim();
  },
});
