import { z } from 'astro:content';

export interface Developer {
  profiles: string[];
  skills: Record<string, string[]>;
}

export const zs = z.object({
  profiles: z.array(z.string()),
  skills: z.record(z.array(z.string())),
});

export type zt = z.infer<typeof zs>;

type SkillEntry = [string, string[]];
export const L = (dev: Developer) => ({
  profiles: dev.profiles,
  skills: Object.entries(dev.skills).filter(
    ([t, _]) => !t.startsWith("_")
  ).map(([t, ss]) => [t, ss.filter(s => !s.startsWith("_"))] as SkillEntry)
});
