import Link from "next/link";
import SpartanHelmet from "@/components/ui/SpartanHelmet";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { BRAND } from "@/lib/constants";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";

const FOCALS = {
  left: "object-[22%_center]",
  center: "object-center",
  right: "object-[78%_center]",
} as const;

/**
 * Closing band used across the site: one clear next step, set over
 * the "hands raising shapes" poster art with a forest scrim so the
 * type keeps full contrast. Each page passes a different `focal`
 * crop so the recurring band reads as a motif, not a paste.
 */
export default function JoinCta({
  focal = "center",
}: {
  focal?: keyof typeof FOCALS;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={-0.06} className="h-full">
          <img
            src={asset("/images/art/join-900.jpg")}
            srcSet={`${asset("/images/art/join-900.jpg")} 900w, ${asset(
              "/images/art/join-1400.jpg",
            )} 1400w`}
            sizes="100vw"
            alt=""
            className={cn("h-[120%] w-full object-cover", FOCALS[focal])}
            loading="lazy"
          />
        </Parallax>
        <div className="absolute inset-0 bg-forest/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-transparent to-forest/60" />
      </div>
      <div className="container-x relative py-24 text-center sm:py-32">
        <Reveal>
          <SpartanHelmet className="mx-auto h-12 w-auto text-mint" />
          <p className="eyebrow mt-6 justify-center text-mint">
            Open to every major
          </p>
          <h2 className="display mx-auto mt-5 max-w-3xl text-5xl sm:text-7xl">
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
