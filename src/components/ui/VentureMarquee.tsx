import { VENTURES } from "@/lib/constants";
import EaMark from "@/components/ui/EaMark";
import { cn } from "@/lib/utils";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? true : undefined}
    >
      {VENTURES.map((name) => (
        <span key={name} className="flex items-center">
          <span className="display whitespace-nowrap px-6 text-3xl text-forest sm:px-8 sm:text-4xl">
            {name}
          </span>
          <EaMark className="h-4 w-auto shrink-0 text-putty" />
        </span>
      ))}
    </div>
  );
}

/**
 * The club asked for a rotating banner of notable MSU ventures
 * (their reference was a scrolling logo strip). We do not have
 * permission to reproduce those companies' logos, so the strip is
 * typographic: venture names in Norwester, separated by the EA mark.
 * Pure CSS animation; pauses on hover and under reduced motion.
 */
export default function VentureMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn("marquee-paused overflow-hidden", className)}
      style={{ "--marquee-dur": "70s" } as React.CSSProperties}
    >
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
