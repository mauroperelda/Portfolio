/**
 * Content loader.
 * All markdown files are pre-parsed at build time by the `md-frontmatter` Vite
 * plugin (see vite-plugins/md-frontmatter.ts). Each import yields
 * `{ data, body, slug, locale }` — no Node-only deps in the client bundle.
 */

import { experienceSchema, projectSchema, stackSchema, type Experience, type Project, type StackItem } from './content.config';

interface MdModule {
  data: Record<string, unknown>;
  body: string;
  slug: string;
  locale: 'es' | 'en';
}

const experienceModules = import.meta.glob<MdModule>('./content/experience/**/*.md', { eager: true });
const projectModules = import.meta.glob<MdModule>('./content/projects/**/*.md', { eager: true });
const stackModules = import.meta.glob<MdModule>('./content/stack/**/*.md', { eager: true });

function validateAndMap<T>(mods: Record<string, MdModule>, schema: import('zod').ZodSchema<T>): Array<T & { slug: string; content: string }> {
  return Object.entries(mods).map(([path, m]) => {
    const parsed = schema.parse(m.data);
    return { ...parsed, slug: m.slug, content: m.body };
  });
}

const allExperiences = validateAndMap(experienceModules, experienceSchema);
const allProjects = validateAndMap(projectModules, projectSchema);
const allStack = validateAndMap(stackModules, stackSchema);

function sortByOrder<T extends { order: number }>(arr: T[]): T[] {
  return [...arr].sort((a, b) => a.order - b.order);
}

export function getExperiences(locale: 'es' | 'en'): Experience[] {
  return sortByOrder(allExperiences.filter((e) => e.locale === locale)) as Experience[];
}

export function getProjects(locale: 'es' | 'en'): Project[] {
  return sortByOrder(allProjects.filter((p) => p.locale === locale)) as Project[];
}

export function getStack(locale: 'es' | 'en'): StackItem[] {
  return sortByOrder(allStack.filter((s) => s.locale === locale)) as StackItem[];
}

export function getProject(locale: 'es' | 'en', slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}