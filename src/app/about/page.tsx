import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Handshake, Trophy } from "lucide-react";
import { BRAND, VENTURES } from "@/lib/constants";
import { asset } from "@/lib/asset";
import EaMark from "@/components/ui/EaMark";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import JoinCta from "@/components/ui/JoinCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "MSUEA is Michigan State University's student led entrepreneurship community, founded in 2006 and open to every major. Our story, what makes the club different, and the ventures Spartans have built.",
  alternates: { canonical: "/about/" },
};

/** The three things that set the club apart, stated in the club's own terms. */
const DIFFERENTIATORS = [
  {
    icon: Handshake,
    title: "A direct line to the ecosystem",
    body: "Through the Burgess Institute for Entrepreneurship & Innovation, members connect directly with founders, mentors, investors, and startup resources.",
  },
  {
    icon: GraduationCap,
    title: "Open to every major",
    body: "Every major and every experience level belongs here, from the curious first timer to students already running a business.",
  },
  {
    icon: Trophy,
    title: "A top ranked home",
    body: "MSU's entrepreneurship ecosystem is consistently ranked among the nation's top undergraduate programs, and MSUEA is one of the Burgess Institute's flagship student organizations.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Our story"
        title="For students who build"
        intro={
          <>
            MSUEA is Michigan State&apos;s student led community for
            entrepreneurship. Since {BRAND.founded}, we have connected
            students of every major with workshops, speaker events,
            networking nights, pitch competitions, and trips.
          </>
        }
      />

      {/* ============ FOUNDING STORY, with the real room ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <figure>
              <div className="notch notch-lg">
                <img
                  src={asset("/images/event-broad-1200.jpg")}
                  srcSet={`${asset("/images/event-broad-800.jpg")} 800w, ${asset(
                    "/images/event-broad-1200.jpg",
                  )} 1200w, ${asset("/images/event-broad-2000.jpg")} 2000w`}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="MSUEA members at a session in the Broad College of Business"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                A session at the Broad College of Business.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Student led since {BRAND.founded}</p>
            <h2 className="display mt-4 text-5xl text-ink sm:text-6xl">
              Run by students,
              <br />
              for students
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
              Founded in {BRAND.founded}, MSUEA is a registered student
              organization at {BRAND.university}, built to inspire, educate,
              and create real experiences for the community around it.
              Entrepreneurship is broad by nature, and the club reflects
              that: every major and every experience level is welcome.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-body">
              A semester moves through speaker events, workshops, networking
              nights, pitch competitions, trips, and hangouts in between.
              Come once a month or every week; the door is open either way.
            </p>
            <Link href="/programs/" className="link-arrow mt-8">
              See the programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT MAKES MSUEA DIFFERENT ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Why this club</p>
            <h2 className="display mt-4 max-w-2xl text-5xl text-ink sm:text-6xl">
              What makes MSUEA different
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="notch flex h-full flex-col border-t-4 border-kelly bg-white p-7 sm:p-8">
                  <item.icon className="h-8 w-8 text-kelly" aria-hidden="true" />
                  <h3 className="display mt-5 text-2xl text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TROPHY WALL: SPARTANS HAVE BUILT ============ */}
      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
        <EaMark className="pointer-events-none absolute -right-24 top-1/2 h-[150%] w-auto -translate-y-1/2 text-white/[0.05]" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow text-moss">The proof</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">
              Spartans have built
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-fog">
              Notable ventures with Michigan State roots.
            </p>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">
            {VENTURES.map((venture, i) => (
              <Reveal
                key={venture}
                as="li"
                delay={i * 40}
                className="border-b border-r border-white/10"
              >
                <span className="display flex min-h-[5.5rem] items-center px-5 py-6 text-xl text-white sm:text-2xl">
                  {venture}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
