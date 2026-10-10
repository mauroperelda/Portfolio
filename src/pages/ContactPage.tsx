import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactInfo } from '../components/sections/ContactInfo';
import { useMeta } from '../hooks/useMeta';
import { useTranslations } from '../i18n/utils';
import { SITE, SOCIAL } from '../config/site';
import type { Lang } from '../i18n/languages';

interface Props {
  lang: Lang;
}

export function ContactPage({ lang }: Props) {
  const t = useTranslations(lang);

  const meta = useMeta({
    title: t('contact.title'),
    description: t('contact.description'),
    lang,
    pathname: '/contact',
    type: 'website',
  });

  const socials = [
    { label: 'GitHub', href: SOCIAL.github },
    { label: 'LinkedIn', href: SOCIAL.linkedin },
  ];

  return (
    <>
      {meta}
      <div>
        <SectionHeading
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          level={1}
        />
        <ContactInfo
          labels={{
            title: t('contact.cardTitle'),
            description: t('contact.cardDescription'),
            email: t('contact.emailCta'),
            emailCta: SITE.email,
            location: t('contact.location'),
            social: t('contact.social'),
          }}
          email={SITE.email}
          location={SITE.location}
          socials={socials}
        />
      </div>
    </>
  );
}