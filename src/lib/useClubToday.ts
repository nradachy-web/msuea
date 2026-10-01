"use client";

import { useSyncExternalStore } from "react";
import { clubToday } from "@/lib/events";

/** The day the static HTML was built, set in next.config.ts. */
const BUILD_DAY = process.env.NEXT_PUBLIC_BUILD_DAY as string;

/** Re-check the date when a tab that sat open comes back into view. */
function subscribe(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

/**
 * Today in East Lansing as an ISO day. The static export renders with
 * the build day, then the browser swaps in the real date right after
 * hydration, so date-driven content rolls forward on its own between
 * deploys without a hydration mismatch.
 */
export function useClubToday(): string {
  return useSyncExternalStore(subscribe, clubToday, () => BUILD_DAY);
}
