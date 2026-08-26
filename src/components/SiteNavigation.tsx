import { cnb } from 'cnbuilder';
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
  const isDark = location === 'header' && theme === 'dark';
  const colorMode = isDark ? 'dark' : 'light';
  const ariaLabel = location === 'header' ? 'Primary' : 'Footer';

  return (
    <div className={styles.root}>
      <LogoLockup
        text="Web Services"
        line2="University IT"
        color={isDark ? 'white' : 'default'}
      />

      <nav className={styles.desktopNav} aria-label={ariaLabel}>
        {NAV_ITEMS.map(({ href, label }) => {
          const linkState = label === activeLabel ? 'active' : 'default';
          const colorStyles = styles.desktopLinkColors[colorMode][linkState];

          return (
            <a
              key={label}
              data-astro-prefetch
              href={href}
              aria-current={linkState === 'active' ? 'page' : undefined}
              className={cnb(
                styles.desktopLink,
                colorStyles,
              )}
            >
              {label}
            </a>
          );
        })}
      </nav>

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
