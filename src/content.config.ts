import { z } from 'zod';

const locale = z.enum(['es', 'en']);

export const experienceSchema = z.object({
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
});

export const projectSchema = z.object({
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
});

export const stackSchema = z.object({
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
});

export type Experience = z.infer<typeof experienceSchema> & { slug: string; content: string };
export type Project = z.infer<typeof projectSchema> & { slug: string; content: string };
export type StackItem = z.infer<typeof stackSchema> & { slug: string };