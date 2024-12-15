import { z } from "zod";

export const jobFilterSchema = z.object({
  name: z.string(),
  location: z.string(),
  jobType: z.enum(["REMOTE", "HYBRID", "ONSITE"]),
  salary: z.array(z.number()),
});
