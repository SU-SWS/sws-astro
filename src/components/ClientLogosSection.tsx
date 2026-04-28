import btsLogo from '../images/logos/BTS.png';
import centennialLogo from '../images/logos/Centennial logo wrapper.png';
import doeerLogo from '../images/logos/Doeer wrapper.png';
import gseLogo from '../images/logos/GSE Wrapper.png';
import khsLogo from '../images/logos/KHS wrapper.png';
import officeOfDevelopmentLogo from '../images/logos/Office of Development.png';
import sulLogo from '../images/logos/SUL.png';
import supLogo from '../images/logos/SUP logo.png';

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

export function ClientLogosSection() {
  return (
    <section className="bg-campaign-black px-[clamp(1.25rem,5vw,100px)] py-114 text-white" aria-labelledby="logos-heading">
      <div className="mx-auto max-w-1300 p-0">
        <p className="m-0 mb-38 text-19 leading-snug">Lasting Partnerships</p>
        <h2 id="logos-heading" className="m-0 max-w-1000 font-serif text-[clamp(2rem,3vw,51px)] font-normal leading-snug">
          Our clients  |  SWS maintains long-term partnerships across Stanford, providing strategic and technical support for schools, institutes, and organizations.
        </h2>

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
          <div className="grid grid-cols-2 items-center justify-items-start gap-12 max-[1000px]:grid-cols-2 min-[1001:grid-cols-4 min-[1001:gap-3">
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

        <div className="mt-95">
          <a className="inline-flex items-center gap-2 text-19 text-white" href="#">
            <span className="underline decoration-sws-red-bright [text-underline-offset:4 hocus-visible:decoration-digital-red hocus-visible:decoration-2">
              Learn more about our services
            </span>
            <i
              className="fa-solid fa-arrow-right inline-flex items-center justify-center text-sm leading-none [-webkit-text-stroke:0.4px_currentColor] [transform:rotate(-45deg)]"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
