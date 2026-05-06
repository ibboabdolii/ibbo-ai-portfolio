import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "Shares selected professional projects and field experience from Ibbo Abdoli in industrial automation, PLC troubleshooting, ABB robots, machine vision, and electrical service.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here are selected examples of my technical work:

1. Scania – Machine Vision & Robot Troubleshooting
Worked with vision system verification, image trigger problems, ABB robot flow checks, and production-related troubleshooting.

2. Lantmännen – Industrial Service & Line Diagnostics
Performed field service, electrical troubleshooting, sensor checks, spare part documentation, and packaging/production line support.

3. ABB Robot Troubleshooting
Worked with ABB IRC5 robots, motion supervision alarms, signal checks, RobotStudio simulation, and safe fault tracing.

4. PLC / I/O / Electrical Troubleshooting
Experience with PLC signals, I/O checks, sensors, cables, panels, drives, and machine-level diagnostics.

5. Machine Vision / EAVS / Cognex
Worked with EA Vision Studio, Cognex VisionPro, camera setup, trigger logic, backup checks, and upgrade-related troubleshooting.

My main focus is reducing production downtime by finding the real technical root cause step by step.
    `.trim();
  },
});