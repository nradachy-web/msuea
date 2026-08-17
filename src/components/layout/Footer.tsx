import Link from "next/link";
import { Mail } from "lucide-react";
import { BRAND, NAV } from "@/lib/constants";
import EaMark from "@/components/ui/EaMark";
import {
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";

const SOCIALS = [
  { label: "Instagram", href: BRAND.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: BRAND.linkedin, Icon: LinkedinIcon },
  { label: "WhatsApp", href: BRAND.whatsapp, Icon: WhatsAppIcon },
  { label: "Email", href: `mailto:${BRAND.email}`, Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-pine text-white">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <EaMark className="h-10 w-auto text-white" />
            <span className="display text-left text-[0.95rem] leading-[1.05] tracking-[0.09em]">
              MSU Entrepreneurship
              <br />
              Association
            </span>
          </div>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-fog">
            {BRAND.tagline} Open to every major at {BRAND.university} since{" "}
            {BRAND.founded}.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center bg-white/10 text-white transition-colors hover:bg-kelly"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="display text-sm tracking-[0.14em] text-mint">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {[{ label: "Home", href: "/" }, ...NAV, { label: "Join", href: "/join/" }].map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-fog transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div>
          <h2 className="display text-sm tracking-[0.14em] text-mint">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-fog">
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="break-all transition-colors hover:text-white"
              >
                {BRAND.email}
              </a>
            </li>
            <li>
              Sponsorships:{" "}
              <a
                href={`mailto:${BRAND.sponsorEmail}`}
                className="transition-colors hover:text-white"
              >
                {BRAND.sponsorEmail}
              </a>
            </li>
            <li>
              Membership:{" "}
              <a
                href={`mailto:${BRAND.membershipEmail}`}
                className="transition-colors hover:text-white"
              >
                {BRAND.membershipEmail}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-[0.85rem] leading-relaxed text-fog/80">
            East Lansing, Michigan
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-[0.82rem] text-fog/80 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. A registered student
            organization at {BRAND.university}.
          </p>
          <p>
            Website &amp; marketing by{" "}
            <a
              href="https://modernapexstrategies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-fog/40 underline-offset-2 transition-colors hover:text-white"
            >
              Modern Apex Strategies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
