import type { Metadata } from "next";
import { Mail, Megaphone, Users } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { BRAND, UPCOMING_EVENTS } from "@/lib/constants";
import EaMark from "@/components/ui/EaMark";
import Reveal from "@/components/ui/Reveal";
import EmailSignup from "@/components/ui/EmailSignup";
import JoinCta from "@/components/ui/JoinCta";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Confirmed MSUEA events at Michigan State, plus how every event drops: announced on Instagram first, signup links on the email list, day-of coordination in WhatsApp.",
  alternates: { canonical: "/events/" },
};

/** How every MSUEA event reaches members, per the club's own process. */
const DROP_STEPS = [
  {
    n: "01",
    icon: Megaphone,
    title: "Instagram first",
    body: `Every event is announced on ${BRAND.instagramHandle} first. Follow along and you will see each drop the moment it goes live.`,
  },
  {
    n: "02",
    icon: Mail,
    title: "Email gets the link",
    body: "The email list gets the signup link, so when spots are limited the people on the list are first in line.",
  },
  {
    n: "03",
    icon: Users,
    title: "WhatsApp on the day",
    body: "Day-of coordination happens in the WhatsApp community: where to meet, when to show up, and who else is coming.",
  },
] as const;

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="On the calendar"
        intro="The fall calendar is being finalized, so this page lists only what is confirmed. New dates land on Instagram and the email list first, then here."
      />

      {/* ============ CONFIRMED EVENTS ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Confirmed</p>
            <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
              Locked in
            </h2>
          </Reveal>
          <div className="mt-12 space-y-5">
            {UPCOMING_EVENTS.map((event, i) => (
              <Reveal key={event.date + event.title} delay={i * 70}>
                <article className="notch flex flex-col gap-6 border-t-4 border-kelly bg-white p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-9">
                  <div className="display flex w-24 shrink-0 flex-col items-center bg-forest px-4 py-5 text-white">
                    <span className="text-sm tracking-[0.2em] text-moss">
                      {event.dateDisplay.month}
                    </span>
                    <span className="text-5xl">{event.dateDisplay.day}</span>
                  </div>
                  <div>
                    <h3 className="display text-3xl text-forest sm:text-4xl">
                      {event.title}
                    </h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-body">
                      {event.description}
                    </p>
                    <p className="display mt-4 text-[0.8rem] tracking-[0.12em] text-kelly">
                      {event.dateDisplay.weekday} · {event.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10" delay={100}>
            <p className="max-w-2xl text-muted">
              More is on the way. The full fall calendar is being finalized,
              and every new date is announced on {BRAND.instagramHandle} and
              the email list before it appears here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ HOW EVENTS DROP ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The playbook</p>
            <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
              How events drop
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {DROP_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="notch h-full border-t-4 border-forest bg-mist p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center bg-forest text-white">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="display text-2xl text-line">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="display mt-5 text-2xl text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10" delay={100}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-forest"
              >
                <InstagramIcon className="h-4 w-4" />
                Follow {BRAND.instagramHandle}
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Join the WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ EMAIL LIST ============ */}
      <section
        id="email-list"
        className="relative overflow-hidden bg-forest py-20 text-white sm:py-28"
      >
        <EaMark className="pointer-events-none absolute -right-24 -bottom-16 h-[120%] w-auto text-white/[0.05]" />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-moss">Stay in the loop</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">
              Never miss a night
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-fog">
              Signup forms and calendars land in your inbox, so a limited-spot
              event never passes you by.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <EmailSignup dark />
          </Reveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
