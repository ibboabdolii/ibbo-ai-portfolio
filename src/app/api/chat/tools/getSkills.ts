import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'Shows Ibbo Abdoli\'s main technical skills and service strengths. Use when the user asks about technical skills, strengths, tools, or troubleshooting capability.',
  parameters: z.object({}),
  execute: async () => {
    return `
My strongest technical areas are:

1. Industrial automation troubleshooting
- Step-by-step fault finding in production environments
- PLC/I/O signal checks, sequence logic, sensors, actuators, and communication
- Focus on restoring stable production safely

2. ABB robots and RobotStudio
- RobotStudio simulation and offline checks
- RAPID program review, robot positions, gripper behavior, and collision risk assessment
- Robot status, alarm logic, motor signals, stop reasons, and I/O verification

3. Machine vision systems
- EA Vision Studio and Cognex VisionPro support
- Camera acquisition, trigger timing, recipes, image timeout troubleshooting, and robot/vision communication

4. Electrical fault finding
- Motors, fans, sensors, cabinets, wiring, pressure switches, safety sensors, and thermography
- Practical service reporting and documentation after troubleshooting

5. Production support and communication systems
- Support during breakdowns, commissioning, verification, and preventive maintenance
- Device communication and configuration checks, including Weber/Zebra-type production systems

My working style is structured: secure the machine, read the alarm, verify signals, isolate the cause, test safely, and document the result.
    `.trim();
  },
});
