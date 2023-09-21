import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    keywords: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  "blog": blogCollection,
};