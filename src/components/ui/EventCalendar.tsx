"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  EVENT_MONTHS,
  EVENTS_BY_DAY,
  lastDay,
  monthGrid,
  monthLabel,
  upcomingEvents,
} from "@/lib/events";
import { useClubToday } from "@/lib/useClubToday";
import { cn } from "@/lib/utils";
import DaysOut from "@/components/ui/DaysOut";

const WEEKDAYS = [
  ["Su", "Sunday"],
  ["Mo", "Monday"],
  ["Tu", "Tuesday"],
  ["We", "Wednesday"],
  ["Th", "Thursday"],
  ["Fr", "Friday"],
  ["Sa", "Saturday"],
] as const;

/** The month to open on: the next event's month, else the last one. */
function openingMonth(today: string): string {
  const next = upcomingEvents(today)[0];
  return next ? next.date.slice(0, 7) : EVENT_MONTHS[EVENT_MONTHS.length - 1];
}

/** The day to show details for until the visitor picks one. */
function openingDay(days: (string | null)[], today: string): string | null {
  const eventDays = days.filter(
    (day): day is string => day !== null && EVENTS_BY_DAY.has(day),
  );
  return eventDays.find((day) => day >= today) ?? eventDays[0] ?? null;
}

/**
 * Month calendar of every club event. Event days are filled and
 * notched; hovering or focusing one previews its details below the
 * grid, and clicking pins it. The arrows page through the months
 * that hold events. All of it is driven by EVENTS in constants.ts.
 */
export default function EventCalendar() {
  const today = useClubToday();
  // null = follow the date: open on the next event's month and day
  const [pickedMonth, setPickedMonth] = useState<string | null>(null);
  const [pinnedDay, setPinnedDay] = useState<string | null>(null);
  const [previewDay, setPreviewDay] = useState<string | null>(null);

  if (EVENT_MONTHS.length === 0) return null;

  const month = pickedMonth ?? openingMonth(today);
  const monthIndex = EVENT_MONTHS.indexOf(month);
  const days = monthGrid(month);
  const activeDay = previewDay ?? pinnedDay ?? openingDay(days, today);
  const activeEvents = activeDay ? (EVENTS_BY_DAY.get(activeDay) ?? []) : [];

  const goToMonth = (index: number) => {
    setPickedMonth(EVENT_MONTHS[index]);
    setPinnedDay(null);
    setPreviewDay(null);
  };

  return (
    <div className="notch bg-white">
      <div className="flex items-center justify-between bg-forest px-3 py-3 text-white">
        <button
          type="button"
          onClick={() => goToMonth(monthIndex - 1)}
          disabled={monthIndex <= 0}
          aria-label="Previous month"
          className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-kelly disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="display pt-1 text-2xl" aria-live="polite">
          {monthLabel(month)}
        </h3>
        <button
          type="button"
          onClick={() => goToMonth(monthIndex + 1)}
          disabled={monthIndex >= EVENT_MONTHS.length - 1}
          aria-label="Next month"
          className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-kelly disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="px-4 pt-4 sm:px-5">
        <div className="grid grid-cols-7 gap-1">
          {WEEKDAYS.map(([short, full]) => (
            <span
              key={short}
              aria-label={full}
              className="display pb-1 text-center text-[0.7rem] tracking-[0.14em] text-kelly"
            >
              {short}
            </span>
          ))}
          {days.map((day, i) => {
            if (!day) return <span key={`blank-${i}`} />;
            const number = Number(day.slice(8));
            const events = EVENTS_BY_DAY.get(day);
            const isToday = day === today;

            if (!events) {
              return (
                <span
                  key={day}
                  aria-current={isToday ? "date" : undefined}
                  className={cn(
                    "display flex aspect-square items-center justify-center bg-mist pt-1 text-lg text-muted",
                    isToday &&
                      "text-forest shadow-[inset_0_0_0_2px_var(--color-kelly)]",
                  )}
                >
                  {number}
                </span>
              );
            }

            const past = events.every((event) => lastDay(event) < today);
            // every day of a multi-day event lights up together
            const active = events.some((event) => activeEvents.includes(event));
            return (
              <button
                key={day}
                type="button"
                onClick={() => setPinnedDay(day)}
                onMouseEnter={() => setPreviewDay(day)}
                onMouseLeave={() => setPreviewDay(null)}
                onFocus={() => setPreviewDay(day)}
                onBlur={() => setPreviewDay(null)}
                aria-pressed={active}
                aria-current={isToday ? "date" : undefined}
                aria-label={`${events[0].dateDisplay.month} ${number}: ${events
                  .map((event) => `${event.title}, ${event.note}`)
                  .join("; ")}`}
                className={cn(
                  "notch display relative flex aspect-square cursor-pointer items-center justify-center pt-1 text-lg transition-colors [--notch:9px]",
                  past
                    ? "bg-putty text-ink"
                    : active
                      ? "bg-kelly text-white"
                      : "bg-forest text-white",
                  past &&
                    active &&
                    "shadow-[inset_0_0_0_2px_var(--color-sage)]",
                )}
              >
                {number}
                {isToday ? (
                  <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-mint" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 min-h-[11.5rem] border-t border-line px-5 pt-5 pb-7 sm:px-6">
        {activeEvents.length > 0 ? (
          <div className="space-y-5">
            {activeEvents.map((event) => (
              <div key={event.date + event.title}>
                <p className="display text-[0.8rem] tracking-[0.12em] text-kelly">
                  {event.dateDisplay.weekday} · {event.dateDisplay.month}{" "}
                  {event.dateDisplay.day}
                  {event.dateDisplay.endDay
                    ? ` to ${event.dateDisplay.endDay}`
                    : ""}
                </p>
                <h4 className="display mt-2 text-2xl text-forest">
                  {event.title}
                </h4>
                <p className="mt-2 text-sm font-semibold text-ink">
                  {event.note}
                </p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-body">
                  {event.description}
                </p>
                {lastDay(event) < today ? (
                  <p className="display mt-3 text-[0.75rem] tracking-[0.14em] text-muted">
                    Past event
                  </p>
                ) : (
                  <DaysOut date={event.date} className="mt-3" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[0.95rem] leading-relaxed text-muted">
            Nothing on the calendar this month. Use the arrows to check the
            months around it.
          </p>
        )}
      </div>
    </div>
  );
}
