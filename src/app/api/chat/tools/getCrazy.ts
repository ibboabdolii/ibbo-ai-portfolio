import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "Explains one of my toughest adventures: climbing Mont Blanc without a professional guide. Use when the user asks about my adventures, challenges, mindset under pressure, or personal story.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "One of the most challenging and unforgettable experiences in my life was reaching the summit of Mont Blanc, the highest mountain in the Alps.\n\n" +
      "I completed the climb together with a close friend, without a professional guide. Near the summit, the conditions were extreme, with strong winds around 80 km/h and demanding terrain.\n\n" +
      "This adventure pushed me both physically and mentally. It strengthened my mindset around preparation, risk awareness, teamwork, and staying calm under pressure — lessons I apply daily in my work as a Service Engineer and Automation Technician."
    );
  },
});
