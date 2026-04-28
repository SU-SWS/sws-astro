import footerStanfordStackWhite from '../images/footer-stanford-stack-white.png';

const ROW_PRIMARY = ["Stanford Home", "Maps & Directions", "Search Stanford", "Emergency Info"];

const ROW_SECONDARY = ["Terms of Use", "Privacy", "Copyright", "Trademarks", "Non-Discrimination", "Accessibility"];

export function FooterGlobal() {
  return (
    <footer className="flex flex-wrap gap-[42px] bg-sws-cardinal px-[90px] pb-0 pt-[18px] text-white max-[640px]:px-6">
      <div className="pb-[43px] pt-0">
        <img src={footerStanfordStackWhite.src} alt="Stanford University" width={footerStanfordStackWhite.width} height={footerStanfordStackWhite.height} className="h-auto w-[139px]" />
      </div>
      <div className="flex flex-[1_1_280px] flex-col gap-2.5 py-[30px]">
        <div className="flex flex-wrap gap-8 text-[17px] font-semibold">
          {ROW_PRIMARY.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-[29px] text-[15px] font-[350]">
          {ROW_SECONDARY.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <p className="m-0 text-[15px] leading-normal">©Copyright Stanford University. Stanford, California 94305.</p>
      </div>
    </footer>
  );
}
