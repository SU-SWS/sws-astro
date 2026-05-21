import { Service } from '@components/Service/Service';
import { Container } from '@components/Container/Container';
import { CtaLink } from '@components/CtaLink/CtaLink';

const PRINCIPLES = [
  {
    title: 'Learn',
    body: 'We start by listening — then help you shape a strategy that fits your goals and your constraints.',
  },
  {
    title: 'Make',
    body: 'Our process is iterative by nature — we bring ideas to life early, then refine through collaboration until the work lands where it should.',
  },
  {
    title: 'Evolve',
    body: 'We think of everything we build as a living thing. After launch, we stay ready to maintain, refine, and grow it alongside you.',
  },
];

const SERVICES = [
  {
    title: 'Strategy',
    body:
      'We bring research, experience, and a deep understanding of Stanford’s best practices to every project. Whether that means defining a strategy, innovating on something new, or building on what already exists, we know how to navigate institutional requirements and find the right path forward.',
    items: ['Project discovery', 'Digital strategy', 'UX research', 'Information architecture'],
  },
  {
    title: 'Design',
    body:
      'We design interfaces that are as distinctive as the products they serve. Whether that means classical Stanford branding or something entirely your own. We build flexible, scalable design systems, ensuring every interaction is intuitive, consistent, and beautiful across everything from a single page annual report website to complex, API-driven applications.',
    items: ['Visual & interaction design', 'User experience', 'Prototyping', 'Design systems & guidelines'],
  },
  {
    title: 'Engineering',
    body:
      'We build for the product you need today and the product your need tomorrow.  We want your investment in technology to be maintainable and to grow with you. We listen closely to understand your ongoing needs, and pick technical approaches that fit into your existing workflows.',
    items: ['Website production', 'Custom development', 'Site building', 'Animation & motion design'],
  },
  {
    title: 'Continuous support, security, and performance',
    body:
      'Our ongoing services cover everything you need to stay secure, current, and effective — from security updates and infrastructure maintenance to feature development, content entry, and digital strategy. We build and maintain applications with security, stability, performance, and accessibility at the forefront, ensuring your platform meets the expectations of your local community while communicating your research to audiences around the world.',
    items: ['Security & maintenance', 'Hosting support', 'Analytics & UX monitoring', 'Accessibility support'],
  },
];

export const ServicesSection = () => (
  <Container bgColor="black" as="section" pb={6}>
    <div className="grid lg:grid-cols-3 lg:gap-60 2xl:gap-100">
      <ul className="list-unstyled grid rs-gap-4 lg:sticky lg:top-0 lg:self-start rs-pt-3">
        {PRINCIPLES.map((principle) => (
          <li className="mb-0" key={principle.title}>
            <div className="" aria-hidden />
            <h2 className="font-serif fluid-type-3 rs-mb-1 leading-display tracking-[0.01em] text-dark-primary">
              {principle.title}
            </h2>
            <p className="max-w-prose card-paragraph text-dark-secondary-muted mb-0">{principle.body}</p>
          </li>
        ))}
      </ul>

      <div className="rs-mt-8 lg:col-span-2">
        <div className="flex flex-col rs-gap-8">
          {SERVICES.map((service) => <Service {...service} key={service.title} />)}
        </div>
      </div>
    </div>
    <CtaLink href="/why" variant="link-dark" className="block! w-fit mx-auto rs-mt-6">Why partner with us</CtaLink>
  </Container>
);
