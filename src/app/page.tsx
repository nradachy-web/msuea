import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import {
  BRAND,
  PROGRAMS,
  TICKER_ITEMS,
  UPCOMING_EVENTS,
  SPONSORS,
  MEMBERSHIP_QUOTE,
} from "@/lib/constants";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import EaMark from "@/components/ui/EaMark";
import SpartanHelmet from "@/components/ui/SpartanHelmet";
import Ticker from "@/components/ui/Ticker";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import VentureMarquee from "@/components/ui/VentureMarquee";
import EmailSignup from "@/components/ui/EmailSignup";
import JoinCta from "@/components/ui/JoinCta";

export default function HomePage() {
  const nextEvent = UPCOMING_EVENTS[0];

  return (
    <>
      {/* ============ HERO: gameday poster ============ */}
      <section className="relative overflow-hidden bg-forest text-white">
        {/* cinematic keyart: right panel on desktop, full-bleed on mobile */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block"
          aria-hidden="true"
        >
          <Parallax speed={-0.06} className="h-full">
            <img
              src={asset("/images/art/hero-1400.jpg")}
              alt=""
              loading="lazy"
              className="h-[115%] w-full object-cover object-right"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-forest/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
          <img
            src={asset("/images/art/hero-900.jpg")}
            alt=""
            className="h-full w-full object-cover object-[72%_center]"
          />
          <div className="absolute inset-0 bg-forest/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-forest/70" />
        </div>
        <div className="container-x relative py-20 sm:py-28 lg:py-36">
          <Reveal>
            <p className="eyebrow text-mint">
              <SpartanHelmet className="h-5 w-auto" />
              {BRAND.university} · Est. {BRAND.founded}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display mt-6">
              <span className="block text-[clamp(2.1rem,5.4vw,4.3rem)]">
                Where Spartans
              </span>
              <span className="display-outline block text-[clamp(4.6rem,13vw,10.5rem)]">
                Build
              </span>
              <span className="block text-[clamp(2.1rem,5.4vw,4.3rem)]">
                what&apos;s <span className="text-mint">next.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">
              MSUEA is Michigan State&apos;s student community for
              entrepreneurship. Speaker nights, pitch competitions,
              workshops, and trips that turn ideas into ventures. No startup
              experience required.
            </p>
          </Reveal>
          <Reveal delay={300}>
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
      </section>

      {/* stadium ribbon */}
      <Ticker items={TICKER_ITEMS} />

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
              <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-7xl">
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
                  className="notch group flex h-full flex-col border-t-4 border-kelly bg-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={asset(program.artWide ?? program.art)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex grow flex-col justify-between p-7">
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
                  </div>
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
            <h2 className="display mt-4 text-5xl text-ink sm:text-7xl">
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
              <h2 className="display mt-4 text-5xl text-ink sm:text-7xl">
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
        <SpartanHelmet className="pointer-events-none absolute -right-16 -bottom-24 h-[130%] w-auto text-white/[0.04]" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow text-mint">What membership looks like</p>
            <span
              aria-hidden="true"
              className="display mt-8 block text-8xl leading-[0.5] text-putty/60"
            >
              &ldquo;
            </span>
            <blockquote className="mt-4 max-w-3xl font-body text-2xl italic leading-snug text-white sm:text-3xl lg:text-4xl">
              {MEMBERSHIP_QUOTE}
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
              <h2 className="display mt-4 text-5xl text-ink sm:text-7xl">
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
                Email Ethan
              </a>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <div className="flex items-center gap-5">
              <SpartanHelmet
                title="Michigan State University Spartan helmet"
                className="h-12 w-auto shrink-0 text-forest"
              />
              <p className="max-w-xl text-sm leading-relaxed text-body">
                MSUEA is a registered student organization at{" "}
                <a
                  href="https://msu.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest underline decoration-line underline-offset-2 hover:text-kelly"
                >
                  Michigan State University
                </a>
                , proudly part of the Spartan community since {BRAND.founded}.
              </p>
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
