import type { ReactNode } from "react";
import EaMark from "@/components/ui/EaMark";

/**
 * Standard interior page opener: forest band, eyebrow, Norwester
 * headline, optional intro paragraph. The oversized EA mark bleeds
 * off the right edge as a watermark on every page, so the site reads
 * as one system.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <EaMark className="pointer-events-none absolute -right-16 -top-10 h-[130%] w-auto text-white/[0.05]" />
      <div className="container-x relative py-20 sm:py-28">
        <p className="eyebrow text-moss">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
