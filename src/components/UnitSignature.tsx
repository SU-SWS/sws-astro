interface UnitSignatureProps {
  className?: string;
}

export function UnitSignature({ className = "" }: UnitSignatureProps) {
  return (
    <div className={`relative flex min-h-[42px] flex-[0_1_auto] gap-0 ${className}`}>
      <div className="mt-px w-[155px] shrink-0">
        <img src="/images/masthead-stanford-wordmark.svg" alt="" width={155} height={32} className="h-auto w-full" />
      </div>
      <span className="mb-1 ml-3 mr-2.5 mt-1 h-[34px] w-px shrink-0 bg-sws-text/35" aria-hidden />
      <span className="mt-1.5 pb-0.5 font-sans text-[1.8rem] leading-snug text-sws-text">Web Services</span>
    </div>
  );
}