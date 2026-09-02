import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dataset = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/dataset" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    source: z.string(),
    endpoint: z.string(),
    rows: z.number(),
    category: z.string(),
    sourceUrl: z.string().url().optional(),
    lastUpdated: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
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
