"use client";

import { upcomingEvents } from "@/lib/events";
import { useClubToday } from "@/lib/useClubToday";
import { cn } from "@/lib/utils";
import EventCard from "@/components/ui/EventCard";
import Reveal from "@/components/ui/Reveal";

/**
 * The next `count` events by date. It reads today's date in the
 * browser, so an event drops off the day after it ends and the next
 * one moves up, with no deploy needed.
 *
 * `list` is the events-page stack ("Locked in"); `feature` is the
 * single homepage card ("Up next"). Once the schedule runs out, both
 * fall back to the "new dates landing soon" card.
 */
export default function UpcomingEvents({
  count,
  variant,
}: {
  count: number;
  variant: "list" | "feature";
}) {
  const today = useClubToday();
  const events = upcomingEvents(today).slice(0, count);
  const list = variant === "list";

  if (events.length === 0) {
    return (
      <article
        className={cn(
          "notch flex flex-col justify-center bg-white p-7 sm:p-9",
          list ? "border-t-4 border-kelly" : "h-full",
        )}
      >
        <h3 className="display text-3xl text-forest">New dates landing soon</h3>
        <p className="mt-2 max-w-md leading-relaxed text-body">
          The next calendar is being finalized. Follow along on Instagram or
          join the email list below and every date reaches you as it locks in.
        </p>
      </article>
    );
  }

  if (!list) {
    return <EventCard event={events[0]} className="h-full" />;
  }

  return (
    <div className="space-y-5">
      {events.map((event, i) => (
        <Reveal key={event.date + event.title} delay={i * 70}>
          <EventCard event={event} wide className="border-t-4 border-kelly" />
        </Reveal>
      ))}
    </div>
  );
}
