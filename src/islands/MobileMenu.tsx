/**
 * MobileMenu — React island.
 * Hamburger button (shown on mobile) that opens a slide-in drawer with the
 * same nav as the desktop sidebar. The drawer traps focus and closes on
 * Escape, backdrop click, or nav-link click.
 */

import { useEffect, useState } from 'react';
import type { UiKey } from '../i18n/ui';

interface NavItem {
  key: UiKey;
  href: string;
}

interface Props {
  items: ReadonlyArray<NavItem>;
  brandName: string;
  brandTitle: string;
  openLabel: string;
  closeLabel: string;
  sectionNavigateLabel: string;
  sectionConnectLabel: string;
}

export default function MobileMenu({
  items,
  brandName,
  brandTitle,
  openLabel,
  closeLabel,
  sectionNavigateLabel,
  sectionConnectLabel,
}: Props) {
  const [open, setOpen] = useState(false);

  // Split items into navigate (first 4) and connect (last 1)
  const navigateItems = items.slice(0, items.length - 1);
  const connectItems = items.slice(-1);

  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        title={openLabel}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:bg-bg-hover hover:text-fg md:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Overlay + Drawer (mounted only when open) */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={close}
            aria-hidden="true"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-sidebar-bg text-white shadow-xl transition-transform md:hidden"
          >
            <div className="flex items-center justify-between border-b border-border-light px-5 py-4">
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] text-sm font-bold text-white"
                  style={{
                    background:
                      'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  }}
                  aria-hidden="true"
                >
                  MP
                </div>
                <div>
                  <div className="text-sm font-semibold">{brandName}</div>
                  <div className="text-[11px] text-sidebar-fg">
                    {brandTitle}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label={closeLabel}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sidebar-fg hover:bg-white/10 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="px-5 pt-5 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-sidebar-section">
              {sectionNavigateLabel}
            </div>
            <nav className="flex flex-col">
              {navigateItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={close}
                  className="px-5 py-2.5 text-[13.5px] text-sidebar-fg transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.key}
                </a>
              ))}
            </nav>

            <div className="px-5 pt-5 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-sidebar-section">
              {sectionConnectLabel}
            </div>
            <nav className="flex flex-col">
              {connectItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={close}
                  className="px-5 py-2.5 text-[13.5px] text-sidebar-fg transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.key}
                </a>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}