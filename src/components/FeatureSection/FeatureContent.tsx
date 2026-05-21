import { CtaLink } from '@components/CtaLink/CtaLink';
import { cnb } from 'cnbuilder';

export type FeatureContentProps = React.HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaId?: string;
  awards?: React.ReactNode;
  sectionCtaLabel?: string;
  sectionCtaHref?: string;
  background?: React.ReactNode;
  textOnRight?: boolean;
};

export const FeatureContent = ({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaId,
  awards,
  background,
  textOnRight,
  children,
  className,
  ...props
}: FeatureContentProps) => {
  return (
    <div  {...props} className={cnb('relative z-1 mx-auto', className)}>
      <div className={cnb('flex flex-col items-start justify-center rs-gap-3', textOnRight ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
        <div className="basis-2/5 flex flex-col justify-start gap-8">
          <p className="card-paragraph leading-tight text-dark-primary">{eyebrow}</p>
          <div>
            <h2 className="rs-mt-7 mb-10 fluid-type-3 font-serif font-normal leading-tight">
              {title}
            </h2>
            <p className="card-paragraph">
              {description}
            </p>
            {ctaLabel && ctaHref && (
              <CtaLink href={ctaHref} id={ctaId} className="rs-mt-1">
                {ctaLabel}
              </CtaLink>
            )}
            {awards}
          </div>
        </div>
        {/* The screenshot/video side */}
        <div className="basis-3/5 relative overflow-hidden rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};
