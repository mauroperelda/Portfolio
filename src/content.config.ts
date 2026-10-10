import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const locale = z.enum(['es', 'en']);

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.object({
      from: z.string().regex(/^\d{4}-\d{2}$/),
      to: z.string().regex(/^\d{4}-\d{2}$/).nullable(),
    }),
    location: z.string(),
    remote: z.boolean().default(false),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    order: z.number().default(0),
    locale,
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string().optional(),
    featured: z.boolean().default(false),
    repoUrl: z.string().url().optional(),
    repoUrlSecondary: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    stack: z.array(z.string()),
    coverGradient: z.string().optional(),
    order: z.number().default(0),
    locale,
  }),
});

const stack = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stack' }),
  schema: z.object({
    category: z.enum([
      'Backend',
      'Frontend',
      'Mobile',
      'DB',
      'Cloud/DevOps',
      'Security',
      'APIs',
      'Docs',
    ]),
    items: z.array(
      z.object({
        name: z.string(),
        level: z.enum(['expert', 'advanced', 'familiar']).optional(),
        years: z.number().optional(),
      }),
    ),
    order: z.number().default(0),
    locale,
  }),
});

export const collections = { experience, projects, stack };