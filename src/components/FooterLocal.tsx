import { CtaLink } from '@components/CtaLink/CtaLink';
import { SiteNavigation } from '@components/SiteNavigation';

interface FooterLocalProps {
  activeLabel?: string;
}

export function FooterLocal({
  activeLabel,
}: FooterLocalProps) {
  return (
    <section className="cc bg-fill-secondary rs-py-6">
      <div className="grid md:grid-cols-2 md:gap-40 rs-pb-4">
        <div className="max-w-4xl flex-1 basis-md md:col-start-2">
          <h2 className="rs-mb-2 font-serif type-2 font-normal leading-display">
            We’d love to hear about what you’re working on.
          </h2>
          <CtaLink variant="button-light" id="local-footer-connect-cta" href="/contact/">
            Connect with us
          </CtaLink>
        </div>
      </div>
      <SiteNavigation location="footer" activeLabel={activeLabel} />
    </section>
  );
}
