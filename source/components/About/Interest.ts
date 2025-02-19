import { z } from "astro:content";

export interface Interest {
  title: string;
  enabled: boolean;
  excerpt: string;
  icons: Record<string, { profile: string; icon: string }>;
}

export const zs = z.object({
  title: z.string(),
  enabled: z.boolean(),
  excerpt: z.string(),
  icons: z.record(z.object({
    profile: z.string(),
    icon: z.string(),
  })),
});

export type zt = z.infer<typeof zs>;
