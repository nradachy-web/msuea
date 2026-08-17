import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { BRAND } from "@/lib/constants";
import EaMark from "@/components/ui/EaMark";
import Reveal from "@/components/ui/Reveal";

/**
 * Closing band used across the site: one clear next step.
 */
export default function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <EaMark className="pointer-events-none absolute -left-20 top-1/2 h-[160%] w-auto -translate-y-1/2 text-white/[0.05]" />
      <div className="container-x relative py-20 text-center sm:py-28">
        <Reveal>
          <p className="eyebrow justify-center text-mint">
            Open to every major
          </p>
          <h2 className="display mx-auto mt-5 max-w-3xl text-5xl sm:text-6xl">
            Come build with us
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fog">
            One WhatsApp link is the whole front door. Events, signups, and
            the people building things at Michigan State.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Join the WhatsApp
            </a>
            <Link href="/join/" className="btn btn-outline-light text-base">
              See how to join
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
