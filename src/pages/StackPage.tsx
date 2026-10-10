import { SectionHeading } from '../components/ui/SectionHeading';
import { StackGrid } from '../components/sections/StackGrid';
import { useMeta } from '../hooks/useMeta';
import { useTranslations } from '../i18n/utils';
import { getStack } from '../content';
import type { Lang } from '../i18n/languages';

interface Props {
  lang: Lang;
}

export function StackPage({ lang }: Props) {
  const t = useTranslations(lang);
  const items = getStack(lang);

  const meta = useMeta({
    title: t('stack.title'),
    description: t('stack.description'),
    lang,
    pathname: '/stack',
    type: 'website',
  });

  return (
    <>
      {meta}
      <div>
        <SectionHeading
          title={t('stack.title')}
          subtitle={t('stack.subtitle')}
          level={1}
        />
        <StackGrid items={items} />
      </div>
    </>
  );
}