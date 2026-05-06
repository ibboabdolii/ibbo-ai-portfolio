import { tool } from "ai";
import { z } from "zod";

export const getExperience = tool({
  description:
    "Shares Ibbo Abdoli's professional field experience as a Service Engineer and Automation Technician in Sweden.",
  parameters: z.object({}),
  execute: async () => {
    return `
Ibbo Abdoli works as a Service Engineer and Automation Technician in Sweden, with practical field experience in industrial automation, electrical troubleshooting, PLC/I/O checks, ABB robots, and machine vision systems.

Main experience areas:

1. Industrial automation service
Troubleshooting production equipment, sensors, actuators, control cabinets, electrical faults, and machine-level problems.

2. PLC and I/O diagnostics
Checking signals, inputs/outputs, communication issues, sequence problems, and root causes behind production stops.

3. ABB robot troubleshooting
Working with ABB IRC5 robots, RobotStudio checks, alarm investigation, signal verification, motion supervision problems, and safe recovery after faults.

4. Machine vision systems
Working with EA Vision Studio, Cognex VisionPro, camera triggers, image acquisition, vision recipes, backup verification, and upgrade-related troubleshooting.

5. Production support
Supporting production teams during breakdowns, planned stops, commissioning, verification, and technical improvements.

The main goal is always to reduce downtime, find the real root cause, and restore stable production safely.
    `.trim();
  },
});