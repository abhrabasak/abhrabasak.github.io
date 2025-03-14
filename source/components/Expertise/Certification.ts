import { z } from "astro:content";

export interface CertifiedCourse {
  name: string;
  slug: string;
  area: string;
  short?: string;
  issue?: string;
  date?: Date;
}

export interface Provider {
  prefix: string;
  verify: string;
  icon: string;
  courses: CertifiedCourse[];
}

export interface WithProvider {
  provider: string;
  link: string;
  verify: string;
  icon: string;
}

export type LinkedCourse = CertifiedCourse & WithProvider;

export const zs = z.object({
  prefix: z.string().optional(),
  verify: z.string().optional(),
  icon: z.string().optional(),
  courses: z.object({
    slug: z.string(),
    name: z.string(),
    area: z.string(),
    short: z.string().optional(),
    issue: z.string().optional(),
    date: z.date().min(new Date("2010-08-01")).optional(),
  }).array().optional(),
}).optional();

export type zt = z.infer<typeof zs>;

type CertificationArea = { name: string };
export const csByArea = (certifications: Map<string, Provider>, cAreas: Record<string, CertificationArea>) =>
  Array.from(certifications).flatMap(([id, ct]) =>
    ct.courses?.filter((cr) => cr.area in cAreas && (!!cr.issue || !!cr.date))
      ?.map((cr) => ({
        ...cr,
        provider: id.toLowerCase(),
        icon: ct.icon,
        link: `${ct.prefix ?? ""}${cr.slug}`,
        verify: !!cr.issue
          ? `${ct.verify ?? ""}${cr.issue}`
          : `${ct.prefix ?? ""}${cr.slug}`,
      }) as LinkedCourse)
  ).reduce(
    (a, cr) => {
      (a[cr.area] ??= []).push(cr);
      return a;
    },
    {} as Record<string, LinkedCourse[]>
  )
