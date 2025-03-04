import { z } from 'astro:content';

export interface Experience {
  company: string;
  link: string;
  position: string;
  project: string;
  date: string;
  location: string;
  icon: string[];
  description: string;
}

export const zs = z.object({
  company: z.string(),
  link: z.string().url(),
  position: z.string(),
  project: z.string(),
  date: z.string(),
  location: z.string(),
  icon: z.array(z.string()),
  description: z.string(),
});

export type zt = z.infer<typeof zs>;
