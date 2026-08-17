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

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
