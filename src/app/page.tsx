import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import {
  BRAND,
  PROGRAMS,
  UPCOMING_EVENTS,
  SPONSORS,
  MEMBERSHIP_QUOTE,
} from "@/lib/constants";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import EaMark from "@/components/ui/EaMark";
import Reveal from "@/components/ui/Reveal";
import VentureMarquee from "@/components/ui/VentureMarquee";
import EmailSignup from "@/components/ui/EmailSignup";
import JoinCta from "@/components/ui/JoinCta";

export default function HomePage() {
  const nextEvent = UPCOMING_EVENTS[0];

  return (
    <>
      {/* ============ HERO: the varsity poster ============ */}
      <section className="relative overflow-hidden bg-forest text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            maskImage: "linear-gradient(to left, black 55%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 55%, transparent 85%)",
          }}
        >
          <EaMark className="absolute -right-24 top-1/2 h-[150%] w-auto -translate-y-1/2 text-white/[0.05] sm:-right-16" />
        </div>
        <div className="container-x relative py-24 sm:py-32 lg:py-40">
          <Reveal>
            <p className="eyebrow text-mint">
              {BRAND.university} · Est. {BRAND.founded}
            </p>
            <h1 className="display mt-6 text-[clamp(3.4rem,10vw,8rem)]">
              Where Spartans
              <br />
              <span className="text-mint">Build</span>
              {" what's"}
              <br />
              next.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">
              MSUEA is Michigan State&apos;s student community for
              entrepreneurship. Speaker nights, pitch competitions,
              workshops, and trips that turn ideas into ventures. No startup
              experience required.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/join/" className="btn btn-solid text-base">
                Join MSUEA
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/sponsors/" className="btn btn-outline-light text-base">
                Partner with us
              </Link>
            </div>
          </Reveal>
        </div>
        {/* fact strip */}
        <div className="relative border-t border-white/10">
          <div className="container-x flex flex-wrap items-center gap-x-10 gap-y-2 py-5 text-[0.85rem] tracking-[0.12em]">
            {["EST. 2006", "OPEN TO EVERY MAJOR", "SPEAKERS · PITCHES · TRIPS"].map(
              (fact) => (
                <span key={fact} className="display flex items-center gap-3 text-fog">
                  <EaMark className="h-3 w-auto text-mint" />
                  {fact}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ============ VENTURES MARQUEE ============ */}
      <section
        aria-label="Notable ventures with MSU roots"
        className="border-b border-putty bg-putty/40 py-10 sm:py-12"
      >
        <div className="container-x">
          <p className="eyebrow">Spartans have built</p>
        </div>
        <VentureMarquee className="mt-6" />
        <div className="container-x">
          <p className="mt-5 text-sm text-body">
            A few of the notable ventures with Michigan State roots.
          </p>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
                Five ways in
              </h2>
            </div>
            <Link href="/programs/" className="link-arrow">
              Explore programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {PROGRAMS.map((program, i) => (
              <Reveal
                key={program.slug}
                delay={i * 70}
                className={cn(
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3",
                  i === 4 && "sm:col-span-2 lg:col-span-3",
                )}
              >
                <Link
                  href="/programs/"
                  className="notch group flex h-full min-h-[210px] flex-col justify-between border-t-4 border-kelly bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    <h3 className="display text-2xl text-forest group-hover:text-kelly">
                      {program.name}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
                      {program.blurb}
                    </p>
                  </div>
                  <span className="link-arrow mt-6 text-[0.8rem]">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT TEASER, with the real room ============ */}
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
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                A session at the Broad College of Business.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Since {BRAND.founded}</p>
            <h2 className="display mt-4 text-5xl text-ink sm:text-6xl">
              A community
              <br />
              for builders
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
              Founded in {BRAND.founded}, MSUEA brings together students of
              every background who want to build things that matter. Through
              the Burgess Institute and one of the nation&apos;s
              top-ranked undergraduate entrepreneurship ecosystems, members
              connect directly with founders, mentors, and investors.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Student led, all majors welcome",
                "Direct line to founders, mentors, and investors",
                "Part of MSU's nationally recognized entrepreneurship ecosystem",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-body">
                  <EaMark className="mt-1.5 h-3 w-auto shrink-0 text-kelly" />
                  {line}
                </li>
              ))}
            </ul>
            <Link href="/about/" className="link-arrow mt-8">
              Our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ NEXT EVENT ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">On the calendar</p>
              <h2 className="display mt-4 text-5xl text-ink sm:text-6xl">
                Up next
              </h2>
            </div>
            <Link href="/events/" className="link-arrow">
              All events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              {nextEvent ? (
                <article className="notch flex h-full flex-col gap-6 bg-white p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-9">
                  <div className="display flex w-24 shrink-0 flex-col items-center bg-forest px-4 py-5 text-white">
                    <span className="text-sm tracking-[0.2em] text-mint">
                      {nextEvent.dateDisplay.month}
                    </span>
                    <span className="text-5xl">{nextEvent.dateDisplay.day}</span>
                  </div>
                  <div>
                    <h3 className="display text-3xl text-forest">
                      {nextEvent.title}
                    </h3>
                    <p className="mt-2 max-w-md leading-relaxed text-body">
                      {nextEvent.description}
                    </p>
                    <p className="display mt-4 text-[0.8rem] tracking-[0.12em] text-kelly">
                      {nextEvent.note}
                    </p>
                  </div>
                </article>
              ) : (
                <article className="notch flex h-full flex-col justify-center bg-white p-7 sm:p-9">
                  <h3 className="display text-3xl text-forest">
                    New dates landing soon
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-body">
                    The next calendar is being finalized. Follow along on
                    Instagram or join the email list below and every date
                    reaches you as it locks in.
                  </p>
                </article>
              )}
            </Reveal>
            <Reveal delay={100}>
              <div className="notch flex h-full flex-col justify-between bg-forest p-7 text-white sm:p-9">
                <div>
                  <h3 className="display text-2xl">
                    Events land on Instagram first
                  </h3>
                  <p className="mt-3 leading-relaxed text-fog">
                    Follow {BRAND.instagramHandle} for drops, recaps, and
                    signup links the moment they go live.
                  </p>
                </div>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light mt-8 self-start"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Follow {BRAND.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MEMBERSHIP, in the club's own words ============ */}
      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
        <EaMark className="pointer-events-none absolute -left-24 -bottom-16 h-[120%] w-auto text-white/[0.05]" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow text-mint">What membership looks like</p>
            <blockquote className="mt-7 max-w-4xl font-body text-2xl italic leading-snug text-white sm:text-3xl">
              &ldquo;{MEMBERSHIP_QUOTE}&rdquo;
            </blockquote>
            <div className="mt-9">
              <Link href="/join/" className="btn btn-solid">
                <WhatsAppIcon className="h-4 w-4" />
                Join the community
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SPONSORS ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Backed by</p>
              <h2 className="display mt-4 text-5xl text-ink sm:text-6xl">
                Sponsors &amp; partners
              </h2>
            </div>
            <Link href="/sponsors/" className="link-arrow">
              Become a sponsor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SPONSORS.map((sponsor, i) => (
              <Reveal key={sponsor.name} delay={i * 80}>
                <div className="notch h-full border-t-4 border-forest bg-white p-8">
                  <p className="display text-[0.75rem] tracking-[0.16em] text-kelly">
                    {sponsor.kind}
                  </p>
                  <h3 className="display mt-3 text-3xl text-forest">
                    {sponsor.name}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-body">
                    {sponsor.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="flex flex-col items-start justify-between gap-5 border-2 border-line bg-white/60 p-7 sm:flex-row sm:items-center">
              <p className="max-w-xl text-body">
                Want your brand in front of Michigan State&apos;s builders?
                Sponsorships start with a conversation with Ethan, our
                Director of Corporate Relations.
              </p>
              <a
                href={`mailto:${BRAND.sponsorEmail}`}
                className="btn btn-forest shrink-0"
              >
                {BRAND.sponsorEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ EMAIL LIST ============ */}
      <section className="border-t border-line bg-white py-16 sm:py-20">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Stay in the loop</p>
            <h2 className="display mt-3 text-4xl text-ink">
              Get the calendar in your inbox
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <EmailSignup />
          </Reveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
