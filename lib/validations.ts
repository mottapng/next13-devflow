import { z } from "zod";


export const questionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(20, { message: "Explanation must be at least 20 character(s) long." }),
  tags: z.array(z.string().min(1).max(15)).max(3),
});