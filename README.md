# Mauro Perelda — Portfolio

Bilingual personal portfolio (ES / EN) built with Vite + React 19 + TypeScript and pre-rendered to static HTML with [vite-react-ssg](https://github.com/antfu/vite-react-ssg).

## Stack

- **Vite 8** as build tool
- **React 19** + **react-router-dom 7** for client-side routing
- **vite-react-ssg** for static site generation (pre-renders each route to HTML)
- **Tailwind CSS 4** via `@tailwindcss/vite` (no `tailwind.config.js`, uses `@theme` directives)
- **gray-matter** for parsing frontmatter from `.md` files
- **zod** for runtime validation of content data
- Bilingual via route prefix (`/es/`, `/en/`)
- Dark / light theme with `localStorage` persistence (anti-FOUC inline bootstrap)
- Deployed to Vercel

## Scripts

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run typecheck  # tsc --noEmit
npm run build      # SSG build → dist/
npm run preview    # preview the built site
```

## Project structure

```
src/
├── App.tsx              # React Router routes
├── main.tsx             # vite-react-ssg entry
├── content.ts           # Markdown loader (import.meta.glob + gray-matter + zod)
├── content.config.ts    # Zod schemas for collections
├── content/             # 32 markdown files (4 exp × 2 + 4 proj × 2 + 8 stack × 2)
├── components/
│   ├── layout/          # PageShell, Sidebar, Topbar, Footer
│   ├── sections/        # Hero, StatsRow, ExperienceTimeline, ProjectsGrid, StackGrid, ContactInfo
│   └── ui/              # Tag, Card, Button, SectionHeading, Stat, Icons
├── pages/               # Route components
├── hooks/               # useTheme, useLang, useMeta
├── i18n/                # languages, ui strings, utils
├── config/              # site, seo
├── lib/                 # format-date helpers
└── styles/              # tokens.css, global.css
public/                  # favicon, robots.txt
```

## Routes

- `/` → redirects to `/es/`
- `/:lang/` — Home
- `/:lang/experience` — Experience timeline
- `/:lang/projects` — Projects grid
- `/:lang/projects/:slug` — Project detail (only `odontosoft` is featured)
- `/:lang/stack` — Stack categories
- `/:lang/contact` — Contact card

## Environment

Optional: set `VITE_SITE_URL` in `.env` to override the default `https://portfolio-mp.vercel.app`.
