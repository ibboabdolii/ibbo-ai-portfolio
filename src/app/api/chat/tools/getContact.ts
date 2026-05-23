import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Provides practical contact information for Ibbo Abdoli. Use when the user asks how to contact, book, hire, or discuss automation service work.',
  parameters: z.object({}),
  execute: async () => {
    return `
You can contact me through my personal portfolio channels:

- Email: ibbo.abdoli@gmail.com
- Website: https://ibboabdoli.com
- AI portfolio: https://ai.ibboabdoli.com
- GitHub: https://github.com/ibboabdolii
- Booking: https://cal.com/ibboabdoli/15min or https://cal.com/ibboabdoli/30min

Important:
- Do not use my Elektroautomatik work email for this personal portfolio contact flow.
- For portfolio, recruiter, collaboration, or general automation questions, use my personal email or booking links above.

Good topics to contact me about:
- Industrial automation service and troubleshooting
- PLC/I/O signal verification
- ABB robot and RobotStudio troubleshooting
- Machine vision issues with EA Vision Studio or Cognex VisionPro
- Electrical fault finding, sensors, motors, cabinets, and production stops
- Service documentation and technical handover

For urgent production issues, include the machine/cell name, alarm text, symptoms, what changed recently, and photos/screenshots if available.
    `.trim();
  },
});
