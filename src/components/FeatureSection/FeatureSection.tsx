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
      {ctaLabel && (
        <div className="relative z-1 rs-mt-6 text-center">
          <a className="text-19 leading-snug text-white/95" href={ctaHref}>
            <span className="underline decoration-digital-red-xlight underline-offset-4 hocus-visible:decoration-digital-red hover:decoration-2">
              {ctaLabel}
            </span>
          </a>
        </div>
      )}
    </section>
  );
}
