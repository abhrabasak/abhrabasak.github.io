import { z } from 'zod';

export interface Project {
  enabled: boolean;
  name: string;
  icon: string;
  url: string;
  synopsis: string;
  text: string;
  tech: string;
  year: number;
  occupation: string;
  collab: { name: string; profile: string }[];
}

export type ProjectRecord = Record<string, Project>;

export const zs = z.object({
  enabled: z.boolean(),
  name: z.string(),
  icon: z.string(),
  url: z.string(),
  synopsis: z.string(),
  text: z.string(),
  tech: z.string(),
  year: z.number(),
  occupation: z.string(),
  collab: z.array(z.object({
    name: z.string(),
    profile: z.string()
  }))
});

export type zt = z.infer<typeof zs>;

export const L = (pr: ProjectRecord) => Object.entries(pr).filter(
  ([k, _]) => !k.startsWith("_")
);
