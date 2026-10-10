import type { Lang } from './languages';

export const ui = {
  es: {
    // nav (sidebar)
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.stack': 'Stack',
    'nav.contact': 'Contacto',

    // topbar
    'topbar.theme.toggle': 'Cambiar tema',
    'topbar.lang.toggle': 'Cambiar idioma',
    'topbar.menu': 'Menú',

    // home
    'home.title': 'Mauro Perelda — Full Stack .NET Developer',
    'home.description':
      'Portfolio de Mauro Perelda, Full Stack .NET Developer con 5 años de experiencia en backend, mobile, Blazor y cloud.',
    'home.role': 'Full Stack .NET Developer',
    'home.location': 'Villa María, Córdoba, Argentina',
    'home.tagline':
      'Construyo sistemas .NET que escalan en producción: POS multitenant, e-invoicing, mobile a escala y RBAC con JWT.',
    'home.hero.available': 'Disponible para nuevos proyectos',
    'home.cta.projects': 'Ver proyectos',
    'home.cta.contact': 'Contacto',
    'home.stats.years': 'Años de experiencia',
    'home.stats.yearsSub': '.NET ecosystem',
    'home.stats.companies': 'Empresas',
    'home.stats.companiesSub': 'Smartfran · Storey · MEDVE · Maser',
    'home.stats.projects': 'Proyectos',
    'home.stats.projectsSub': '4 publicados',
    'home.stats.stack': 'Tecnologías',
    'home.stats.stackSub': 'en producción',
    'home.experienceTitle': 'Experiencia reciente',
    'home.experienceSubtitle': 'Una muestra de los últimos 5 años.',
    'home.experienceAll': 'Ver toda la experiencia →',
    'home.featuredTitle': 'Proyecto destacado',
    'home.featuredSubtitle': 'El caso más completo del portfolio.',

    // experience
    'experience.title': 'Experiencia',
    'experience.subtitle':
      '5 años construyendo productos .NET en equipos remotos bajo Scrum.',
    'experience.description':
      'Línea de tiempo completa de experiencia profesional: roles, empresas, stacks y logros clave.',
    'experience.current': 'Presente',
    'experience.remote': 'Remoto',
    'experience.onsite': 'Presencial',

    // projects
    'projects.title': 'Proyectos',
    'projects.subtitle':
      '4 proyectos que muestran el alcance real: backend .NET, mobile, Blazor, integraciones.',
    'projects.description':
      'Portfolio de proyectos: OdontoSoft, POS Multitenant, Omega Lecturista Digital, ExtraCore.',
    'projects.viewDetail': 'Ver detalle',
    'projects.code': 'Ver código',
    'projects.live': 'Ver sitio',
    'projects.featured': 'Destacado',

    // stack
    'stack.title': 'Stack',
    'stack.subtitle': 'Tecnologías que uso en producción, organizadas por capa.',
    'stack.description':
      'Stack técnico: backend, frontend, mobile, bases de datos, cloud, seguridad, APIs y herramientas.',

    // contact
    'contact.title': 'Contacto',
    'contact.subtitle':
      '¿Te interesa trabajar conmigo o tenés una propuesta? Escribime.',
    'contact.description':
      'Contactá a Mauro Perelda para propuestas de trabajo, colaboración o consultas técnicas.',
    'contact.cardTitle': 'Hablemos',
    'contact.cardDescription':
      'La forma más directa es por email — respondo dentro de 1-2 días hábiles.',
    'contact.emailCta': 'Enviar email',
    'contact.location': 'Villa María, Córdoba, Argentina',
    'contact.social': 'Conectar',
    'contact.email': 'Email',

    // footer
    'footer.built': 'Hecho con Vite + React + Tailwind 4.',
    'footer.rights': 'Todos los derechos reservados.',

    // 404
    'notFound.title': 'Página no encontrada',
    'notFound.description': 'La página que buscás no existe o fue movida.',
    'notFound.cta': 'Volver al inicio',
  },

  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.contact': 'Contact',

    'topbar.theme.toggle': 'Toggle theme',
    'topbar.lang.toggle': 'Switch language',
    'topbar.menu': 'Menu',

    'home.title': 'Mauro Perelda — Full Stack .NET Developer',
    'home.description':
      'Portfolio of Mauro Perelda, Full Stack .NET Developer with 5 years of experience in backend, mobile, Blazor and cloud.',
    'home.role': 'Full Stack .NET Developer',
    'home.location': 'Villa María, Córdoba, Argentina',
    'home.tagline':
      'I build .NET systems that scale in production: multitenant POS, e-invoicing, mobile at scale and JWT-based RBAC.',
    'home.hero.available': 'Available for new projects',
    'home.cta.projects': 'See projects',
    'home.cta.contact': 'Contact',
    'home.stats.years': 'Years of experience',
    'home.stats.yearsSub': '.NET ecosystem',
    'home.stats.companies': 'Companies',
    'home.stats.companiesSub': 'Smartfran · Storey · MEDVE · Maser',
    'home.stats.projects': 'Projects',
    'home.stats.projectsSub': '4 published',
    'home.stats.stack': 'Technologies',
    'home.stats.stackSub': 'in production',
    'home.experienceTitle': 'Recent experience',
    'home.experienceSubtitle': 'A sample from the last 5 years.',
    'home.experienceAll': 'See all experience →',
    'home.featuredTitle': 'Featured project',
    'home.featuredSubtitle': 'The most complete case in the portfolio.',

    'experience.title': 'Experience',
    'experience.subtitle':
      '5 years building .NET products on remote teams under Scrum.',
    'experience.description':
      'Full professional experience timeline: roles, companies, stacks and key achievements.',
    'experience.current': 'Present',
    'experience.remote': 'Remote',
    'experience.onsite': 'On-site',

    'projects.title': 'Projects',
    'projects.subtitle':
      '4 projects that show the real scope: .NET backend, mobile, Blazor, integrations.',
    'projects.description':
      'Project portfolio: OdontoSoft, POS Multitenant, Omega Lecturista Digital, ExtraCore.',
    'projects.viewDetail': 'View detail',
    'projects.code': 'View code',
    'projects.live': 'View site',
    'projects.featured': 'Featured',

    'stack.title': 'Stack',
    'stack.subtitle': 'Technologies I use in production, organized by layer.',
    'stack.description':
      'Tech stack: backend, frontend, mobile, databases, cloud, security, APIs and tooling.',

    'contact.title': 'Contact',
    'contact.subtitle': 'Interested in working together or have a proposal? Reach out.',
    'contact.description':
      'Get in touch with Mauro Perelda for work proposals, collaboration or technical questions.',
    'contact.cardTitle': "Let's talk",
    'contact.cardDescription':
      'The fastest way to reach me is email — I reply within 1-2 business days.',
    'contact.emailCta': 'Send email',
    'contact.location': 'Villa María, Córdoba, Argentina',
    'contact.social': 'Connect',
    'contact.email': 'Email',

    'footer.built': 'Built with Vite + React + Tailwind 4.',
    'footer.rights': 'All rights reserved.',

    'notFound.title': 'Page not found',
    'notFound.description': 'The page you are looking for does not exist or was moved.',
    'notFound.cta': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['es'];

export type Translator = (key: UiKey) => string;