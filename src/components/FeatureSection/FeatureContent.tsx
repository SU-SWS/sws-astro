import { type ImageMetadata } from 'astro';
import { CtaLink } from '@components/CtaLink/CtaLink';
import { cnb } from 'cnbuilder';

type AwardType = {
  image: ImageMetadata;
  alt?: string;
};

export type FeatureContentProps = React.HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string | string[];
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaId?: string;
  awards?: AwardType | AwardType[];
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
  const eyebrowContent = Array.isArray(eyebrow) ? (
    <span className="flex flex-wrap divide-x divide-black-60 text-09em text-dark-primary">
      {eyebrow.map((item) => (
        <span key={item} className="leading-none px-10 first:pl-0 last:pr-0">
          {item}
        </span>
      ))}
    </span>
  ) : (
    <span className="card-paragraph leading-tight text-dark-primary">{eyebrow}</span>
  );

  return (
    <div {...props} className={cnb('relative z-1 mx-auto', className)}>
      <div className={cnb('flex flex-col items-start justify-center rs-gap-3', textOnRight ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
        <div className="w-full basis-2/5 flex flex-col justify-start gap-8">
          {eyebrowContent}
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
            {awards && (
              <div className="flex justify-end rs-gap-x-1 rs-mt-4 rs-px-4">
                {(Array.isArray(awards) ? awards : [awards]).map((award) => (
                  <img
                    key={award.image.src}
                    src={award.image.src}
                    width={award.image.width}
                    height={award.image.height}
                    alt={award.alt ?? ''}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {/* The screenshot/video side */}
        <div className="w-full basis-3/5 relative overflow-hidden rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};
