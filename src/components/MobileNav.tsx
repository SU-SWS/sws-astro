import { useState, useEffect, useRef, useCallback } from 'react';
import { cnb } from 'cnbuilder';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LayoutGroup, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import * as styles from './MobileNav.styles';

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
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const activeIndex = nav.findIndex(({ label }) => label === activeLabel);
  const indicatorIndex = highlightedIndex ?? (activeIndex >= 0 ? activeIndex : null);
  const indicatorState = indicatorIndex === activeIndex ? 'active' : 'hover';
  const drawerState = drawerOpen ? 'open' : 'closed';

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const prevOpenRef = useRef(false);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setHighlightedIndex(null);
  }, []);

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
          styles.menuButton,
          styles.menuButtonColors[isDark ? 'dark' : 'light'],
        )}
      >
        <Bars3Icon className={styles.hamburgerIcon} aria-hidden="true" />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={cnb(
          styles.backdrop,
          styles.backdropStates[drawerState],
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
          styles.drawer,
          styles.drawerStates[drawerState],
        )}
      >
        <div className={styles.drawerHeader}>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            className={cnb(styles.menuButton, styles.closeButton)}
          >
            <XMarkIcon className={styles.closeIcon} aria-hidden="true" />
          </button>
        </div>

        <LayoutGroup id={`${drawerId}-navigation`}>
          <nav
            className={styles.nav}
            aria-label={navLabel}
            onMouseLeave={() => setHighlightedIndex(null)}
          >
            <ul className={styles.navList}>
              {nav.map(({ href, label }, index) => (
                <li key={label} className={styles.navItem}>
                  <a
                    data-astro-prefetch
                    href={href}
                    aria-current={label === activeLabel ? "page" : undefined}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onFocus={() => setHighlightedIndex(index)}
                    onBlur={() => setHighlightedIndex(null)}
                    className={styles.navLink}
                  >
                    {label}
                    {index === indicatorIndex && (
                      <m.span
                        layoutId="mobile-navigation-indicator"
                        data-mobile-nav-indicator
                        aria-hidden="true"
                        className={cnb(
                          styles.navIndicator,
                          styles.navIndicatorColors[indicatorState],
                        )}
                        transition={prefersReducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </LayoutGroup>
      </div>
    </>
  );
}
