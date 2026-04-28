import { UnitSignature } from "./UnitSignature";
// import brandBarLogo from '@images/brand-bar-logo.svg';

const NAV = [
  { href: "/", label: "Our work" },
  { href: "/services", label: "Services" },
  { href: "/why-web-services", label: "Why Web Services" },
  { href: "#", label: "Contact us" },
];

interface SiteHeaderProps {
  activeLabel?: string;
  theme?: "light" | "dark";
}

export function SiteHeader({ activeLabel, theme = "light" }: SiteHeaderProps) {
  const isDark = theme === "dark";

  return (
    <header className={isDark ? "bg-campaign-black" : "bg-white"}>
      <div className={`${isDark ? "bg-sws-cardinal" : "bg-white"} pt-6`}>
        <div className="cc pb-6">
          {/* <img
            src={brandBarLogo.src}
            alt="Stanford University"
            width={146}
            height={18}
            className="block h-18 w-146 object-contain"
          /> */}
        </div>
      </div>
      <div className="cc pt-30">
        <div className="mx-auto flex flex-wrap items-start justify-between gap-6 pb-2">
          <UnitSignature theme={theme} />
          <nav className="flex flex-wrap items-center justify-end gap-33 pt-9" aria-label="Primary">
            {NAV.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                aria-current={label === activeLabel ? "page" : undefined}
                className={[
                  "border-b-4 pb-20 whitespace-nowrap text-19 font-semibold leading-snug transition-colors",
                  label === activeLabel
                    ? isDark
                      ? "border-black-60 text-white"
                      : "border-sws-text text-sws-text"
                    : isDark
                      ? "border-transparent text-white hover:border-white/30 hover:text-white"
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
