import { cnb } from 'cnbuilder';
import { Skiplink } from '@components/SkipLink';
import { LogoLockup } from '@components/Logo/LogoLockup';

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
      <div  className={cnb("cc pt-5 pb-1", isDark ? "bg-fill-primary" : "bg-white")}>
        <a
          className={cnb("logo text-20 leading-none hocus:no-underline", isDark ? "text-dark-primary" : "text-black hocus:text-black")}
          href="https://www.stanford.edu"
        >
          Stanford University
        </a>
      </div>
      <div className="cc mt-10 md:mt-45">
        <div className="mx-auto flex flex-wrap items-start justify-between gap-6 pb-2">
          <LogoLockup text="Web Services" line2="University IT" color={isDark ? "white" : "default"} />
          <nav className="flex flex-wrap items-center justify-end gap-33 pt-9" aria-label="Primary">
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
        </div>
      </div>
    </header>
  );
}
