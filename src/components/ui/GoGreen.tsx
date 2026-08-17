"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const COLORS = ["#8cc0a4", "#326c4d", "#ffffff", "#4e8a66", "#f2f2f2"];

/**
 * The footer easter egg: tapping "Go green. Go white." fires a burst
 * of green and white confetti from the click point. Web Animations
 * API, no dependencies, cleans itself up, and stays quiet under
 * reduced motion.
 */
export default function GoGreen({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const busy = useRef(false);

  function burst(e: React.MouseEvent<HTMLButtonElement>) {
    if (busy.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    busy.current = true;

    const { clientX, clientY } = e;
    const host = document.createElement("div");
    host.setAttribute("aria-hidden", "true");
    host.style.cssText =
      "position:fixed;inset:0;pointer-events:none;z-index:90;overflow:hidden";
    document.body.appendChild(host);

    const count = 70;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      const size = 5 + ((i * 7) % 7);
      p.style.cssText = `position:absolute;left:${clientX}px;top:${clientY}px;width:${size}px;height:${
        size * 0.6
      }px;background:${COLORS[i % COLORS.length]};`;
      host.appendChild(p);

      const angle = (i / count) * Math.PI * 2 + (i % 3) * 0.4;
      const speed = 140 + ((i * 37) % 160);
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed - 190;
      const rot = ((i * 131) % 720) - 360;
      p.animate(
        [
          { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
          {
            transform: `translate(${dx * 0.7}px, ${dy}px) rotate(${rot / 2}deg)`,
            opacity: 1,
            offset: 0.55,
          },
          {
            transform: `translate(${dx}px, ${dy + 340}px) rotate(${rot}deg)`,
            opacity: 0,
          },
        ],
        { duration: 1500 + ((i * 53) % 500), easing: "cubic-bezier(0.16,1,0.3,1)" },
      );
    }

    window.setTimeout(() => {
      host.remove();
      busy.current = false;
    }, 2100);
  }

  return (
    <button
      type="button"
      onClick={burst}
      aria-label="Go green, go white"
      className={cn("cursor-pointer text-left", className)}
    >
      {children}
    </button>
  );
}
