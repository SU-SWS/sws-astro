import { Container } from '@components/Container/Container';
import { CtaLink } from '@components/CtaLink/CtaLink';

const CARDS = [
  {
    title: "Modern practices. Award-winning work.",
    body: "Grounded in current industry standards and innovative practices, we use design and UX to craft the right solution for your product.",
    ctaLabel: "Explore our work",
    ctaHref: "/work",
    ctaId: "home-explore-work-cta",
  },
  {
    title: "Digital solutions made simple",
    body: "We build products using a variety of best-in-class technologies, so your team can have a secure, accessible, and beautiful digital presence — without becoming technical administrators.",
    ctaLabel: "Learn about our services",
    ctaHref: "/services",
    ctaId: "home-learn-services-cta",
  },
  {
    title: "Your success is our success",
    body: "With years of experience and an insider’s understanding of Stanford’s communications and IT landscape, we’re uniquely qualified to meet your team’s needs — and we’re personally invested in your success.",
    ctaLabel: "Why Stanford Web Services",
    ctaHref: "/why",
    ctaId: "home-why-web-services-cta",
  },
];

export function CollaborationSection() {
  return (
    <Container bgColor="sand" pt={8} pb={9}>
      <div className="max-w-1200 mx-auto">
        <h2 className="fluid-type-1 font-semibold rs-mb-1">Collaboration that brings ideas to life</h2>
        <p className="max-w-800 font-serif fluid-type-2 leading-snug">
          We work closely with the Stanford community to translate communication goals into engaging and easy-to-manage digital solutions.
        </p>
        <div className="rs-mt-6 grid rs-gap-x-3 rs-gap-y-4 grid-cols-1 lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <div key={`${card.title}-${index}`}>
              <h3 className="fluid-type-1 font-serif leading-display">
                {card.title}
              </h3>
              <p className="text-09em leading-display max-w-prose">{card.body}</p>
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
