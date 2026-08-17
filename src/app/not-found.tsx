import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EaMark from "@/components/ui/EaMark";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist. Everything current lives on the MSU Entrepreneurship Association homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <EaMark className="pointer-events-none absolute -right-20 top-1/2 h-[150%] w-auto -translate-y-1/2 text-white/[0.05]" />
      <div className="container-x relative flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="eyebrow text-mint">404</p>
        <h1 className="display mt-5 text-6xl sm:text-7xl">
          This page pivoted
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
