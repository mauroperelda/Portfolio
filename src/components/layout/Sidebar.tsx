import { NavLink, useLocation } from 'react-router-dom';
import { IconHome, IconBriefcase, IconFolder, IconLayers, IconMail } from '../ui/Icons';
import type { Lang } from '../../i18n/languages';
import { getPathWithoutLocale, localizedPath } from '../../i18n/utils';

interface NavItem {
  to: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  end?: boolean;
}

const NAV: NavItem[] = [
  { to: '/', label: 'Home', icon: IconHome, end: true },
  { to: '/experience', label: 'Experience', icon: IconBriefcase },
  { to: '/projects', label: 'Projects', icon: IconFolder },
  { to: '/stack', label: 'Stack', icon: IconLayers },
  { to: '/contact', label: 'Contact', icon: IconMail },
];

interface Props {
  lang: Lang;
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ lang, open, onClose }: Props) {
  const location = useLocation();
  const path = getPathWithoutLocale(location.pathname);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={
          'fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r border-border bg-bg-sidebar transition-transform duration-200 md:translate-x-0 ' +
          (open ? 'translate-x-0' : '-translate-x-full md:translate-x-0')
        }
        aria-label="Primary"
      >
        <a
          href={localizedPath(lang, '/')}
          className="flex h-16 items-center gap-3 border-b border-border px-5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-strong text-[14px] font-bold text-white">
            MP
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[14px] font-semibold text-fg">Mauro Perelda</span>
            <span className="text-[11px] text-fg-muted">Full Stack .NET</span>
          </span>
        </a>

        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {NAV.map((item) => {
              const target = localizedPath(lang, item.to);
              return (
                <li key={item.to}>
                  <NavLink
                    to={target}
                    end={item.end}
                    onClick={onClose}
                    className={({ isActive }) =>
                      'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors ' +
                      (isActive
                        ? 'bg-bg-hover text-fg'
                        : 'text-fg-muted hover:bg-bg-hover hover:text-fg')
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <item.icon
                          className={
                            'h-[18px] w-[18px] transition-colors ' +
                            (isActive ? 'text-accent' : 'text-fg-dim group-hover:text-fg-muted')
                          }
                        />
                        <span>{item.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border p-4 text-[11px] text-fg-dim">
          © {new Date().getFullYear()} Mauro Perelda
        </div>
      </aside>
    </>
  );
}