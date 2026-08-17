/**
 * MSU ENTREPRENEURSHIP ASSOCIATION, single source of truth.
 *
 * Every name, title, link, and date below comes from the club's own
 * website questionnaire (Google Doc, answered Aug 2026) or the official
 * 2026/2027 Executive Board graphic supplied by the club. Nothing here
 * is invented. If a fact changes, change it here only.
 *
 * Board titles follow the official board graphic where it differs from
 * the questionnaire (e.g. Jonah is VP of Undergraduate Affairs).
 */

export const BRAND = {
  name: "MSU Entrepreneurship Association",
  short: "MSUEA",
  university: "Michigan State University",
  founded: 2006,
  tagline: "The student home of entrepreneurship at Michigan State.",
  email: "michiganstateea@gmail.com",
  siteUrl: "https://www.msuea.org",
  instagram: "https://www.instagram.com/msu.ea",
  instagramHandle: "@msu.ea",
  linkedin:
    "https://www.linkedin.com/in/michigan-state-entrepreneurship-association-724385282/",
  whatsapp: "https://chat.whatsapp.com/K9j7FPRYGMcDYwCbVQ9HWj",
  venmoUrl: "https://venmo.com/u/AngelaLeach",
  venmoHandle: "@AngelaLeach",
  /** Katyra Waller, Director of Social Media: membership + email list. */
  membershipEmail: "waller10@msu.edu",
  /** Ely Boidaha, Director of Finance: dues pricing. */
  duesEmail: "boidahae@msu.edu",
  /** Ethan Karapatsakis, Director of Corporate Relations: sponsorships. */
  sponsorEmail: "karapats@msu.edu",
} as const;

/** Web3Forms key arrives via repo variable; empty string = mailto fallback. */
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export const SEO = {
  home: {
    title:
      "MSU Entrepreneurship Association | Student Entrepreneurship at Michigan State",
    description:
      "MSUEA is Michigan State University's student community for entrepreneurship. Speaker series, pitch competitions, networking nights, workshops, and trips. Open to every major since 2006.",
  },
} as const;

export const NAV = [
  { label: "About", href: "/about/" },
  { label: "Programs", href: "/programs/" },
  { label: "Events", href: "/events/" },
  { label: "E-Board", href: "/board/" },
  { label: "Sponsors", href: "/sponsors/" },
  { label: "Contact", href: "/contact/" },
] as const;

export type Program = {
  slug: string;
  name: string;
  blurb: string;
};

/** Blurbs adapted from the club's own program descriptions. */
export const PROGRAMS: Program[] = [
  {
    slug: "speaker-series",
    name: "Speaker Series",
    blurb:
      "Learn from successful founders, entrepreneurs, investors, and industry leaders as they share their experiences, insights, and advice.",
  },
  {
    slug: "pitch-competitions",
    name: "Pitch Competitions",
    blurb:
      "Present your business ideas, receive valuable feedback from experienced judges, and compete for funding, prizes, and recognition.",
  },
  {
    slug: "networking-nights",
    name: "Networking Nights",
    blurb:
      "Build meaningful connections with students, alumni, entrepreneurs, investors, and professionals from a variety of industries.",
  },
  {
    slug: "workshops",
    name: "Workshops",
    blurb:
      "Develop practical entrepreneurial skills through interactive sessions on topics like branding, marketing, finance, leadership, and launching a business.",
  },
  {
    slug: "trips",
    name: "Regional & National Trips",
    blurb:
      "Travel to entrepreneurial hubs across the region and country to visit startups, incubators, and venture firms while experiencing different entrepreneurial ecosystems firsthand.",
  },
];

export type BoardMember = {
  name: string;
  role: string;
  program: string;
  hometown: string;
  funFact: string;
  photo: string;
};

/** Order and titles follow the official 2026/2027 Executive Board graphic. */
export const BOARD: BoardMember[] = [
  {
    name: "Angela Leach",
    role: "President",
    program: "MBA Candidate, Supply Chain Management & Finance",
    hometown: "Clarkston, MI",
    funFact: "Has tried matcha from every coffee shop in East Lansing.",
    photo: "/images/board/angela-leach.jpg",
  },
  {
    name: "Nick Ealy",
    role: "VP of MBA & Graduate Affairs (External)",
    program: "MBA Candidate, Finance & Entrepreneurship",
    hometown: "Port Huron, MI",
    funFact: "Can make a great steak and pasta carbonara.",
    photo: "/images/board/nick-ealy.jpg",
  },
  {
    name: "Ederick Plantegenest",
    role: "VP of MBA & Graduate Affairs (Internal)",
    program: "Mechanical Engineering, Minor in Entrepreneurship",
    hometown: "Okemos, MI",
    funFact: "Enjoys skydiving.",
    photo: "/images/board/ederick-plantegenest.jpg",
  },
  {
    name: "Jonah Alsfasser",
    role: "VP of Undergraduate Affairs",
    program: "Computer Data Science",
    hometown: "Farmington Hills, MI",
    funFact: "Studied International Business in Rome this summer.",
    photo: "/images/board/jonah-alsfasser.jpg",
  },
  {
    name: "Samuel Klonke",
    role: "Director of Events & Operations",
    program: "Supply Chain Management",
    hometown: "Royal Oak, MI",
    funFact: "Runs his own video production brand, Soar Effect.",
    photo: "/images/board/sam-klonke.jpg",
  },
  {
    name: "Katyra Waller",
    role: "Director of Social Media",
    program: "Advertising Creative (B.A.), Minor in Business",
    hometown: "Detroit, MI",
    funFact: "Had her brand featured on a billboard in Times Square, New York.",
    photo: "/images/board/katyra-waller.jpg",
  },
  {
    name: "Brandon Matthews",
    role: "Director of Marketing",
    program: "J.D./MBA Candidate",
    hometown: "Grand Rapids, MI",
    funFact: "Can solve a Rubik's Cube in under 45 seconds.",
    photo: "/images/board/brandon-matthews.jpg",
  },
  {
    name: "Ethan Karapatsakis",
    role: "Director of Corporate Relations",
    program: "J.D./MBA Candidate",
    hometown: "Canton, MI",
    funFact: "Is the youngest of three brothers.",
    photo: "/images/board/ethan-karapatsakis.jpg",
  },
  {
    name: "Ely Boidaha",
    role: "Director of Finance",
    program: "MBA Candidate, Finance & Entrepreneurship",
    hometown: "Nouakchott & Houghton Lake",
    funFact: "Enjoys off-roading in the desert.",
    photo: "/images/board/ely-boidaha.jpg",
  },
];

/** Notable ventures with MSU roots, as listed by the club. */
export const VENTURES = [
  "Hightouch",
  "Vizcom",
  "Quadratic",
  "Halfdays",
  "Circadian Risk",
  "Vade Nutrition",
  "Motmot",
  "YouLearn.AI",
  "Protein Pints",
  "Athlytic",
  "Turtlecell",
  "BRCĒ",
  "CAPNOS",
  "Lilypad Labs",
  "Zolli Candy",
  "Brew Export",
  "Detroit Salsa Company",
  "AG3 Labs",
] as const;

export type ClubEvent = {
  date: string;
  dateDisplay: { month: string; day: string; weekday: string };
  title: string;
  description: string;
  note: string;
};

export const UPCOMING_EVENTS: ClubEvent[] = [
  {
    date: "2026-09-22",
    dateDisplay: { month: "SEP", day: "22", weekday: "Tuesday" },
    title: "MSUEA x Recharged Pilates",
    description:
      "A collaboration event with Recharged Pilates. Spots are limited, so keep an eye on our Instagram and email list for the signup form.",
    note: "Limited spots. Signup form announced soon.",
  },
];

export const SPONSORS = [
  {
    name: "Lake Trust Credit Union",
    kind: "Sponsor",
    blurb:
      "A statewide Michigan credit union backing student entrepreneurship at MSU.",
  },
  {
    name: "Burgess Institute for Entrepreneurship & Innovation",
    kind: "Campus Partner",
    blurb:
      "MSU's home for entrepreneurship, connecting students with founders, mentors, investors, and startup resources.",
  },
] as const;

/** The club's own words on what membership looks like. */
export const MEMBERSHIP_QUOTE =
  "MSUEA is Michigan State's community for students who want to build, pitch, and connect, no startup or business background required. As a member, you get a rotating mix of hands-on workshops, town halls, and pitch nights spanning topics such as tech, the creator economy, consumer products, and finance. Come once a month or every week; either way, you'll leave with new skills, new people, and a real sense of what's getting built on campus.";

export const JOIN_STEPS = [
  {
    n: "01",
    title: "Join the WhatsApp",
    body: "Every announcement, event, and conversation starts in the MSUEA WhatsApp community. This is the front door.",
    cta: { label: "Open WhatsApp invite", href: BRAND.whatsapp },
  },
  {
    n: "02",
    title: "Get on the email list",
    body: "Event calendars, signup forms, and recaps land in your inbox so you never miss a night that matters.",
    cta: { label: "Sign up below", href: "#email-list" },
  },
  {
    n: "03",
    title: "Pay your dues",
    body: "Dues keep events free-flowing all year, and new members get a free MSUEA t-shirt. Questions on pricing go to Ely, our Director of Finance.",
    cta: { label: "Venmo " + BRAND.venmoHandle, href: BRAND.venmoUrl },
  },
] as const;
