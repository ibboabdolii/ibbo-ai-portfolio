import { tool } from "ai";
import { z } from "zod";

export const getWorkExperience = tool({
  description:
    "Explains the type of work and responsibilities I have handled in my role as a Service Engineer and Automation Technician. Use when the user asks about my work, experience, or responsibilities.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "I work as a Service Engineer and Automation Technician, primarily within industrial production environments in Sweden.\n\n" +
      "My work includes troubleshooting and maintaining automated production lines, electrical panels, PLC-controlled systems, and ABB robot cells. I regularly work hands-on with fault diagnosis, sensor and actuator troubleshooting, I/O signals, safety circuits, and communication between PLCs, HMIs, and robots.\n\n" +
      "I have experience working on-site at customer facilities, where I handle both planned service tasks and urgent breakdowns. This often involves analyzing electrical schematics, modifying PLC logic, adjusting robot programs, and ensuring that machines are restarted safely and efficiently.\n\n" +
      "In addition to technical work, I place strong focus on documentation, communication with customers and colleagues, and working according to Swedish electrical safety standards. My goal is always to create stable, safe, and maintainable solutions while minimizing production downtime."
    );
  },
});
