import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export const dynamic = "force-static";

const STATIC: {
  path: string;
  priority: number;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/join/", priority: 0.95, freq: "monthly" },
  { path: "/about/", priority: 0.9, freq: "monthly" },
  { path: "/programs/", priority: 0.85, freq: "monthly" },
  { path: "/events/", priority: 0.85, freq: "weekly" },
  { path: "/board/", priority: 0.8, freq: "yearly" },
  { path: "/sponsors/", priority: 0.8, freq: "monthly" },
  { path: "/contact/", priority: 0.7, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return STATIC.map((s) => ({
    url: `${BRAND.siteUrl}${s.path}`,
    lastModified: now,
    changeFrequency: s.freq,
    priority: s.priority,
  }));
}
