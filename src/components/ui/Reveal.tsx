"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Scroll reveal that can never strand content invisible.
 *
 * The server renders everything VISIBLE. Before first paint, JS adds
 * the pre-animation state (.rv-init) and an IntersectionObserver
 * removes it when the element scrolls into view. With JS disabled,
 * a failed observer, or prefers-reduced-motion, the content simply
 * shows without animating.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    el.classList.add("rv-init");

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.classList.add("rv");
      el.classList.remove("rv-init");
      io.disconnect();
      clearTimeout(timer);
      window.removeEventListener("beforeprint", show);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    // Failsafe: nothing stays hidden longer than a few seconds, even if
    // the observer never fires (print, odd embedders, screenshots).
    const timer = setTimeout(show, 3500);
    window.addEventListener("beforeprint", show);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      window.removeEventListener("beforeprint", show);
    };
  }, []);

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
