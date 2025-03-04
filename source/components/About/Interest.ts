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
export type InterestRecord = Record<string, Interest>;

export const L = (data: InterestRecord) => Object.entries(data).filter(
  ([t, _]) => !t.startsWith("_")
);
