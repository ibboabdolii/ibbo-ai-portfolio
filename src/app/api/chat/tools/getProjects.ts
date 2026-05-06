import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "Shares selected professional projects and field experience from Ibbo Abdoli in industrial automation, PLC troubleshooting, ABB robots, machine vision, and electrical service.",
  parameters: z.object({}),
  execute: async () => {
    return `
Selected project examples:

1. Machine Vision & ABB Robot Cell Troubleshooting
- EA Vision Studio and Cognex VisionPro service on camera acquisition, trigger functions, and robot communication.
- Investigated image timeout alarms, verified trigger timing, backed up project files, recipes, and camera settings.
- Reviewed RAPID programs, multitasking, EIO configuration, robot status indication, and red lamp logic.
- Focus: understanding the full chain between vision, robot, PLC signals, and operator information to restore stable inspection flow.

2. ABB Robot Troubleshooting & RobotStudio Simulation
- ABB robot movement analysis and RobotStudio simulation for collision risk assessment.
- RAPID program review, gripper behavior verification, and robot position checks.
- Program adjustments before real production test to ensure safe operation.

3. ABB Robot Status, Alarm & Safety Signal Verification
- Verified robot status, motor signals, stop reasons, alarm logic, I/O signals, and safety state.
- Supported operator troubleshooting with clear signal checks and documentation.

4. Weber Applicator & Zebra Printer Communication Troubleshooting
- Troubleshot communication between Weber applicator, Zebra printer, and control system.
- Checked signal timing, configuration, and production stability to reduce stops.

5. Robot Program Cleanup & Signal Review
- Cleaned up old robot signals and unused program parts for better maintainability.
- Easier future troubleshooting through structured program review.

6. Sorting by Height — Factory I/O & Siemens TIA Portal S7-1200
- Factory I/O simulation with Siemens TIA Portal and S7-1200 PLC.
- Sensor-based height detection and basic PLC sorting logic.
- GitHub learning/practice project for automation concepts.

7. Lantmännen — Industrial Electrical Service & Production Support
- Urgent troubleshooting of motors, fans, elevators, electrical cabinets, and production equipment.
- Thermography, electrical inspections, preventive maintenance, PLC, level sensors, weighing systems, and conveyors.
- Technical documentation and reporting to reduce downtime.

8. Cummins — Industrial Automation Service & Operational Support
- Electrical and automation troubleshooting on machines, sensors, motors, and electrical components.
- Production support, preventive maintenance, and technical follow-up.

9. DeLaval — Testing, Troubleshooting & Quality Verification
- Testing and verification of technical systems, electrical and mechanical deviations.
- Sensor and system function checks, documentation of test results for quality improvement.

10. Weekly Service & Fault-Finding Cases
- ABB robot sensor cable repair, cooling water pump troubleshooting, fan motor wiring correction.
- HMI troubleshooting, ABB Eden safety sensor adjustment, pressure switch checks.
- Service report mindset for clear documentation.
    `.trim();
  },
});