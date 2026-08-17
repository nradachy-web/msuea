import SpartanHelmet from "@/components/ui/SpartanHelmet";
import { cn } from "@/lib/utils";

function Row({ items, hidden }: { items: readonly string[]; hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? true : undefined}
    >
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="display whitespace-nowrap px-5 pt-0.5 text-[0.9rem] tracking-[0.16em] text-mint sm:px-7">
            {item}
          </span>
          <SpartanHelmet className="h-4 w-auto shrink-0 text-putty/70" />
        </span>
      ))}
    </div>
  );
}

/**
 * Stadium ribbon board: an infinite Norwester ticker with Spartan
 * helmet separators. Pure CSS animation, pauses under reduced motion.
 */
export default function Ticker({
  items,
  className,
  duration = "36s",
}: {
  items: readonly string[];
  className?: string;
  duration?: string;
}) {
  return (
    <div
      className={cn(
        "marquee-paused overflow-hidden border-y border-white/10 bg-pine py-3",
        className,
      )}
      style={{ "--marquee-dur": duration } as React.CSSProperties}
    >
      <div className="marquee-track">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}
