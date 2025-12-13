import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "Shares a real personal challenge from my life that shaped my discipline, focus, and ability to work under pressure. Use when the user asks about personal challenges, mindset, discipline, or how my background influences my work.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "Before working in industrial automation, I spent many years competing at a high level in mountain bike racing across Europe.\n\n" +
      "Training and racing at that level required strict discipline, constant preparation, and the ability to perform under physical and mental pressure. Standing on start lines at international competitions taught me how to stay focused, manage stress, and make fast, accurate decisions.\n\n" +
      "This background has strongly shaped how I work today as a Service Engineer and Automation Technician. I stay calm in critical situations, pay close attention to details, and approach complex technical problems in a structured and reliable way."
    );
  },
});
