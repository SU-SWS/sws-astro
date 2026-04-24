import { UnitSignature } from "./UnitSignature";

const NAV = [
  { href: "/", label: "Our work" },
  { href: "#", label: "Services" },
  { href: "/why-web-services", label: "Why Web Services" },
  { href: "#", label: "Contact us" },
];

interface FooterLocalProps {
  heading?: string;
  buttonHref?: string;
  buttonLabel?: string;
  activeLabel?: string;
}

export function FooterLocal({
  heading = "Curabitur condimentum ipsum nec purus interdum commodo.",
  buttonHref = "#",
  buttonLabel = "Connect with us",
  activeLabel,
}: FooterLocalProps) {
  return (
    <footer className="bg-sws-tan px-[clamp(1.25rem,5vw,100px)] py-[95px]">
      <div className="mx-auto max-w-[1300px] px-0">
        <div className="flex flex-wrap items-start gap-10">
          <div className="min-h-px min-w-[120px] flex-1 basis-[120px]" aria-hidden />
          <div className="max-w-[560px] flex-1 basis-[280px]">
            <p className="m-0 font-serif text-[33px] font-normal leading-snug">
              {heading}
            </p>
            <a
              href={buttonHref}
              className="mt-[38px] inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-sws-red-bright bg-transparent px-[19px] py-2 font-sans text-[19px] font-[350] leading-snug text-sws-text hover:bg-[rgba(248,53,53,0.08)]"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-8 pt-[95px]">
          <UnitSignature />
          <nav className="flex flex-wrap items-center justify-end gap-[33px] pt-2" aria-label="Footer">
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
    </footer>
  );
}