"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

/**
 * Cinematic background video rotation. Two stacked <video> layers
 * crossfade through the clip playlist, Benson-style but blended
 * client-side so every scene change is a soft dissolve.
 *
 * The videos mount only after hydration and never for users with
 * reduced motion or data saver, so the graded still underneath is
 * always the safe default and nothing is hidden if video fails.
 */
export default function HeroVideo({
  clips,
  className,
  objectPosition = "object-right",
  media,
}: {
  clips: string[];
  className?: string;
  objectPosition?: string;
  /** e.g. "(min-width: 1024px)": only load when this matches, so a
   *  hidden breakpoint's instance never downloads video. */
  media?: string;
}) {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const vidA = useRef<HTMLVideoElement | null>(null);
  const vidB = useRef<HTMLVideoElement | null>(null);
  const state = useRef({ active: 0, clip: 0, switching: false });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (media && !window.matchMedia(media).matches) return;
    const conn = (navigator as { connection?: { saveData?: boolean } })
      .connection;
    if (conn?.saveData) return;
    setEnabled(true);
  }, [media]);

  useEffect(() => {
    if (!enabled) return;
    const a = vidA.current;
    const b = vidB.current;
    if (!a || !b) return;

    const layers = [a, b];
    const FADE_LEAD = 1.1; // seconds before clip end to begin the dissolve

    const src = (i: number) => asset(clips[i % clips.length]);

    a.src = src(0);
    state.current = { active: 0, clip: 0, switching: false };

    const onFirstReady = () => {
      a.play()
        .then(() => setVisible(true))
        .catch(() => {
          /* autoplay blocked: the still stays */
        });
    };
    a.addEventListener("canplay", onFirstReady, { once: true });
    a.load();

    const tick = () => {
      const s = state.current;
      const cur = layers[s.active];
      const nxt = layers[1 - s.active];
      if (
        !s.switching &&
        cur.duration > 0 &&
        cur.duration - cur.currentTime < FADE_LEAD
      ) {
        s.switching = true;
        nxt.src = src(s.clip + 1);
        const start = () => {
          nxt.play()
            .then(() => {
              nxt.style.opacity = "1";
              cur.style.opacity = "0";
              window.setTimeout(() => {
                cur.pause();
                state.current = {
                  active: 1 - s.active,
                  clip: s.clip + 1,
                  switching: false,
                };
              }, 1200);
            })
            .catch(() => {
              state.current.switching = false;
            });
        };
        nxt.addEventListener("canplay", start, { once: true });
        nxt.load();
      }
    };

    const iv = window.setInterval(tick, 250);
    return () => {
      window.clearInterval(iv);
      a.removeEventListener("canplay", onFirstReady);
      layers.forEach((v) => {
        v.pause();
        v.removeAttribute("src");
      });
    };
  }, [enabled, clips]);

  if (!enabled) return null;

  const vidCls = cn(
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
    objectPosition,
  );

  return (
    <div
      className={cn(
        "absolute inset-0 transition-opacity duration-1000",
        visible ? "opacity-100" : "opacity-0",
        className,
      )}
      aria-hidden="true"
    >
      <video ref={vidA} muted playsInline preload="none" className={vidCls} />
      <video
        ref={vidB}
        muted
        playsInline
        preload="none"
        className={vidCls}
        style={{ opacity: 0 }}
      />
    </div>
  );
}
