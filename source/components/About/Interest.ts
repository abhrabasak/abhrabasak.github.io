import { z } from "astro:content";

export interface Interest {
  title: string;
  enabled: boolean;
  excerpt: string;
  icons: string[];
}

export const zs = z.object({
  title: z.string(),
  enabled: z.boolean(),
  excerpt: z.string(),
  icons: z.string().array(),
});

export type zt = z.infer<typeof zs>;
