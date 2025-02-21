import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const certifications = defineCollection({
  loader: file("./source/components/Expertise/certifications.yml"),
  schema: (await import("./components/Expertise/Certification.ts")).zs,
});

export const collections = { certifications };
