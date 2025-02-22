import { z } from "astro:content";

export interface CertifiedCourse {
  name: string;
  slug: string;
  tag: string;
  short?: string;
  issue?: string;
  date?: Date;
}

export interface Provider {
  prefix: string;
  verify: string;
  courses: CertifiedCourse[];
}

export interface WithProvider {
  provider: string;
  link: string;
  verify: string;
}

export const zs = z.object({
  prefix: z.string().optional(),
  verify: z.string().optional(),
  courses: z.object({
    slug: z.string(),
    name: z.string(),
    tag: z.string(),
    short: z.string().optional(),
    issue: z.string().optional(),
    date: z.date().min(new Date("2010-08-01")).optional(),
  }).array().optional(),
}).optional();

export type zt = z.infer<typeof zs>;
