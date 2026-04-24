import { UnitSignature } from "./UnitSignature";

const NAV = [
  { href: "#", label: "Our work" },
  { href: "#", label: "Services" },
  { href: "#", label: "Why Web Services" },
  { href: "#", label: "Contact us" },
];

export function FooterLocal() {
  return (
    <footer className="bg-sws-tan px-[clamp(1.25rem,5vw,100px)] py-[95px]">
      <div className="mx-auto max-w-[1300px] px-0">
        <div className="flex flex-wrap items-start gap-10">
          <div className="min-h-px min-w-[120px] flex-1 basis-[120px]" aria-hidden />
          <div className="max-w-[560px] flex-1 basis-[280px]">
            <p className="m-0 font-serif text-[33px] font-normal leading-snug">
              Curabitur condimentum ipsum nec purus interdum commodo.
            </p>
            <button
              type="button"
              className="mt-[38px] inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-sws-red-bright bg-transparent px-[19px] py-2 font-sans text-[19px] font-[350] leading-snug text-sws-text hover:bg-[rgba(248,53,53,0.08)]"
            >
              Connect with us
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-8 pt-[95px]">
          <UnitSignature />
          <nav className="flex flex-wrap items-center justify-end gap-[33px] pt-2" aria-label="Footer">
            {NAV.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="whitespace-nowrap text-[19px] font-semibold text-sws-digital-red hover:underline"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}