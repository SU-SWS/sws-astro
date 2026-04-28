interface UnitSignatureProps {
  className?: string;
  theme?: "light" | "dark";
}

export function UnitSignature({ className = "", theme = "light" }: UnitSignatureProps) {
  const isDark = theme === "dark";

  return (
    <div className={`relative flex h-48 w-304 flex-[0_0_auto] items-start ${className}`}>
      <div className="mt-11 w-155 shrink-0">
        <img
          src={isDark ? "/images/stanford-red-wordmark.svg" : "/images/masthead-stanford-wordmark.svg"}
          alt=""
          width={155}
          height={32}
          className="block h-32 w-155 object-contain object-left"
        />
      </div>
      <span className={`ml-12 mr-12 mt-2 h-42 w-px shrink-0 ${isDark ? "bg-white/40" : "bg-sws-text/35"}`} aria-hidden />
      <span className="mt-1 flex flex-col">
        <span className={`font-sans text-23 leading-snug ${isDark ? "text-white" : "text-sws-text"}`}>Web Services</span>
        {isDark ? <span className="font-sans text-18 italic leading-snug text-white/80">University IT</span> : null}
      </span>
    </div>
  );
}
