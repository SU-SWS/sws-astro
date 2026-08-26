import { cnb } from 'cnbuilder';
import { Skiplink } from '@components/SkipLink';
import { LogoLockup } from '@components/Logo/LogoLockup';
import { MobileNav } from '@components/MobileNav';

const NAV = [
  { href: "/work", label: "Our work" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why Web Services" },
  { href: "/contact", label: "Contact us" },
];

interface SiteHeaderProps {
  activeLabel?: string;
  theme?: "light" | "dark";
}

export function SiteHeader({ activeLabel, theme = "light" }: SiteHeaderProps) {
  const isDark = theme === "dark";

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
      <div className="cc mt-10 md:mt-30">
        <div className="mx-auto flex flex-wrap items-start justify-between gap-20">
          <LogoLockup text="Web Services" line2="University IT" color={isDark ? "white" : "default"} />

          {/* Desktop nav */}
          <nav className="hidden xl:flex flex-wrap items-center justify-end gap-33 mt-9 2xl:mt-13" aria-label="Primary">
            {NAV.map(({ href, label }) => (
              <a
                key={label}
                data-astro-prefetch
                href={href}
                aria-current={label === activeLabel ? "page" : undefined}
                className={cnb(
                  "border-b-4 py-19 whitespace-nowrap text-19 font-semibold leading-snug transition-colors",
                  label === activeLabel
                    ? isDark
                      ? "border-border-dark-primary text-dark-primary"
                      : "border-border-dark-primary text-primary"
                    : isDark
                      ? "border-transparent text-dark-primary hocus-visible:border-white/30 hocus-visible:text-dark-primary"
                      : "border-transparent text-digital-red hocus-visible:border-black-90/20 hocus-visible:text-black-90",
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile drawer nav */}
          <MobileNav nav={NAV} activeLabel={activeLabel} isDark={isDark} />
        </div>
      </div>
    </header>
  );
}
