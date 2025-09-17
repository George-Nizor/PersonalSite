import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    readTime: z.string(),
    image: z.string().optional(),
    author: z.string(),
    draft: z.boolean().default(false),
    // Legacy support
    description: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    hero: z.string().optional()
  })
});

export const collections = {
  blog
};
