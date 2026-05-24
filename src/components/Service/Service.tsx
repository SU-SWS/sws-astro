import { AnimateInView } from '@components/Animate/AnimateInView';
import { CtaLink } from '@components/CtaLink/CtaLink';

type ServiceItemType = {
  ctaLabel: string;
  href: string;
};

interface ServiceProps {
  title: string;
  body: string;
  items: ServiceItemType[];
}

export const Service = ({ title, body, items }: ServiceProps) => {
  return (
    <AnimateInView animation="slideUp">
      <h3 className="rs-mb-2 max-w-550 font-serif fluid-type-2 leading-display text-dark-primary">{title}</h3>
      <div className="grid rs-gap-x-4 sm:grid-cols-5 items-start">
        <p className="card-paragraph leading-normal mb-0 text-dark-primary sm:col-span-3">{body}</p>
        <ul className="grid gap-y-12 list-unstyled text-dark-secondary-muted sm:col-span-2">
          {items.map((item, index) => (
            <AnimateInView
              as="li"
              animation="slideInFromRight"
              delay={index * 0.1}
              key={item.href}
              className="mb-0 leading-display"
            >
              <CtaLink href={item.href} variant="service">
                {item.ctaLabel}
              </CtaLink>
            </AnimateInView>
          ))}
        </ul>
      </div>
    </AnimateInView>
  );
}
