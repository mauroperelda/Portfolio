import { Routes, Route, Navigate, useParams, type RouteObject } from 'react-router-dom';
import { PageShell } from './components/layout/PageShell';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { StackPage } from './pages/StackPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LANGUAGES, type Lang } from './i18n/languages';

function LangRoute({ children }: { children: (lang: Lang) => React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const normalized: Lang = lang === 'en' ? 'en' : 'es';
  return <>{children(normalized)}</>;
}

function ProjectRoute({ children }: { children: (lang: Lang, slug: string) => React.ReactNode }) {
  const { lang, slug } = useParams<{ lang: string; slug: string }>();
  const normalized: Lang = lang === 'en' ? 'en' : 'es';
  return <>{children(normalized, slug ?? '')}</>;
}

const FEATURED_PROJECT_SLUG = 'odontosoft';

const STATIC_SECTION_PATHS = [
  { path: '', element: <HomePage lang="es" /> },
  { path: 'experience', element: <ExperiencePage lang="es" /> },
  { path: 'projects', element: <ProjectsPage lang="es" /> },
  { path: 'stack', element: <StackPage lang="es" /> },
  { path: 'contact', element: <ContactPage lang="es" /> },
  { path: '*', element: <NotFoundPage lang="es" /> },
] as const;

/**
 * Build the explicit route list for SSG. vite-react-ssg prerenders every
 * concrete path returned here. We enumerate /es/ and /en/ plus the featured
 * project detail page in both locales.
 */
export function getStaticRoutes(): RouteObject[] {
  const routes: RouteObject[] = [
    { path: '/', element: <Navigate to="/es/" replace /> },
  ];

  for (const lang of LANGUAGES) {
    routes.push({
      path: `/${lang.code}/`,
      element: <PageShell />,
      children: [
        { index: true, element: <HomePage lang={lang.code} /> },
        { path: 'experience', element: <ExperiencePage lang={lang.code} /> },
        { path: 'projects', element: <ProjectsPage lang={lang.code} /> },
        {
          path: `projects/${FEATURED_PROJECT_SLUG}`,
          element: <ProjectDetailPage lang={lang.code} slug={FEATURED_PROJECT_SLUG} />,
        },
        { path: 'stack', element: <StackPage lang={lang.code} /> },
        { path: 'contact', element: <ContactPage lang={lang.code} /> },
        { path: '*', element: <NotFoundPage lang={lang.code} /> },
      ],
    });
  }

  return routes;
}

/**
 * Routes used by vite-react-ssg for prerendering. Same shape as getStaticRoutes.
 */
export const routes: RouteObject[] = getStaticRoutes();

/**
 * Client SPA router. Uses :lang pattern so the same shell can handle
 * locale switching without a hard reload.
 */
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/es/" replace />} />
      <Route path="/:lang/" element={<PageShell />}>
        <Route
          index
          element={
            <LangRoute>
              {(lang) => <HomePage lang={lang} />}
            </LangRoute>
          }
        />
        <Route
          path="experience"
          element={
            <LangRoute>
              {(lang) => <ExperiencePage lang={lang} />}
            </LangRoute>
          }
        />
        <Route
          path="projects"
          element={
            <LangRoute>
              {(lang) => <ProjectsPage lang={lang} />}
            </LangRoute>
          }
        />
        <Route
          path="projects/:slug"
          element={
            <ProjectRoute>
              {(lang, slug) => <ProjectDetailPage lang={lang} slug={slug} />}
            </ProjectRoute>
          }
        />
        <Route
          path="stack"
          element={
            <LangRoute>
              {(lang) => <StackPage lang={lang} />}
            </LangRoute>
          }
        />
        <Route
          path="contact"
          element={
            <LangRoute>
              {(lang) => <ContactPage lang={lang} />}
            </LangRoute>
          }
        />
        <Route
          path="*"
          element={
            <LangRoute>
              {(lang) => <NotFoundPage lang={lang} />}
            </LangRoute>
          }
        />
      </Route>
    </Routes>
  );
}

// Suppress unused-warning for the static-section-paths constant (kept for reference)
void STATIC_SECTION_PATHS;