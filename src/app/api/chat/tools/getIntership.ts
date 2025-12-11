import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Summarizes who Ibbo Abdoli is, what type of engineering/automation work he does, and how to contact him. Use this tool when the user asks about his background, projects, expertise, or how to reach him.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s a quick summary about **Ibbo Abdoli** 👇

👤 **Who I am**  
Service Engineer / Automation Technician based in **Södertälje, Sweden**.  
Skilled in **PLC programming**, **ABB IRC5 robots**, **industrial troubleshooting**,  
electrical installation (SS 436 40 00), and service work in large automation environments.

🏢 **Current role**  
Servicetekniker EL @ Elektroautomatik i Sverige AB  
Working with major clients like **Scania**, **Lantmännen**, **Meritor**, **Volvo**,  
and various industrial production lines.

🛠️ **Technical stack & expertise**
- PLC (Siemens TIA Portal, Codesys)
- ABB Robotics (IRC5, SafeMove, calibration, troubleshooting)
- Electrical installation & risk assessments
- HMI/SCADA, sensors, drives, industrial networks
- Field service, diagnostics, failure analysis

🔥 **Key projects**
- **Scania CW32 Laser Turntable**: flap replacement, sensor relocation, chuck alignment  
- **Lantmännen**: vibration sensor troubleshooting & packaging line diagnostics  
- **Meritor**: electrical panel repair & cable fault correction  
- **Volvo**: ABB robot supervision alarms, motion tuning, tooling checks  

📬 **Contact**
- Email: **ibbo.abdoli@elektroautomatik.se**
- LinkedIn: https://www.linkedin.com/in/ibbo-abdoli
- Website: https://ibboabdoli.com

If you want help with automation, PLC, robotics, troubleshooting, or industrial service —  
I'm always open to interesting technical challenges 🔧⚡`;
  },
});
