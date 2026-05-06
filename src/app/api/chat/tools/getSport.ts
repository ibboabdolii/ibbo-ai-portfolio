import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description:
    "Shares a short personal note about Ibbo Abdoli's active lifestyle, training, and balance outside work.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "Outside work, I like staying active through training, walking, and spending time with friends. " +
      "It helps me stay focused, disciplined, and calm when solving technical problems."
    );
  },
});