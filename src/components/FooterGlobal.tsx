import footerStanfordStackWhite from '../images/footer-stanford-stack-white.png';

const ROW_PRIMARY = ["Stanford Home", "Maps & Directions", "Search Stanford", "Emergency Info"];

const ROW_SECONDARY = ["Terms of Use", "Privacy", "Copyright", "Trademarks", "Non-Discrimination", "Accessibility"];

export function FooterGlobal() {
  return (
    <footer className="flex flex-wrap gap-42 bg-sws-cardinal px-90 pb-0 pt-18 text-white max-[640px]:px-6">
      <div className="pb-43 pt-0">
        <img src={footerStanfordStackWhite.src} alt="Stanford University" width={footerStanfordStackWhite.width} height={footerStanfordStackWhite.height} className="h-auto w-139" />
      </div>
      <div className="flex flex-[1_1_280px] flex-col gap-2.5 py-30">
        <div className="flex flex-wrap gap-8 text-17 font-semibold">
          {ROW_PRIMARY.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-29 text-15">
          {ROW_SECONDARY.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <p className="m-0 text-15 leading-normal">©Copyright Stanford University. Stanford, California 94305.</p>
      </div>
    </footer>
  );
}
