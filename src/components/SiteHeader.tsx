import { useState, useEffect, useRef, useCallback } from 'react';
import { cnb } from 'cnbuilder';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Skiplink } from '@components/SkipLink';
import { LogoLockup } from '@components/Logo/LogoLockup';

const NAV = [
  { href: "/work", label: "Our work" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why Web Services" },
  { href: "/contact", label: "Contact us" },
];

const FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface SiteHeaderProps {
  activeLabel?: string;
  theme?: "light" | "dark";
}

export function SiteHeader({ activeLabel, theme = "light" }: SiteHeaderProps) {
  const isDark = theme === "dark";
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

  // Inert on drawer when closed — prevents tabbing to any element inside
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    if (drawerOpen) {
      drawer.removeAttribute('inert');
    } else {
      drawer.setAttribute('inert', '');
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
    <header className={isDark ? "bg-fill-primary" : "bg-white"}>
      <Skiplink />
      <div className={cnb("cc pt-5 pb-1", isDark ? "bg-fill-primary" : "bg-white")}>
        <a
          className={cnb("logo text-20 leading-none hocus:no-underline", isDark ? "text-dark-primary" : "text-black hocus:text-black")}
          href="https://www.stanford.edu"
        >
          Stanford University
        </a>
      </div>
      <div className="cc mt-10 md:mt-30 xl:mt-45">
        <div className="mx-auto flex flex-wrap items-start justify-between gap-6 pb-2">
          <LogoLockup text="Web Services" line2="University IT" color={isDark ? "white" : "default"} />

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-wrap items-center justify-end gap-33 pt-9" aria-label="Primary">
            {NAV.map(({ href, label }) => (
              <a
                key={label}
                data-astro-prefetch
                href={href}
                aria-current={label === activeLabel ? "page" : undefined}
                className={[
                  "border-b-4 pb-20 whitespace-nowrap text-19 font-semibold leading-snug transition-colors",
                  label === activeLabel
                    ? isDark
                      ? "border-border-dark-primary text-dark-primary"
                      : "border-sws-text text-primary"
                    : isDark
                      ? "border-transparent text-dark-primary hover:border-white/30 hover:text-dark-primary"
                      : "border-transparent text-digital-red hover:border-black-90/20 hover:text-black-90",
                ].join(" ")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setDrawerOpen(true)}
            className={cnb(
              "md:hidden mt-6 rounded p-6 transition-colors",
              isDark ? "text-dark-primary hover:bg-white/10" : "text-primary hover:bg-black/5"
            )}
          >
            <Bars3Icon className="size-28" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={cnb(
          "md:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-300",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile drawer — inert attribute set imperatively via useEffect when closed */}
      <div
        ref={drawerRef}
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={cnb(
          "md:hidden fixed inset-y-0 right-0 z-50 flex w-md flex-col shadow-xl transition-transform duration-300 ease-in-out",
          isDark ? "bg-fill-primary text-dark-primary" : "bg-white text-primary",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-16">
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            className={cnb(
              "rounded p-6 transition-colors",
              isDark ? "text-dark-primary hover:bg-white/10" : "text-primary hover:bg-black/5"
            )}
          >
            <XMarkIcon className="size-28" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col px-24 pb-24" aria-label="Primary">
          {NAV.map(({ href, label }) => (
            <a
              key={label}
              data-astro-prefetch
              href={href}
              aria-current={label === activeLabel ? "page" : undefined}
              className={cnb(
                "border-b py-16 text-19 font-semibold leading-snug transition-colors",
                label === activeLabel
                  ? isDark
                    ? "border-border-dark-primary text-dark-primary"
                    : "border-sws-text text-primary"
                  : isDark
                    ? "border-border-dark-primary/20 text-dark-primary hover:text-dark-primary/70"
                    : "border-black/10 text-digital-red hover:text-black-90"
              )}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
