import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Footer } from './Footer';
import { getLangFromPath, getPathWithoutLocale } from '../../i18n/utils';

const SECTION_LABELS: Record<string, { es: string; en: string }> = {
  '': { es: 'Inicio', en: 'Home' },
  experience: { es: 'Experiencia', en: 'Experience' },
  projects: { es: 'Proyectos', en: 'Projects' },
  stack: { es: 'Stack', en: 'Stack' },
  contact: { es: 'Contacto', en: 'Contact' },
  odontosoft: { es: 'OdontoSoft', en: 'OdontoSoft' },
};

function getBreadcrumb(path: string, lang: 'es' | 'en') {
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return { section: SECTION_LABELS[''][lang] };
  const section = SECTION_LABELS[parts[0]]?.[lang] ?? parts[0];
  const sub = parts[1] ? SECTION_LABELS[parts[1]]?.[lang] ?? parts[1] : undefined;
  return { section, sub };
}

export function PageShell() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const lang = getLangFromPath(location.pathname);
  const path = getPathWithoutLocale(location.pathname);
  const breadcrumb = getBreadcrumb(path, lang);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Sidebar lang={lang} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="md:pl-64">
        <Topbar
          lang={lang}
          breadcrumb={breadcrumb}
          onOpenDrawer={() => setDrawerOpen(true)}
        />
        <main className="mx-auto max-w-5xl px-5 py-10 md:px-10 md:py-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}