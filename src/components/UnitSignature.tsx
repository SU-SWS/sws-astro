interface UnitSignatureProps {
  className?: string;
  theme?: "light" | "dark";
}

export function UnitSignature({ className = "", theme = "light" }: UnitSignatureProps) {
  const isDark = theme === "dark";

  return (
    <div className={`relative flex h-[48px] w-[303.5px] flex-[0_0_auto] items-start ${className}`}>
      <div className="mt-[11px] w-[155px] shrink-0">
        <img
          src={isDark ? "/images/stanford-red-wordmark.svg" : "/images/masthead-stanford-wordmark.svg"}
          alt=""
          width={155}
          height={32}
          className="block h-[32px] w-[155px] object-contain object-left"
        />
      </div>
      <span className={`ml-[11.81px] mr-[12px] mt-[2px] h-[42px] w-px shrink-0 ${isDark ? "bg-white/40" : "bg-sws-text/35"}`} aria-hidden />
      <span className="mt-[1px] flex flex-col">
        <span className={`font-sans text-[23px] leading-[1.32] ${isDark ? "text-white" : "text-sws-text"}`}>Web Services</span>
        {isDark ? <span className="font-sans text-[18px] italic leading-[1.32] text-white/80">University IT</span> : null}
      </span>
    </div>
  );
}
