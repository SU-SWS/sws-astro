import { CtaLink } from '@components/CtaLink/CtaLink';
import { SiteNavigation } from '@components/SiteNavigation';

/** Optional page-specific copy for the local footer's call to action. */
export interface FooterCta {
  heading: string;
  body?: string;
  email?: string;
  ctaLabel: string;
  ctaHref: string;
}

interface FooterLocalProps {
  activeLabel?: string;
  cta?: FooterCta;
}

const defaultCta: FooterCta = {
  heading: 'Ready to bring your vision to life?',
  body: 'Whether defining your audience, crafting a new digital experience, or scaling your impact, partner with a team dedicated to collaboration and creativity at every step.',
  ctaLabel: 'Connect with us',
  ctaHref: '/contact/',
};

export function FooterLocal({
  activeLabel,
  cta = defaultCta,
}: FooterLocalProps) {
  return (
    <section className="cc bg-fill-secondary rs-py-6">
      <div className="grid lg:grid-cols-2 lg:gap-40 rs-pb-4">
        <div className="max-w-600 flex-1 basis-md lg:col-start-2">
          <h2 className="mb-10 font-serif type-2 font-normal leading-display">
            {cta.heading}
          </h2>
          {cta.body && (
            <p className="card-paragraph rs-mb-0">{cta.body}</p>
          )}
          {cta.email && (
            <p className="card-paragraph rs-mb-0">
              Email{' '}
              <a href={`mailto:${cta.email}`} className="text-digital-red underline underline-offset-2 hocus-visible:no-underline">
                {cta.email}
              </a>
            </p>
          )}
          <CtaLink variant="button-light" id="local-footer-connect-cta" href={cta.ctaHref}>
            {cta.ctaLabel}
          </CtaLink>
        </div>
      </div>
      <SiteNavigation location="footer" activeLabel={activeLabel} />
    </section>
  );
}
