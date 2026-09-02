import { defineCollection, z } from "astro:content";

const dataset = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    source: z.string(),
    endpoint: z.string(),
    rows: z.number(),
    category: z.string(),
    sourceUrl: z.string().url().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.enum(["tutorial", "analysis", "announcement"]),
    tags: z.array(z.string()).optional(),
    toc: z.boolean().optional(),
  }),
});

export const collections = { dataset, blog };
