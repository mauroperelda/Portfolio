import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { IconMail, IconPin } from '../ui/Icons';

interface Props {
  labels: {
    title: string;
    description: string;
    email: string;
    emailCta: string;
    location: string;
    social: string;
  };
  email: string;
  location: string;
  socials: { label: string; href: string }[];
}

export function ContactInfo({ labels, email, location, socials }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Card className="p-5 md:col-span-2">
        <h3 className="text-[15.5px] font-semibold text-fg">{labels.title}</h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
          {labels.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button href={`mailto:${email}`} variant="primary" size="md">
            <IconMail className="h-4 w-4" />
            <span>{labels.emailCta}</span>
          </Button>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-fg-muted">
            <IconPin className="h-4 w-4" />
            {location}
          </span>
        </div>
      </Card>

      <Card className="p-5">
        <h3 className="text-[13.5px] font-semibold uppercase tracking-wider text-fg-muted">
          {labels.social}
        </h3>
        <ul className="mt-3 space-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-[13.5px] text-fg hover:text-accent"
              >
                <span>{s.label}</span>
                <span className="text-fg-dim">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}