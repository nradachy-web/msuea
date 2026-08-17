import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";
import { IS_PREVIEW } from "@/lib/asset";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: IS_PREVIEW
      ? [{ userAgent: "*", disallow: "/" }]
      : [{ userAgent: "*", allow: "/" }],
    sitemap: `${BRAND.siteUrl}/sitemap.xml`,
    host: BRAND.siteUrl,
  };
}
