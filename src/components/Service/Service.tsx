import { AnimateInView } from '@components/Animate/AnimateInView';

interface ServiceProps {
  title: string;
  body: string;
  items: string[];
}

export const Service = ({ title, body, items }: ServiceProps) => {
  return (
    <AnimateInView animation="slideUp">
      <h3 className="rs-mb-2 max-w-550 font-serif fluid-type-2 leading-display text-dark-primary">{title}</h3>
      <div className="grid rs-gap-x-4 sm:grid-cols-5 items-start">
        <p className="card-paragraph leading-normal mb-0 text-dark-primary sm:col-span-3">{body}</p>
        <ul className="grid gap-y-12 list-unstyled text-dark-secondary-muted sm:col-span-2">
          {items.map((item) => (
            <li key={item} className="mb-0 card-paragraph leading-display">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </AnimateInView>
  );
}
