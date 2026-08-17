import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Mail, Megaphone, Users } from "lucide-react";
import { BOARD, BRAND, SPONSORS } from "@/lib/constants";
import EaMark from "@/components/ui/EaMark";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description:
    "Partner with the MSU Entrepreneurship Association. Put your brand in front of Michigan State students who are actively building, and design a sponsorship that fits your goals.",
  alternates: { canonical: "/sponsors/" },
};

/** Copy on this page is general by design: no attendance or reach numbers exist. */
const VALUE_PROPS = [
  {
    icon: Megaphone,
    title: "Be seen where builders gather",
    body: "Speaker nights, pitch competitions, workshops, and networking nights put your brand in the room with students who show up to build, semester after semester.",
  },
  {
    icon: Users,
    title: "Meet talent early",
    body: "MSUEA draws entrepreneurial students from every major, from first-time founders to students already running a business. Partners meet them while their ideas and careers are still taking shape.",
  },
  {
    icon: GraduationCap,
    title: "Back a proven institution",
    body: `Founded in ${BRAND.founded}, MSUEA is one of the Burgess Institute's flagship student organizations inside Michigan State's nationally recognized entrepreneurship ecosystem.`,
  },
] as const;

export default function SponsorsPage() {
  const sponsorLead = BOARD.find(
    (member) => member.role === "Director of Corporate Relations",
  );

  return (
    <>
      <PageHero
        eyebrow="Sponsors & partners"
        title={
          <>
            Put your brand
            <br />
            behind the builders
          </>
        }
        intro={
          <>
            MSUEA connects sponsors with Michigan State students who are
            actively building. Back the community where campus founders,
            first-timers, and future operators show up to learn, pitch, and
            connect.
          </>
        }
      />

      {/* ============ CURRENT BACKERS ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Backed by</p>
            <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
              Current backers
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SPONSORS.map((sponsor, i) => (
              <Reveal key={sponsor.name} delay={i * 80}>
                <div className="notch notch-lg h-full border-t-4 border-forest bg-white p-8 sm:p-10">
                  <p className="display text-[0.75rem] tracking-[0.16em] text-kelly">
                    {sponsor.kind}
                  </p>
                  <h3 className="display mt-4 text-3xl text-forest sm:text-4xl">
                    {sponsor.name}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-body">
                    {sponsor.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-muted">
              Their support keeps programming open to students of every major
              and experience level. There is room on this wall for your brand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY PARTNER ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The case</p>
              <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
                Why partner
              </h2>
            </div>
            <a
              href={`mailto:${BRAND.sponsorEmail}`}
              className="link-arrow"
            >
              Start the conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALUE_PROPS.map((prop, i) => (
              <Reveal key={prop.title} delay={i * 70}>
                <div className="notch h-full border-t-4 border-kelly bg-mist p-7">
                  <span className="flex h-12 w-12 items-center justify-center bg-forest text-white">
                    <prop.icon className="h-6 w-6" />
                  </span>
                  <h3 className="display mt-6 text-2xl text-forest">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
                    {prop.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SPONSOR CTA ============ */}
      <section className="relative overflow-hidden bg-forest text-white">
        <EaMark className="pointer-events-none absolute -left-20 top-1/2 h-[160%] w-auto -translate-y-1/2 text-white/[0.05]" />
        <div className="container-x relative py-20 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow justify-center text-mint">
              Start the conversation
            </p>
            <h2 className="display mx-auto mt-5 max-w-3xl text-5xl sm:text-6xl">
              Let&apos;s design your partnership
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-fog">
              Sponsorship starts with a conversation with
              {sponsorLead ? ` ${sponsorLead.name},` : ""} our Director of
              Corporate Relations. Tell us what your brand wants from campus,
              and we will shape the partnership around it.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${BRAND.sponsorEmail}`}
                className="btn btn-solid text-base"
              >
                <Mail className="h-5 w-5" />
                {BRAND.sponsorEmail}
              </a>
              <Link href="/contact/" className="btn btn-outline-light text-base">
                More ways to reach us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
