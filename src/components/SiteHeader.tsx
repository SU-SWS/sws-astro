import { UnitSignature } from "./UnitSignature";

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
    <header className={isDark ? "bg-sws-ood" : "bg-white"}>
      <div className={`${isDark ? "bg-sws-cardinal" : "bg-white"} pt-[6px]`}>
        <div className="cc pb-[6px]">
          <img
            src="/images/brand-bar-logo.svg"
            alt="Stanford University"
            width={146}
            height={18}
            className="block h-[18px] w-[146px] object-contain"
          />
        </div>
      </div>
      <div className="cc pt-[30px]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-start justify-between gap-6 pb-2">
          <UnitSignature theme={theme} />
          <nav className="flex flex-wrap items-center justify-end gap-[33px] pt-[9px]" aria-label="Primary">
            {NAV.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                aria-current={label === activeLabel ? "page" : undefined}
                className={[
                  "border-b-4 pb-[20px] whitespace-nowrap text-[19px] font-semibold leading-[1.32] transition-colors",
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
