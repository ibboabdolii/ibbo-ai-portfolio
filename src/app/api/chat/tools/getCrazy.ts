import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "Shares a real personal habit that shaped my discipline, focus, and ability to work under pressure. Use when the user asks about mindset, discipline, stress management, or how my lifestyle influences my work.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "I keep a structured routine that supports my field service work and my ability to stay calm on site.\n\n" +
      "That routine helps me manage stress, stay focused on technical details, and maintain a consistent process when I diagnose automation issues.\n\n" +
      "I bring the same mindset into work as a Service Engineer and Automation Technician: stay calm, work step by step, and handle complex technical problems in a structured, safety-focused way."
    );
  },
});
