import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Map,
  Mic,
  Sparkles,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { BRAND, PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import JoinCta from "@/components/ui/JoinCta";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Five MSUEA programs at Michigan State: speaker series, pitch competitions, networking nights, workshops, and regional and national trips. Open to every major.",
  alternates: { canonical: "/programs/" },
};

/** Interface icon for each program, keyed by the slug in constants. */
const PROGRAM_ICONS: Record<string, LucideIcon> = {
  "speaker-series": Mic,
  "pitch-competitions": Trophy,
  "networking-nights": Users,
  workshops: Sparkles,
  trips: Map,
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Five ways in"
        intro={
          <>
            MSUEA programming rotates through the semester, from speaker
            nights to trips. Every event lands on the calendar and on
            Instagram first, so you always know what&apos;s next.
          </>
        }
      />

      {/* ============ THE FIVE PROGRAMS ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The lineup</p>
            <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
              What we run
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
              Come once a month or every week. Every program is open to
              every major and every experience level, from the curious
              first-timer to students already running a business.
            </p>
          </Reveal>

          <div className="mt-8 divide-y divide-line sm:mt-12">
            {PROGRAMS.map((program, i) => {
              const Icon = PROGRAM_ICONS[program.slug] ?? Sparkles;
              const flipped = i % 2 === 1;
              return (
                <Reveal
                  key={program.slug}
                  delay={70}
                  className={cn(
                    "flex flex-col gap-7 py-12 sm:py-14 md:items-center md:gap-12",
                    flipped ? "md:flex-row-reverse" : "md:flex-row",
                  )}
                >
                  <div
                    className={cn(
                      "notch-lg flex h-28 w-28 shrink-0 items-center justify-center bg-forest text-white sm:h-36 sm:w-36",
                      flipped ? "notch-tl" : "notch",
                    )}
                  >
                    <Icon
                      className="h-11 w-11 sm:h-14 sm:w-14"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="display text-3xl text-forest sm:text-4xl">
                      {program.name}
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">
                      {program.blurb}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DATES LAND ON INSTAGRAM FIRST ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="eyebrow">Dates and signups</p>
            <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
              Instagram gets it first
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
              The calendar comes together each semester, and every date and
              signup form is announced on Instagram and the email list
              first. Follow along so you never miss a night.
            </p>
          </Reveal>
          <Reveal
            delay={100}
            className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row lg:justify-end"
          >
            <Link href="/events/" className="btn btn-forest">
              <Calendar className="h-4 w-4" />
              See the calendar
            </Link>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <InstagramIcon className="h-4 w-4" />
              Follow {BRAND.instagramHandle}
            </a>
          </Reveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
