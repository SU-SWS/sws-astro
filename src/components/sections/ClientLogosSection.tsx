import { CtaLink } from '@components/CtaLink/CtaLink';
import { Container } from '@components/Container/Container';
import btsLogo from '@images/logos/BTS.png';
import centennialLogo from '@images/logos/Centennial logo wrapper.png';
import doeerLogo from '@images/logos/Doeer wrapper.png';
import gseLogo from '@images/logos/GSE Wrapper.png';
import khsLogo from '@images/logos/KHS wrapper.png';
import officeOfDevelopmentLogo from '@images/logos/Office of Development.png';
import sulLogo from '@images/logos/SUL.png';
import supLogo from '@images/logos/SUP logo.png';

const LOGOS = [
  {
    src: officeOfDevelopmentLogo,
    alt: "Stanford Office of Development",
    href: 'https://externalrelations.stanford.edu/organizations/office-development',
  },
  {
    src: centennialLogo,
    alt: 'Stanford Engineering Centennial',
  },
  { src:  sulLogo,
    alt: "Stanford University Libraries"
  },
  {
    src: btsLogo,
    alt: "Stanford Business Technology Services"
  },
  {
    src: gseLogo,
    alt: "Stanford Graduate School of Education"
  },
  {
    src: khsLogo,
    alt: "Knight-Hennessy Scholars at Stanford University"
  },
  {
    src: doeerLogo,
    alt: "Stanford Doerr School of Sustainability"
  },
  {
    src: supLogo,
    alt: "Stanford University Press"
  },
];

type ClientLogosSectionProps = {
  ctaLabel?: string;
  ctaHref?: string;
  ctaId?: string;
}

export const ClientLogosSection = ({
  ctaLabel,
  ctaHref,
  ctaId,
}: ClientLogosSectionProps) => {
  return (
    <Container as="section" pt={7} pb={7} bgColor="black">
      <h2 className="text-dark-secondary-muted card-paragraph leading-tight">Our clients</h2>
      <p className="rs-mt-2 rs-mb-8 max-w-1100 font-serif fluid-type-4 leading-display">
        SWS maintains long-term partnerships across Stanford, providing strategic and technical support for schools, institutes, and organizations.
      </p>
      <ul className="list-unstyled grid grid-cols-2 xl:grid-cols-4 items-center justify-items-start rs-gap-x-1 rs-gap-y-7">
        {LOGOS.map((logo) => (
          <img
            key={logo.alt}
            className=""
            src={logo.src.src}
            alt={logo.alt}
            width={logo.src.width}
            height={logo.src.height}
          />
        ))}
      </ul>
      {ctaLabel && ctaHref && (
        <CtaLink href={ctaHref} id={ctaId} variant="link-dark" className="block! w-fit mx-auto rs-mt-6">{ctaLabel}</CtaLink>
      )}
    </Container>
  );
}
