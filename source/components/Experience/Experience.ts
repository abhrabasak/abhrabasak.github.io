import { z } from 'astro:content';

export interface Experience {
  company: string;
  position: string;
  project: string;
  date: string;
  icon: string[];
  description: string;
}

export const zs = z.object({
  company: z.string(),
  position: z.string(),
  project: z.string(),
  date: z.string(),
  icon: z.array(z.string()),
  description: z.string(),
});

export type zt = z.infer<typeof zs>;
