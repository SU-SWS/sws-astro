import { useState } from 'react';
import { cnb } from 'cnbuilder';
import { LayoutGroup, LazyMotion, domMax, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { LogoLockup } from '@components/Logo/LogoLockup';
import { MobileNav } from '@components/MobileNav';
import * as styles from './SiteNavigation.styles';

const NAV_ITEMS = [
  { href: '/work', label: 'Our work' },
  { href: '/services', label: 'Services' },
  { href: '/why', label: 'Why Web Services' },
  { href: '/contact', label: 'Contact us' },
];

interface SiteNavigationProps {
  activeLabel?: string;
  location: 'header' | 'footer';
  theme?: 'light' | 'dark';
}

export function SiteNavigation({
  activeLabel,
  location,
  theme = 'light',
}: SiteNavigationProps) {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [focusedLabel, setFocusedLabel] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isDark = location === 'header' && theme === 'dark';
  const colorMode = isDark ? 'dark' : 'light';
  const ariaLabel = location === 'header' ? 'Primary' : 'Footer';
  const highlightedLabel = focusedLabel ?? hoveredLabel ?? activeLabel;
  const indicatorState = highlightedLabel === activeLabel ? 'active' : 'hover';

  return (
    <div className={styles.root}>
      <LogoLockup
        text="Web Services"
        line2="University IT"
        color={isDark ? 'white' : 'default'}
      />

      <LazyMotion features={domMax}>
        <LayoutGroup id={`${location}-desktop-navigation`}>
          <nav
            className={styles.desktopNav}
            aria-label={ariaLabel}
            onMouseLeave={() => setHoveredLabel(null)}
          >
            {NAV_ITEMS.map(({ href, label }) => {
              const linkState = label === activeLabel ? 'active' : 'default';
              const colorStyles = styles.desktopLinkColors[colorMode][linkState];

              return (
                <a
                  key={label}
                  data-astro-prefetch
                  href={href}
                  aria-current={linkState === 'active' ? 'page' : undefined}
                  onMouseEnter={() => setHoveredLabel(label)}
                  onFocus={() => setFocusedLabel(label)}
                  onBlur={() => setFocusedLabel(null)}
                  className={cnb(
                    styles.desktopLink,
                    colorStyles,
                  )}
                >
                  {label}
                  {label === highlightedLabel && (
                    <m.span
                      layoutId="desktop-navigation-indicator"
                      data-nav-indicator
                      aria-hidden="true"
                      className={cnb(
                        styles.desktopIndicator,
                        styles.desktopIndicatorColors[colorMode][indicatorState],
                      )}
                      transition={prefersReducedMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </LayoutGroup>
      </LazyMotion>

      <MobileNav
        nav={NAV_ITEMS}
        activeLabel={activeLabel}
        isDark={isDark}
        drawerId={`${location}-mobile-nav-drawer`}
        navLabel={ariaLabel}
      />
    </div>
  );
}
