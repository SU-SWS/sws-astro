import { useState, useEffect, useRef, useCallback } from 'react';
import { cnb } from 'cnbuilder';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface MobileNavProps {
  nav: { href: string; label: string }[];
  activeLabel?: string;
  isDark?: boolean;
  drawerId: string;
  navLabel: string;
}

export function MobileNav({
  nav,
  activeLabel,
  isDark,
  drawerId,
  navLabel,
}: MobileNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const prevOpenRef = useRef(false);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Focus management: open → focus close button; close → return focus to hamburger
  useEffect(() => {
    if (drawerOpen) {
      prevOpenRef.current = true;
      closeButtonRef.current?.focus();
    } else if (prevOpenRef.current) {
      prevOpenRef.current = false;
      hamburgerRef.current?.focus();
    }
  }, [drawerOpen]);

  // Keyboard: Escape closes; Tab traps focus inside drawer
  useEffect(() => {
    if (!drawerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer();
        return;
      }

      if (e.key === 'Tab') {
        const drawer = drawerRef.current;
        if (!drawer) return;
        const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen, closeDrawer]);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        ref={hamburgerRef}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={drawerOpen}
        aria-controls={drawerId}
        onClick={() => setDrawerOpen(true)}
        className={cnb(
          "xl:hidden mt-6 rounded p-6 transition-colors",
          isDark ? "text-dark-primary hocus-visible:bg-white/10" : "text-primary hocus-visible:bg-black/5"
        )}
      >
        <Bars3Icon className="size-28" aria-hidden="true" />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={cnb(
          "xl:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-300",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id={drawerId}
        inert={!drawerOpen}
        role="dialog"
        aria-modal="true"
        aria-label={`${navLabel} navigation`}
        className={cnb(
          "xl:hidden fixed inset-y-0 right-0 z-50 flex w-md flex-col shadow-xl transition-transform duration-300 ease-in-out bg-fill-primary text-dark-primary",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-16">
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            className="rounded p-6 transition-colors text-dark-primary hocus-visible:bg-white/10"
          >
            <XMarkIcon className="size-28" aria-hidden="true" />
          </button>
        </div>

        <nav className="px-24 pb-24" aria-label={navLabel}>
          <ul className="flex flex-col list-unstyled">
            {nav.map(({ href, label }) => (
              <li key={label} className="block border-b border-black-80 mb-0 leading-display">
                <a
                  data-astro-prefetch
                  href={href}
                  aria-current={label === activeLabel ? "page" : undefined}
                  className="block py-20 text-20 font-semibold leading-display transition-colors text-dark-primary hocus-visible:text-digital-red-xlight"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
