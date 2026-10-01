import type { NextConfig } from "next";

/**
 * MSU Entrepreneurship Association, static export.
 *
 * Production target is GitHub Pages at the domain root (www.msuea.org):
 * no basePath, and public/CNAME written by the deploy workflow.
 *
 * The pre-launch preview is a GitHub Pages project page served from
 * /msuea, so NEXT_PUBLIC_BASE_PATH="/msuea" is set for that build.
 * Raw asset URLs go through asset() in src/lib/asset.ts, since basePath
 * does not rewrite those.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * The East Lansing date of this build, as an ISO day. The events list
 * and calendar render with it, then switch to the visitor's real date
 * in the browser (src/lib/useClubToday.ts).
 */
const buildDay = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Detroit",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  env: { NEXT_PUBLIC_BUILD_DAY: buildDay },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
