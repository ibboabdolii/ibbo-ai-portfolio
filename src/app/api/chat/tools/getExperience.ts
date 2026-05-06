import { tool } from "ai";
import { z } from "zod";

export const getExperience = tool({
  description:
    "Shares Ibbo Abdoli's professional field experience as a Service Engineer and Automation Technician in Sweden.",
  parameters: z.object({}),
  execute: async () => {
    return `
I work with industrial automation and field service across production lines, robot cells, machine vision systems, and electrical troubleshooting.

My experience includes:
- Machine vision service with EA Vision Studio and Cognex VisionPro, including camera settings, trigger functions, and communication with ABB robots
- ABB robot troubleshooting using RobotStudio simulation, RAPID program review, gripper behavior, positions, and collision risk assessment
- Robot status, alarm, and safety signal verification, including motor signals, stop reasons, I/O signals, and safety states
- Communication troubleshooting between devices like Weber applicators and Zebra printers, focusing on signal timing and configuration
- Robot program cleanup and signal review for maintainability and easier troubleshooting
- PLC programming and simulation with Siemens TIA Portal S7-1200 and Factory I/O for sorting logic
- Industrial electrical service at customers like Lantmännen, Cummins, and DeLaval, including motors, fans, sensors, PLCs, and preventive maintenance
- Weekly fault-finding cases such as cable repairs, pump troubleshooting, wiring corrections, HMI issues, and safety sensor adjustments
- Thermography, electrical inspections, root-cause analysis, and technical documentation to support production and reduce downtime

My focus is to reduce unplanned downtime by securing the machine first, isolating the real cause, and restoring production safely.
    `.trim();
  },
});