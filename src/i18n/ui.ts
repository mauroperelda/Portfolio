/**
 * UI strings indexed by locale.
 * Use this for navigation, buttons, labels — anything that is NOT long-form
 * content (which lives in src/content/<collection>/<locale>/*.md).
 */

import type { Lang } from './languages';

export const ui = {
  es: {
    // Sidebar
    'nav.section.navigate': 'Navegación',
    'nav.section.connect': 'Conectar',
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.contact': 'Contact',

    // Topbar
    'topbar.contact.cta': 'Contacto',
    'topbar.theme.toggle': 'Cambiar tema',
    'topbar.lang.toggle': 'Cambiar idioma',
    'topbar.menu': 'Menú',
    'topbar.close': 'Cerrar menú',

    // Home
    'home.location': 'Villa María, Córdoba, Argentina',
    'home.hero.text':
      'Construyo sistemas .NET que escalan en producción: POS multitenant, e-invoicing, mobile a escala y RBAC con JWT. 5 años de experiencia end-to-end.',
    'home.cta.projects': 'Ver proyectos',
    'home.cta.contact': 'Contacto',
    'home.label.mainStack': 'Stack principal',
    'home.stat.years.label': 'Años de experiencia',
    'home.stat.years.sub': '.NET ecosystem',
    'home.stat.companies.label': 'Empresas',
    'home.stat.companies.sub': 'Smartfran · Storey · MEDVE · Maser',
    'home.stat.projects.label': 'Proyectos públicos',
    'home.stat.projects.sub': '+ 3 case studies anonimizados',

    // Experience
    'experience.title': 'Experiencia',
    'experience.subtitle': '5 años construyendo productos .NET en equipos remotos bajo Scrum.',
    'experience.mode.remote': 'Remoto',
    'experience.mode.onsite': 'Presencial',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle':
      '4 proyectos que muestran el alcance real: backend .NET, mobile, Blazor, integraciones.',
    'projects.viewCase': 'Ver caso',
    'projects.featured': 'Destacado',
    'projects.repo': 'Ver repo',
    'projects.backend': 'Ver backend',
    'projects.live': 'Ver sitio',

    // Project detail
    'project.problem': 'El problema',
    'project.architecture': 'Arquitectura',
    'project.decisions': 'Decisiones técnicas',
    'project.back': '← Volver a proyectos',

    // Stack
    'stack.title': 'Stack',
    'stack.subtitle': 'Tecnologías que uso en producción, organizadas por capa.',
    'stack.level.expert': 'Experto',
    'stack.level.advanced': 'Avanzado',
    'stack.level.familiar': 'Familiar',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Te interesa trabajar conmigo o tenés una propuesta? Escribime.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.placeholder.name': 'Tu nombre',
    'contact.placeholder.email': 'tu@email.com',
    'contact.placeholder.message': 'Contame en qué puedo ayudar...',
    'contact.submit': 'Enviar mensaje',
    'contact.section.email': 'Email',
    'contact.section.linkedin': 'LinkedIn',
    'contact.section.github': 'GitHub',
    'contact.note':
      'La forma más directa es por email — respondé dentro de 1-2 días hábiles.',

    // Footer
    'footer.built': 'Hecho con Astro + Tailwind 4.',
    'footer.rights': 'Todos los derechos reservados.',

    // Breadcrumbs
    'bc.projects': 'projects',
    'bc.odontosoft': 'odontosoft',

    // 404
    'notfound.title': 'Página no encontrada',
    'notfound.text': 'La página que buscás no existe o fue movida.',
    'notfound.back': 'Volver al inicio',
  },

  en: {
    'nav.section.navigate': 'Navigate',
    'nav.section.connect': 'Connect',
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.contact': 'Contact',

    'topbar.contact.cta': 'Contact',
    'topbar.theme.toggle': 'Toggle theme',
    'topbar.lang.toggle': 'Switch language',
    'topbar.menu': 'Menu',
    'topbar.close': 'Close menu',

    'home.location': 'Villa María, Córdoba, Argentina',
    'home.hero.text':
      'I build .NET systems that scale in production: multitenant POS, e-invoicing, mobile at scale and JWT-based RBAC. 5 years of end-to-end experience.',
    'home.cta.projects': 'See projects',
    'home.cta.contact': 'Contact',
    'home.label.mainStack': 'Main stack',
    'home.stat.years.label': 'Years of experience',
    'home.stat.years.sub': '.NET ecosystem',
    'home.stat.companies.label': 'Companies',
    'home.stat.companies.sub': 'Smartfran · Storey · MEDVE · Maser',
    'home.stat.projects.label': 'Public projects',
    'home.stat.projects.sub': '+ 3 anonymized case studies',

    'experience.title': 'Experience',
    'experience.subtitle':
      '5 years building .NET products on remote teams under Scrum.',
    'experience.mode.remote': 'Remote',
    'experience.mode.onsite': 'On-site',

    'projects.title': 'Projects',
    'projects.subtitle':
      '4 projects that show the real scope: .NET backend, mobile, Blazor, integrations.',
    'projects.viewCase': 'View case',
    'projects.featured': 'Featured',
    'projects.repo': 'View repo',
    'projects.backend': 'View backend',
    'projects.live': 'View site',

    'project.problem': 'The problem',
    'project.architecture': 'Architecture',
    'project.decisions': 'Technical decisions',
    'project.back': '← Back to projects',

    'stack.title': 'Stack',
    'stack.subtitle': 'Technologies I use in production, organized by layer.',
    'stack.level.expert': 'Expert',
    'stack.level.advanced': 'Advanced',
    'stack.level.familiar': 'Familiar',

    'contact.title': 'Contact',
    'contact.subtitle': 'Interested in working together or have a proposal? Reach out.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.email': 'you@email.com',
    'contact.placeholder.message': 'Tell me how I can help...',
    'contact.submit': 'Send message',
    'contact.section.email': 'Email',
    'contact.section.linkedin': 'LinkedIn',
    'contact.section.github': 'GitHub',
    'contact.note':
      'The fastest way to reach me is email — I reply within 1-2 business days.',

    'footer.built': 'Built with Astro + Tailwind 4.',
    'footer.rights': 'All rights reserved.',

    'bc.projects': 'projects',
    'bc.odontosoft': 'odontosoft',

    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or was moved.',
    'notfound.back': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['es'];

export type Translator = (key: UiKey) => string;