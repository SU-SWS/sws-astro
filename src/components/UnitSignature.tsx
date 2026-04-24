interface UnitSignatureProps {
  className?: string;
  theme?: "light" | "dark";
}

export function UnitSignature({ className = "", theme = "light" }: UnitSignatureProps) {
  const isDark = theme === "dark";

  return (
    <div className={`relative flex min-h-42 flex-[0_1_auto] gap-0 ${className}`}>
      <div className="mt-px w-155 shrink-0">
        <img
          src={isDark ? "/images/stanford-red-wordmark.svg" : "/images/masthead-stanford-wordmark.svg"}
          alt=""
          width={155}
          height={32}
          className="h-auto w-full"
        />
      </div>
      <span className={`mb-1 ml-3 mr-2.5 mt-1 h-34 w-px shrink-0 ${isDark ? "bg-white/40" : "bg-sws-text/35"}`} aria-hidden />
      <span className={`mt-1.5 pb-0.5 font-sans text-18 leading-snug ${isDark ? "text-white" : "text-sws-text"}`}>Web Services</span>
    </div>
  );
}
