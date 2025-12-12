import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "Shares one of the craziest and most challenging experiences I've ever done. Use when the user asks something like: 'What is the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return (
      "One of the craziest things I've ever done was climbing Mont Blanc — the highest mountain in the Alps and Western Europe.\n\n" +
      "I reached the summit together with a close friend, without a professional guide. It was an intense and unforgettable experience, with wind speeds reaching around 80 km/h near the top.\n\n" +
      "This adventure taught me a lot about preparation, teamwork, decision-making under pressure, and respecting nature — lessons that also apply strongly to my work as a Service Engineer.\n\n" +
      "I documented the experience in a video here: https://www.youtube.com/XXXXXXXX"
    );
  },
});
