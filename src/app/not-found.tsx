import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";
import SpartanHelmet from "@/components/ui/SpartanHelmet";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page does not exist. Everything current lives on the MSU Entrepreneurship Association homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={asset("/images/art/hero-1400.jpg")}
          alt=""
          className="h-full w-full object-cover object-[75%_center] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-forest/30" />
      </div>
      <div className="container-x relative flex min-h-[70vh] flex-col items-start justify-center py-24">
        <p className="eyebrow text-mint">
          <SpartanHelmet className="h-4 w-auto" />
          404
        </p>
        <h1 className="display mt-5 text-6xl sm:text-8xl">
          This page
          <br />
          pivoted
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-fog">
          Whatever lived here has moved on to its next venture. The homepage
          has everything current.
        </p>
        <Link href="/" className="btn btn-solid mt-9">
          Back to the homepage
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
