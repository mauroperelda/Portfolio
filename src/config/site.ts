const envSiteUrl = import.meta.env.VITE_SITE_URL;

export const SITE_URL: string =
  (typeof envSiteUrl === 'string' && envSiteUrl) || 'https://portfolio-mp.vercel.app';

export const SITE_NAME = 'Mauro Perelda — Portfolio';

export const AUTHOR = {
  name: 'Mauro Perelda',
  role: {
    es: 'Full Stack .NET Developer',
    en: 'Full Stack .NET Developer',
  },
  location: {
    city: 'Villa María',
    province: 'Córdoba',
    country: 'Argentina',
  },
  email: 'mauroperelda10@gmail.com',
} as const;

export const SOCIAL = {
  linkedin: 'https://linkedin.com/in/mauro-perelda-386603199',
  github: 'https://github.com/mauroperelda',
  email: 'mailto:mauroperelda10@gmail.com',
} as const;

export const DEFAULT_OG_IMAGE = '/og-image-es.png';

export const SITE = {
  name: SITE_NAME,
  url: SITE_URL,
  email: AUTHOR.email,
  location: `${AUTHOR.location.city}, ${AUTHOR.location.province}, ${AUTHOR.location.country}`,
} as const;