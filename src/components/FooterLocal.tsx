import { LogoLockup } from "./Logo";

const NAV = [
  { href: "/", label: "Our work" },
  { href: "/services", label: "Services" },
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
    <footer className="bg-sws-tan px-[clamp(1.25rem,5vw,100px)] py-95">
      <div className="mx-auto max-w-1300 px-0">
        <div className="flex flex-wrap items-start gap-10">
          <div className="min-h-px min-w-120 flex-1 basis-120" aria-hidden />
          <div className="max-w-4xl flex-1 basis-md">
            <p className="m-0 font-serif text-33 font-normal leading-snug">
              {heading}
            </p>
            <a
              href={buttonHref}
              className="mt-38 inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-sws-red-bright bg-transparent px-19 py-2 font-sans text-19 leading-snug text-sws-text hover:bg-[rgba(248,53,53,0.08)]"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-8 pt-95">
          <LogoLockup text="Web Services" />
          <nav className="flex flex-wrap items-center justify-end gap-33 pt-2" aria-label="Footer">
            {NAV.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                aria-current={label === activeLabel ? "page" : undefined}
                className={[
                  "border-b-4 pb-5 whitespace-nowrap text-19 font-semibold transition-colors",
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
