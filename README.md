# MSU Entrepreneurship Association website

Next.js 16 static export, Tailwind v4, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

- Preview: https://nradachy-web.github.io/msuea/ (noindex)
- Production target: https://www.msuea.org (see `docs/LAUNCH.md`)

## Facts live in one place

All names, links, events, and board data are in
`src/lib/constants.ts`. Fix a fact there, push, done.
Design system notes: `docs/DESIGN.md`. Content rules: `docs/CONTENT.md`.

## Open gates

1. **Web3Forms key.** The email list form falls back to a prefilled
   mailto draft until `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` exists as a
   repo variable. Create a free key at web3forms.com pointed at
   michiganstateea@gmail.com, then:
   `gh variable set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY --repo nradachy-web/msuea --body "<key>"`
   and re-run the deploy workflow.
2. **Domain cutover.** Runbook in `docs/LAUNCH.md`.
3. **Event calendar.** The club is finalizing the fall calendar; add
   events to `UPCOMING_EVENTS` in constants as they confirm.

## Local build

```
npm ci
NEXT_PUBLIC_BASE_PATH=/msuea npm run build   # preview parity
npm run build                                # production parity
```
