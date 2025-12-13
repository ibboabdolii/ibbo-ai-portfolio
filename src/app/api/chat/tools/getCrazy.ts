import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "Shares a real personal habit that shaped my discipline, focus, and ability to work under pressure. Use when the user asks about mindset, discipline, stress management, or how my lifestyle influences my work.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "One of the most important things that shaped my discipline and mindset is maintaining a consistent fitness routine and active lifestyle.\n\n" +
      "I regularly train at the Actic gym, and I also include walking and swimming as part of my routine. Staying consistent with training has taught me how to manage stress, stay focused even on demanding days, and keep a clear structure in everything I do.\n\n" +
      "I bring the same mindset into my work as a Service Engineer and Automation Technician. In high-pressure situations, I stay calm, work step by step, and approach complex technical problems in a structured, reliable, and safety-focused way."
    );
  },
});
