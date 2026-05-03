import { UnitSignature } from "./UnitSignature";

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
    <section className="cc bg-sws-tan rs-py-6">
      <div className="grid md:grid-cols-2 md:gap-40">
        <div aria-hidden="true" />
        <div className="max-w-4xl flex-1 basis-md">
          <h2 className="rs-mb-2 font-serif type-2 font-normal leading-display">
            We’d love to hear about what you’re working on.
          </h2>
          <a
            href="/contact"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-digital-red-xlight bg-transparent px-19 py-2 text-19 leading-snug text-primary hocus-visible:bg-digital-red-xlight/20"
          >
            Connect with us
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-8 rs-pt-6">
        <UnitSignature />
        <nav className="flex flex-wrap items-center justify-end gap-33 pt-2" aria-label="Footer">
          {NAV.map(({ href, label }) => (
            <a
              key={label}
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
