import { LogoLockup } from '@components/Logo/LogoLockup';
import { CtaLink } from '@components/CtaLink/CtaLink';

const NAV = [
  { href: "/work", label: "Our work" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why Web Services" },
  { href: "/contact", label: "Contact us" },
];

interface FooterLocalProps {
  activeLabel?: string;
}

export function FooterLocal({
  activeLabel,
}: FooterLocalProps) {
  return (
    <section className="cc bg-fill-secondary rs-py-6">
      <div className="grid md:grid-cols-2 md:gap-40">
        <div aria-hidden="true" />
        <div className="max-w-4xl flex-1 basis-md">
          <h2 className="rs-mb-2 font-serif type-2 font-normal leading-display">
            We’d love to hear about what you’re working on.
          </h2>
          <CtaLink variant="button-light" id="local-footer-connect-cta" href="/contact">
            Connect with us
          </CtaLink>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-8 rs-pt-6">
        <LogoLockup text="Web Services" line2="University IT" />
        <nav className="flex flex-wrap items-center justify-end gap-33 pt-2" aria-label="Footer">
          {NAV.map(({ href, label }) => (
            <a
              key={label}
              data-astro-prefetch
              href={href}
              aria-current={label === activeLabel ? "page" : undefined}
              className={[
                "border-b-4 pb-5 whitespace-nowrap text-19 font-semibold transition-colors",
                label === activeLabel
                  ? "border-sws-text text-primary"
                  : "border-transparent text-digital-red hover:border-sws-text/20 hover:text-primary",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
