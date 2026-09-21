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
      <div className="grid lg:grid-cols-2 lg:gap-40 rs-pb-4">
        <div className="max-w-600 flex-1 basis-md lg:col-start-2">
          <h2 className="mb-10 font-serif type-2 font-normal leading-display">
            We’d love to hear from you.
          </h2>
          <p className="card-paragraph rs-mb-0">
            Whether you’re just getting started, planning a site refresh, or expanding your digital presence, our team is here to guide you through the process, every step of the way.
          </p>
          <CtaLink variant="button-light" id="local-footer-connect-cta" href="/contact/">
            Connect with us
          </CtaLink>
        </div>
      </div>
      <SiteNavigation location="footer" activeLabel={activeLabel} />
    </section>
  );
}
