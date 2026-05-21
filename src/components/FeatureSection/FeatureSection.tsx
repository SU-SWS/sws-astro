import { cnb } from 'cnbuilder';
import { Container } from '@components/Container/Container';
import { CtaLink } from '@components/CtaLink/CtaLink';

type FeatureSectionProps = {
  ctaLabel?: string;
  ctaHref?: string;
  ctaId?: string;
  children: React.ReactNode;
  className?: string;
};

export const FeatureSection = ({
  ctaLabel,
  ctaHref,
  ctaId,
  children,
  className,
}: FeatureSectionProps) => {
  return (
    <Container as="section" pt={6} pb={7} className={cnb('relative overflow-hidden text-dark-primary', className)}>
      {children}
      {ctaLabel && ctaHref && (
        <div className="relative z-1 rs-mt-6 text-center">
          <CtaLink href={ctaHref} id={ctaId} variant="link-dark">
            {ctaLabel}
          </CtaLink>
        </div>
      )}
    </Container>
  );
}
