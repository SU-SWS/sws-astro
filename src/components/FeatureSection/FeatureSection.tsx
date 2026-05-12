import { CtaLink } from '@components/CtaLink';

type FeatureSectionProps = {
  ctaLabel?: string;
  ctaHref?: string;
  children: React.ReactNode;
};

export const FeatureSection = ({
  ctaLabel,
  ctaHref,
  children,
}: FeatureSectionProps) => {
  return (
    <section className="relative cc overflow-hidden rs-pt-6 rs-pb-7 text-white">
      {children}
      {ctaLabel && ctaHref && (
        <div className="relative z-1 rs-mt-6 text-center">
          <CtaLink href={ctaHref} variant="link-dark">
            {ctaLabel}
          </CtaLink>
        </div>
      )}
    </section>
  );
}
