import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";
import { BRAND, BOARD } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import JoinCta from "@/components/ui/JoinCta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the MSU Entrepreneurship Association. Direct email lines for general questions, membership and the email list, dues, and sponsorships, plus Instagram, LinkedIn, and WhatsApp.",
  alternates: { canonical: "/contact/" },
};

/** Board roles come from the BOARD data, never retyped here. */
function roleOf(name: string) {
  return BOARD.find((member) => member.name === name)?.role ?? "";
}

const CONTACTS = [
  {
    topic: "General",
    who: "Club inbox",
    detail: "Questions, ideas, and anything that does not fit a lane below.",
    email: BRAND.email,
  },
  {
    topic: "Membership & email list",
    who: "Katyra Waller",
    detail: roleOf("Katyra Waller"),
    email: BRAND.membershipEmail,
  },
  {
    topic: "Dues",
    who: "Ely Boidaha",
    detail: roleOf("Ely Boidaha"),
    email: BRAND.duesEmail,
  },
  {
    topic: "Sponsorships",
    who: "Ethan Karapatsakis",
    detail: roleOf("Ethan Karapatsakis"),
    email: BRAND.sponsorEmail,
  },
];

const SOCIALS = [
  { label: "Instagram", href: BRAND.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: BRAND.linkedin, Icon: LinkedinIcon },
  { label: "WhatsApp", href: BRAND.whatsapp, Icon: WhatsAppIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us"
        intro="No contact forms into the void. Every message below lands with a real board member."
      />

      {/* ============ DIRECT LINES ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Direct lines</p>
            <h2 className="display mt-4 max-w-xl text-5xl text-ink sm:text-6xl">
              Who reads what
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {CONTACTS.map((contact, i) => (
              <Reveal key={contact.email} delay={i * 70}>
                <article className="notch flex h-full flex-col border-t-4 border-kelly bg-white p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="display text-2xl text-forest">
                        {contact.topic}
                      </h3>
                      <p className="mt-2 text-[0.95rem] text-body">
                        <span className="font-medium text-ink">
                          {contact.who}
                        </span>
                        {contact.detail ? (
                          <span className="text-muted">
                            {" "}
                            &middot; {contact.detail}
                          </span>
                        ) : null}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-forest text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-arrow mt-6 break-all"
                  >
                    {contact.email}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FIND US ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Elsewhere</p>
            <h2 className="display mt-4 text-5xl text-ink sm:text-6xl">
              Find us
            </h2>
            <p className="mt-6 flex items-center gap-3 text-lg text-body">
              <MapPin className="h-5 w-5 shrink-0 text-kelly" />
              East Lansing, Michigan
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-body">
              The fastest answers come through Instagram DMs or the WhatsApp
              community. Email works too, it just moves at inbox speed.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notch group flex items-center justify-between gap-4 border-2 border-line bg-mist px-6 py-5 transition-colors duration-300 hover:border-kelly"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-forest transition-colors group-hover:text-kelly" />
                    <span className="display text-xl text-forest group-hover:text-kelly">
                      {label}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted transition-colors group-hover:text-kelly" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <JoinCta focal="left" />
    </>
  );
}
