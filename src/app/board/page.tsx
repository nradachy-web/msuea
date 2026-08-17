import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { BRAND, BOARD } from "@/lib/constants";
import { asset } from "@/lib/asset";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import JoinCta from "@/components/ui/JoinCta";

export const metadata: Metadata = {
  title: "Executive Board",
  description:
    "Meet the 2026/2027 executive board of the MSU Entrepreneurship Association, the student team leading MSUEA at Michigan State University.",
  alternates: { canonical: "/board/" },
};

export default function BoardPage() {
  return (
    <>
      <PageHero
        eyebrow="2026/2027"
        title="The executive board"
        intro="The student team behind MSUEA, planning the speaker nights, pitch competitions, workshops, and trips that fill the calendar."
      />

      {/* ============ THE BOARD ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((member, i) => (
              <Reveal as="li" key={member.name} delay={(i % 3) * 70} className="h-full">
                <article className="flex h-full flex-col border-t-4 border-kelly bg-white">
                  <div className="notch">
                    <img
                      src={asset(member.photo)}
                      alt={member.name}
                      className="aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 pb-5">
                    <p className="display text-[0.75rem] tracking-[0.16em] text-kelly">
                      {member.role}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] leading-snug text-body">
                      {member.program}
                    </p>
                    <p className="mt-1 text-sm text-muted">{member.hometown}</p>
                  </div>
                  <div className="mt-auto border-t border-line px-6 py-4">
                    <p className="display text-[0.7rem] tracking-[0.16em] text-muted">
                      Fun fact
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                      {member.funFact}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ TALK TO THE BOARD ============ */}
      <section className="border-t border-line bg-white py-16 sm:py-20">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
              Want to talk to the board?
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-body">
              General questions go to the club inbox. Sponsorship
              conversations go straight to Ethan, our Director of Corporate
              Relations.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-4 lg:items-end">
            <a href={`mailto:${BRAND.email}`} className="btn btn-forest">
              <Mail className="h-4 w-4" />
              {BRAND.email}
            </a>
            <a
              href={`mailto:${BRAND.sponsorEmail}`}
              className="btn btn-outline-dark"
            >
              <Mail className="h-4 w-4" />
              {BRAND.sponsorEmail}
            </a>
          </Reveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
