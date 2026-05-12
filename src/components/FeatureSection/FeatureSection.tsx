import { cnb } from 'cnbuilder';
import { Container } from '@components/Container';
import { CtaLink } from '@components/CtaLink';

type FeatureSectionProps = {
  ctaLabel?: string;
  ctaHref?: string;
  children: React.ReactNode;
  className?: string;
};

export const FeatureSection = ({
  ctaLabel,
  ctaHref,
  children,
  className,
}: FeatureSectionProps) => {
  return (
    <Container as="section" pt={6} pb={7} className={cnb('relative overflow-hidden text-white', className)}>
      {children}
      {ctaLabel && ctaHref && (
        <div className="relative z-1 rs-mt-6 text-center">
          <CtaLink href={ctaHref} variant="link-dark">
            {ctaLabel}
          </CtaLink>
        </div>
      )}
    </Container>
  );
}
