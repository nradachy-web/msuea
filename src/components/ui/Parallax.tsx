"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-position parallax. Translates its children vertically as the
 * element moves through the viewport, at `speed` times the scroll
 * delta (negative = drifts against scroll). Work only happens while
 * the element is on screen (IntersectionObserver gate + rAF), and the
 * effect is disabled entirely under prefers-reduced-motion. The
 * resting transform is zero, so with JS off the layout is untouched.
 */
export default function Parallax({
  children,
  speed = 0.08,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let active = false;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const delta = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`;
    };
    const request = () => {
      if (active && !raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        active = entries.some((e) => e.isIntersecting);
        if (active) request();
      },
      { rootMargin: "25% 0px 25% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
