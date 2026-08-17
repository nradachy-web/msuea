import type { ReactNode } from "react";
import EaMark from "@/components/ui/EaMark";
import SpartanHelmet from "@/components/ui/SpartanHelmet";
import Parallax from "@/components/ui/Parallax";
import { asset } from "@/lib/asset";

/**
 * Standard interior page opener: forest band, eyebrow, Norwester
 * headline, optional intro paragraph.
 *
 * Pages with a signature artwork pass `art` (a screen-print poster
 * image in the brand style); it rides the right edge with a slow
 * parallax drift, fading toward the text. Pages without art keep the
 * oversized EA monogram watermark, so the site reads as one system
 * either way.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  art,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** e.g. "/images/art/join-1400.jpg" */
  art?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      {art ? (
        <div
          className="art-fade-left pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block"
          aria-hidden="true"
        >
          <Parallax speed={-0.05} className="h-full">
            <img
              src={asset(art)}
              alt=""
              loading="lazy"
              className="h-[115%] w-full object-cover object-right"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/55 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-forest to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-forest/70 to-transparent" />
        </div>
      ) : (
        <Parallax
          speed={-0.04}
          className="pointer-events-none absolute -right-16 -top-10 h-[130%]"
        >
          <EaMark className="h-full w-auto text-white/[0.05]" />
        </Parallax>
      )}
      <div className="container-x relative py-20 sm:py-28">
        <p className="eyebrow text-mint">
          <SpartanHelmet className="h-4 w-auto" />
          {eyebrow}
        </p>
        <h1 className="display mt-5 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
      {art ? (
        <div className="md:hidden" aria-hidden="true">
          <img
            src={asset(art.replace("-1400", "-900"))}
            alt=""
            className="h-44 w-full object-cover"
          />
        </div>
      ) : null}
    </section>
  );
}
