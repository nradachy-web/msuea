"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV, BRAND } from "@/lib/constants";
import EaMark from "@/components/ui/EaMark";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close the mobile panel on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock scroll while the panel is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-50 bg-forest text-white">
      <div className="container-x flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="MSU Entrepreneurship Association home"
        >
          <EaMark className="h-8 w-auto text-white sm:h-9" />
          <span className="display hidden text-left text-[0.82rem] leading-[1.05] tracking-[0.09em] min-[400px]:block sm:text-[0.9rem]">
            MSU Entrepreneurship
            <br />
            Association
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "display pt-0.5 text-[0.9rem] tracking-[0.1em] transition-colors hover:text-mint",
                isActive(item.href) ? "text-mint" : "text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/join/" className="btn btn-solid px-5 py-2.5 text-[0.85rem]">
            Join MSUEA
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 flex-col overflow-y-auto bg-forest px-6 pb-10 pt-4 sm:top-20 lg:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {[{ label: "Home", href: "/" }, ...NAV].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "display border-b border-white/10 py-5 text-3xl tracking-[0.06em]",
                isActive(item.href) ? "text-mint" : "text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/join/" className="btn btn-solid mt-8 w-full text-lg">
          Join MSUEA
        </Link>
        <p className="mt-6 text-sm text-fog">
          {BRAND.short} · Est. {BRAND.founded} · {BRAND.university}
        </p>
      </div>
    </header>
  );
}
