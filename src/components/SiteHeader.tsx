import { UnitSignature } from "./UnitSignature";

const NAV = [
  { href: "/", label: "Our work" },
  { href: "#", label: "Services" },
  { href: "/why-web-services", label: "Why Web Services" },
  { href: "#", label: "Contact us" },
];

interface SiteHeaderProps {
  activeLabel?: string;
}

export function SiteHeader({ activeLabel }: SiteHeaderProps) {
  return (
    <header>
      <div className="bg-white py-1.5 pl-[clamp(1.25rem,5vw,100px)]">
        <div className="h-[18px] w-[146px]">
          <img
            src="/images/brand-bar-logo.svg"
            alt="Stanford University"
            width={146}
            height={18}
            className="size-full object-contain"
          />
        </div>
      </div>
      <div className="px-[clamp(1.25rem,5vw,100px)] pt-[30px]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-start justify-between gap-6 pb-2">
          <UnitSignature />
          <nav className="flex flex-wrap items-center justify-end gap-[33px] pt-2" aria-label="Primary">
            {NAV.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                aria-current={label === activeLabel ? "page" : undefined}
                className={[
                  "border-b-4 pb-5 whitespace-nowrap text-[19px] font-semibold transition-colors",
                  label === activeLabel
                    ? "border-sws-text text-sws-text"
                    : "border-transparent text-sws-digital-red hover:border-sws-text/20 hover:text-sws-text",
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