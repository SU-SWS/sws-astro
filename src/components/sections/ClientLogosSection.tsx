import { CtaLink } from '@components/CtaLink';
import { Container } from '@components/Container';
import btsLogo from '@images/logos/BTS.png';
import centennialLogo from '@images/logos/Centennial logo wrapper.png';
import doeerLogo from '@images/logos/Doeer wrapper.png';
import gseLogo from '@images/logos/GSE Wrapper.png';
import khsLogo from '@images/logos/KHS wrapper.png';
import officeOfDevelopmentLogo from '@images/logos/Office of Development.png';
import sulLogo from '@images/logos/SUL.png';
import supLogo from '@images/logos/SUP logo.png';

const ROW_1 = [
  { src: officeOfDevelopmentLogo, alt: "Office of Development, Stanford University" },
  { src: centennialLogo, alt: "Stanford Engineering Centennial" },
  { src: sulLogo, alt: "Stanford University Libraries" },
  { src: btsLogo, alt: "Stanford Business Technology Services" },
];

const ROW_2 = [
  { src: gseLogo, alt: "Stanford Graduate School of Education" },
  { src: khsLogo, alt: "Knight-Hennessy Scholars at Stanford" },
  { src: doeerLogo, alt: "Stanford Doerr School of Sustainability" },
  { src: supLogo, alt: "Stanford University Press" },
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

      <div className="mt-114 flex flex-col gap-114 max-[1000px]:gap-12">
        <div className="grid grid-cols-2 items-center justify-items-start gap-12 max-[1000px]:grid-cols-2 min-[1001px]:grid-cols-4 min-[1001px]:gap-3">
          {ROW_1.map((logo) => (
            <img
              key={logo.alt}
              className={`max-h-72 w-auto object-contain max-[1000px]:max-h-[calc(72px*0.85)] ${
                logo.alt === "Stanford Engineering Centennial" ? "max-[999:scale-[0.85] max-[999:origin-left" : ""
              }`}
              src={logo.src.src}
              alt={logo.alt}
              width={logo.src.width}
              height={logo.src.height}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 items-center justify-items-start gap-12 max-[1000px]:grid-cols-2 min-[1001px]:grid-cols-4 min-[1001px]:gap-3">
          {ROW_2.map((logo) => (
            <img
              key={logo.alt}
              className="max-h-72 w-auto object-contain max-[1000px]:max-h-[calc(72px*0.85)]"
              src={logo.src.src}
              alt={logo.alt}
              width={logo.src.width}
              height={logo.src.height}
            />
          ))}
        </div>
      </div>
      {ctaLabel && ctaHref && (
        <CtaLink
          href={ctaHref}
          id={ctaId}
          variant="link-dark"
          className="block! w-fit mx-auto rs-mt-6"
        >
          {ctaLabel}
        </CtaLink>
      )}
    </Container>
  );
}
