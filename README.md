# Mauro Perelda — Portfolio

Portfolio personal bilingüe (ES/EN). Construido con [Astro](https://astro.build/), [Tailwind CSS 4](https://tailwindcss.com/) y [React](https://react.dev/) (solo para las islands interactivas).

🌐 **Producción:** https://portfolio-mp.vercel.app

## Stack

- **Astro 7** — output estático + adapter Vercel
- **React 19** — solo islands (theme toggle, lang switcher, mobile drawer)
- **Tailwind CSS 4** — vía `@tailwindcss/vite`
- **Content Collections** — `experience`, `projects`, `stack` por locale, validados con Zod
- **i18n nativo de Astro** — prefijo de ruta (`/es/`, `/en/`), hreflang, sitemap

## Estructura

```
src/
├── content/           # experience · projects · stack (es/en) en Markdown
├── i18n/              # languages, ui strings, helpers
├── islands/           # React: ThemeToggle, LangSwitcher, MobileMenu
├── layouts/           # BaseLayout, PageLayout
├── components/
│   ├── layout/        # Sidebar, Topbar, Breadcrumb, Footer, SEO
│   ├── sections/      # Hero, StatsRow, ExperienceTimeline, ProjectsGrid, StackGrid, ContactInfo
│   └── ui/            # Tag, Card, Button, SectionHeading, Stat
├── pages/
│   ├── es/            # /es/, /es/experience, /es/projects, /es/projects/odontosoft, /es/stack, /es/contact
│   ├── en/            # espejos en inglés
│   ├── index.astro    # redirect → /es/
│   └── 404.astro
└── styles/            # tokens.css + global.css (Tailwind 4 + design tokens)
```

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # build de producción a ./dist
npm run preview      # preview del build
npm run check        # astro-check (TypeScript + Astro)
```

## Añadir contenido

- **Nuevo trabajo:** crear `src/content/experience/{es,en}/<slug>.md` con frontmatter Zod (ver `src/content/config.ts`).
- **Nuevo proyecto:** crear `src/content/projects/{es,en}/<slug>.md`. Para que tenga página de detalle, marcar `featured: true` y crear `src/pages/{es,en}/projects/<slug>.astro`.
- **Nueva categoría de stack:** crear `src/content/stack/{es,en}/<slug>.md` con `category` y `items[]`.
- **Nuevo string UI:** editar `src/i18n/ui.ts` (agregar en `es` y `en` con la misma clave).

## Despliegue

Push a `main` → Vercel auto-deploy. Configurar dominio custom en Vercel → Settings → Domains.

## Licencia

MIT — ver [LICENSE](LICENSE).