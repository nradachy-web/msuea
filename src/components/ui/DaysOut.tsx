"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Scoreboard countdown chip: "12 days out". Computed client-side
 * only (the server renders nothing) so the static build never bakes
 * in a stale count or causes a hydration mismatch. Renders nothing
 * once the date has passed.
 */
export default function DaysOut({
  date,
  className,
}: {
  /** ISO date, e.g. "2026-09-22" */
  date: string;
  className?: string;
}) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(`${date}T00:00:00`);
    const diff = Math.ceil((target.getTime() - Date.now()) / 86_400_000);
    setDays(diff);
  }, [date]);

  if (days === null || days < 0) return null;

  const label =
    days === 0 ? "Today" : days === 1 ? "Tomorrow" : `${days} days out`;

  return (
    <span
      className={cn(
        "display inline-flex items-center gap-2 bg-kelly px-3 py-1.5 pt-2 text-[0.75rem] tracking-[0.14em] text-white",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
      {label}
    </span>
  );
}
