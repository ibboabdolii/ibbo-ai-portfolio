import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "Shares selected professional project examples from Ibbo Abdoli in industrial automation, PLC troubleshooting, ABB robots, machine vision, and electrical service.",
  parameters: z.object({}),
  execute: async () => {
    return `
Selected technical project examples:

1. Machine Vision & ABB Robot Cell Troubleshooting
- Worked with EA Vision Studio and Cognex VisionPro in robot/vision inspection cells.
- Investigated image timeout alarms, trigger timing, camera acquisition, recipes, and robot communication.
- Reviewed the full chain between vision, ABB robot, PLC signals, and operator information.
- Result focus: restore stable inspection flow and reduce repeated production stops.

2. ABB Robot Troubleshooting & RobotStudio Simulation
- Used RobotStudio simulation and RAPID program review to analyze movement behavior and collision risk.
- Checked robot positions, gripper behavior, offsets, and safe test strategy before production trials.
- Result focus: safer troubleshooting and better verification before changing the real cell.

3. Robot Status, Alarm & Safety Signal Verification
- Verified robot status, motor signals, stop reasons, alarm logic, I/O signals, and safety state.
- Improved clarity for operators and maintenance by mapping real machine states to visible status information.

4. Weber Applicator & Zebra Printer Communication Troubleshooting
- Troubleshot production communication between applicator, printer, and control system.
- Checked configuration, signal timing, and stop causes.
- Result focus: reduce interruptions and make the fault easier to understand.

5. PLC / Factory I/O Sorting Logic Practice
- Built and tested sorting logic concepts with Siemens TIA Portal, S7-1200, and Factory I/O.
- Focused on sensor-based decisions, sequence logic, and simulation-driven learning.

6. Industrial Electrical Service & Production Support
- Field work on motors, fans, conveyors, sensors, cabinets, safety components, pumps, and HMI-related issues.
- Includes preventive maintenance, thermography, electrical inspections, documentation, and service reports.
- Customer environments have included production sites such as Lantmännen, Cummins, and DeLaval.

A common theme in my projects is practical root-cause work: secure the machine, verify signals, isolate the cause, test safely, and document the result.
    `.trim();
  },
});
