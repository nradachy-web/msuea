import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { BRAND, JOIN_STEPS, MEMBERSHIP_QUOTE } from "@/lib/constants";
import { asset } from "@/lib/asset";
import EaMark from "@/components/ui/EaMark";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import EmailSignup from "@/components/ui/EmailSignup";

export const metadata: Metadata = {
  title: "Join",
  description:
    "How to join the MSU Entrepreneurship Association in three steps: join the WhatsApp community, get on the email list, and pay dues via Venmo. Open to every major, no startup experience required.",
  alternates: { canonical: "/join/" },
};

/**
 * The join page IS the site's conversion moment, so it skips the
 * shared JoinCta band and walks the three real steps instead.
 */
export default function JoinPage() {
  const [stepOne, stepTwo, stepThree] = JOIN_STEPS;

  return (
    <>
      <PageHero
        eyebrow="Join MSUEA"
        title="Three steps and you're in"
        intro={
          <>
            MSUEA is open to every major and every experience level, no
            startup experience required. Joining takes a few minutes: get
            in the chat, get on the list, pay your dues.
          </>
        }
      />

      {/* ============ THE THREE STEPS ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <h2 className="sr-only">How to join</h2>

          {/* Step 1: WhatsApp */}
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[6rem_1fr] lg:gap-12">
              <div className="display notch flex h-20 w-20 items-center justify-center bg-forest text-3xl text-white">
                {stepOne.n}
              </div>
              <div>
                <h3 className="display text-3xl text-forest sm:text-4xl">
                  {stepOne.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-body">
                  {stepOne.body}
                </p>
                <a
                  href={stepOne.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid mt-7 text-base"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {stepOne.cta.label}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Step 2: email list */}
          <Reveal delay={70} className="mt-14 border-t-2 border-line pt-14">
            <div
              id="email-list"
              className="grid scroll-mt-28 gap-6 lg:grid-cols-[6rem_1fr] lg:gap-12"
            >
              <div className="display notch flex h-20 w-20 items-center justify-center bg-forest text-3xl text-white">
                {stepTwo.n}
              </div>
              <div>
                <h3 className="display text-3xl text-forest sm:text-4xl">
                  {stepTwo.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-body">
                  {stepTwo.body}
                </p>
                <EmailSignup className="mt-7 max-w-2xl" />
              </div>
            </div>
          </Reveal>

          {/* Step 3: dues via Venmo */}
          <Reveal delay={140} className="mt-14 border-t-2 border-line pt-14">
            <div className="grid gap-6 lg:grid-cols-[6rem_1fr] lg:gap-12">
              <div className="display notch flex h-20 w-20 items-center justify-center bg-forest text-3xl text-white">
                {stepThree.n}
              </div>
              <div>
                <h3 className="display text-3xl text-forest sm:text-4xl">
                  {stepThree.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-body">
                  {stepThree.body}
                </p>
                <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
                  <div className="notch shrink-0 border-2 border-line bg-white p-4">
                    <img
                      src={asset("/images/venmo-qr.svg")}
                      alt="Venmo QR code for @AngelaLeach"
                      className="h-40 w-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <a
                      href={stepThree.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-forest"
                    >
                      {stepThree.cta.label}
                    </a>
                    <p className="display text-[0.8rem] tracking-[0.12em] text-kelly">
                      Free MSUEA t-shirt for new members
                    </p>
                    <a
                      href={`mailto:${BRAND.duesEmail}`}
                      className="link-arrow text-[0.85rem]"
                    >
                      <Mail className="h-4 w-4" />
                      {BRAND.duesEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MEMBERSHIP, in the club's own words ============ */}
      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
        <EaMark className="pointer-events-none absolute -left-24 -bottom-16 h-[120%] w-auto text-white/[0.05]" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow text-moss">What membership looks like</p>
            <blockquote className="mt-7 max-w-4xl font-body text-2xl italic leading-snug text-white sm:text-3xl">
              &ldquo;{MEMBERSHIP_QUOTE}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ QUESTIONS ============ */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 border-2 border-line bg-white p-7 sm:p-9 lg:flex-row lg:items-center">
              <div>
                <p className="eyebrow">Questions</p>
                <p className="mt-3 max-w-xl leading-relaxed text-body">
                  Membership questions go to Katyra Waller, our Director of
                  Social Media. For anything else, the club inbox is always
                  open.
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-4">
                <a
                  href={`mailto:${BRAND.membershipEmail}`}
                  className="btn btn-forest"
                >
                  <Mail className="h-4 w-4" />
                  {BRAND.membershipEmail}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="link-arrow text-[0.85rem]"
                >
                  <Mail className="h-4 w-4" />
                  {BRAND.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
