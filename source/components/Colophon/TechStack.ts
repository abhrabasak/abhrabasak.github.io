import { z } from "astro:content";

export interface TechStack {
  name: string;
  url: string;
  icon: string;
};

export const zs = z.object({
  name: z.string(),
  url: z.string().url(),
  icon: z.string(),
});

export type zt = z.infer<typeof zs>;
