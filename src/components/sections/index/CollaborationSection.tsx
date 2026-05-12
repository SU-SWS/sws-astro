import { Container } from '@components/Container';
import { CtaLink } from '@components/CtaLink';

const CARDS = [
  {
    title: "Modern practices. Flexible platforms. Award-winning work.",
    body: "Grounded in current industry standards and best-in-class practices, we work across web platforms and apps, shaping design and UX around the right solution for your product.",
    ctaLabel: "Explore our work",
    ctaHref: "/work",
    ctaId: "home-explore-work-cta",
  },
  {
    title: "Digital solutions, without the overhead.",
    body: "We build products so your team can have a secure, accessible, beautiful, and fully compliant digital presence — without becoming technical administrators.",
    ctaLabel: "Learn about our services",
    ctaHref: "/services",
    ctaId: "home-learn-services-cta",
  },
  {
    title: "The team Stanford teams trust.",
    body: "Years of solving the exact challenges our neighbors face. Award-winning design, technical depth, and a commitment to your success — whether we're building your product or helping you find someone who will.",
    ctaLabel: "Why Web Services",
    ctaHref: "/why",
    ctaId: "home-why-web-services-cta",
  },
];

export function CollaborationSection() {
  return (
    <Container bgColor="sand" pt={8} pb={9}>
      <div className="max-w-1100 mx-auto">
        <h2 className="fluid-type-1 font-semibold rs-mb-1">Collaboration that bring ideas to life</h2>
        <p className="max-w-800 font-serif fluid-type-2 leading-snug">
          We work closely with the Stanford community to translate complex goals into clear, engaging, and easy-to-manage experiences.
        </p>
        <div className="rs-mt-6 grid rs-gap-3 grid-cols-1 lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <div key={`${card.title}-${index}`}>
              <h3 className="fluid-type-1 font-serif leading-display">
                {card.title}
              </h3>
              <p className="caption leading-display max-w-prose">{card.body}</p>
              <CtaLink href={card.ctaHref} id={card.ctaId} variant="button-light" className="rs-mt-1">
                {card.ctaLabel}
              </CtaLink>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
