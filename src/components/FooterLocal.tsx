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
            Ready to bring your vision to life?
          </h2>
          <p className="card-paragraph rs-mb-0">
            Whether defining your audience, crafting a new digital experience, or scaling your impact, partner with a team dedicated to collaboration and creativity at every step.
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
