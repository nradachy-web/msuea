import type { ClubEvent } from "@/lib/constants";
import { cn } from "@/lib/utils";
import DaysOut from "@/components/ui/DaysOut";

/**
 * One event as a notched card: date block, title, description, then
 * the countdown chip with the day, time, and place. `wide` is the
 * roomier events-page cut; the default fits the homepage column.
 */
export default function EventCard({
  event,
  wide = false,
  className,
}: {
  event: ClubEvent;
  wide?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "notch flex flex-col gap-6 bg-white p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-9",
        className,
      )}
    >
      <div className="display flex w-24 shrink-0 flex-col items-center bg-forest px-4 py-5 text-white">
        <span className="text-sm tracking-[0.2em] text-mint">
          {event.dateDisplay.month}
        </span>
        <span className="text-5xl">{event.dateDisplay.day}</span>
        {event.dateDisplay.endDay ? (
          <span className="mt-1 text-sm tracking-[0.2em] text-mint">
            to {event.dateDisplay.endDay}
          </span>
        ) : null}
      </div>
      <div>
        <h3
          className={cn("display text-3xl text-forest", wide && "sm:text-4xl")}
        >
          {event.title}
        </h3>
        <p
          className={cn(
            "mt-2 leading-relaxed text-body",
            wide ? "max-w-2xl" : "max-w-md",
          )}
        >
          {event.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <DaysOut date={event.date} />
          <p className="display text-[0.8rem] leading-snug tracking-[0.12em] text-kelly">
            {event.dateDisplay.weekday} · {event.note}
          </p>
        </div>
      </div>
    </article>
  );
}
