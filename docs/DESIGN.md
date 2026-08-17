# MSUEA site, design system notes

Read these files before writing any page. They are the system:

- `src/app/globals.css` (tokens + component classes)
- `src/app/page.tsx` (the homepage; copy its band patterns exactly)
- `src/lib/constants.ts` (ALL content facts; never hardcode a fact)
- `src/components/ui/*` (EaMark, Reveal, PageHero, JoinCta, EmailSignup, VentureMarquee, BrandIcons)

## Identity

"Varsity Venture": the club's own brand guide. Spartan green palette,
Norwester display caps (class `display`), Inter body. The signature
motif is the NOTCH, an angular corner cut from the EA monogram
(classes `notch`, `notch-tl`, `notch-lg`). Oversized EA mark
watermarks (`<EaMark className="... text-white/[0.05]" />`) tie bands
together.

## Tokens (Tailwind v4 theme colors)

- `forest` #18453B primary green (dark band bg)
- `pine` #0F2A23 footer/deepest
- `kelly` #326C4D accent, CTA
- `moss` #4E8A66 hover/light accent on dark
- `sage` #565E50 muted olive
- `mist` #F2F2F2 light band bg
- `putty` #DAD3C7 warm band bg (use sparingly, `bg-putty/40`)
- `ink` #2E3734 headings on light
- `body` #3C4540 body text on light
- `muted` #66716B secondary on light
- `fog` #B9C6BF secondary on forest
- `line` #D9DED9 borders on light

## Patterns (match the homepage exactly)

- Interior pages open with `<PageHero eyebrow=... title=... intro=...>`.
- Bands: `py-20 sm:py-28` with `container-x`. Alternate mist / white /
  forest surfaces. Section headers: `eyebrow` then `display` h2 in
  `text-ink` (light) or white (dark).
- Cards: `notch` + `bg-white` + `border-t-4 border-kelly` (or
  `border-forest`), padding `p-7`+.
- Buttons: `btn btn-solid | btn-forest | btn-light | btn-outline-light |
  btn-outline-dark`. Text links: `link-arrow` with `<ArrowRight>`.
- Wrap band content in `<Reveal>` (staggering with `delay={i * 70}`).
  Never use animation that hides content by default.
- Every page ends with `<JoinCta />` before the footer (except the join
  page itself, which IS the CTA).
- Raw asset URLs (img src) must go through `asset()` from
  `src/lib/asset.ts`. Internal links use `<Link>` with trailing slash
  hrefs like `/about/`.
- Icons: lucide-react interface icons only (no brand icons there; use
  `BrandIcons.tsx` for Instagram/LinkedIn/WhatsApp).
- Set per-page `export const metadata` with a short `title` and a real
  `description` plus `alternates: { canonical: "/<page>/" }`.

## Hard writing rules

- NEVER use em dashes or en dashes anywhere, including comments and
  metadata. Use commas, periods, or parentheses.
- Professional student-org tone. Energetic, plain verbs, no swearing,
  no filler, no exclamation-mark spam.
- Never invent facts: no member counts, no dates, no names, no ratings.
  Everything factual comes from `constants.ts` or `docs/CONTENT.md`.
- Sentence case for body copy. Norwester headings are auto-uppercased
  by the `display` class, so write them in normal case.
