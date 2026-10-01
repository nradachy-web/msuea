import { EVENTS, type ClubEvent } from "@/lib/constants";

/**
 * Date logic for the events list and calendar. Everything works on
 * ISO day strings ("2026-10-07"), which sort and compare as text, so
 * no visitor time zone can shift an event onto the wrong day.
 */

/** The club runs on East Lansing time, wherever the visitor is. */
const CLUB_TZ = "America/Detroit";

const dayFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: CLUB_TZ,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** Today in East Lansing as an ISO day. */
export function clubToday(): string {
  const parts = dayFormat.formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

/** The last day an event is still on (its only day, unless multi-day). */
export function lastDay(event: ClubEvent): string {
  return event.endDate ?? event.date;
}

const SORTED_EVENTS = [...EVENTS].sort((a, b) => a.date.localeCompare(b.date));

/** Events that have not finished yet, soonest first. */
export function upcomingEvents(today: string): ClubEvent[] {
  return SORTED_EVENTS.filter((event) => lastDay(event) >= today);
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Every ISO day an event covers (one, unless multi-day). */
function eventDays(event: ClubEvent): string[] {
  const days: string[] = [];
  const cursor = new Date(`${event.date}T00:00:00Z`);
  const end = new Date(`${lastDay(event)}T00:00:00Z`);
  while (cursor <= end) {
    days.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return days;
}

/** ISO day -> the events on it. */
export const EVENTS_BY_DAY: ReadonlyMap<string, ClubEvent[]> = (() => {
  const map = new Map<string, ClubEvent[]>();
  for (const event of SORTED_EVENTS) {
    for (const day of eventDays(event)) {
      map.set(day, [...(map.get(day) ?? []), event]);
    }
  }
  return map;
})();

/**
 * The months the calendar can page through, as "YYYY-MM" keys: the
 * first event month through the last, with no gaps.
 */
export const EVENT_MONTHS: readonly string[] = (() => {
  if (SORTED_EVENTS.length === 0) return [];
  const first = SORTED_EVENTS[0].date.slice(0, 7);
  const last = SORTED_EVENTS.map(lastDay).sort().at(-1)!.slice(0, 7);
  const months: string[] = [];
  let [year, month] = first.split("-").map(Number);
  while (`${year}-${pad(month)}` <= last) {
    months.push(`${year}-${pad(month)}`);
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }
  return months;
})();

/** The month grid for a "YYYY-MM" key: leading blanks, then ISO days. */
export function monthGrid(monthKey: string): (string | null)[] {
  const [year, month] = monthKey.split("-").map(Number);
  const leading = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const length = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const cells: (string | null)[] = Array(leading).fill(null);
  for (let day = 1; day <= length; day += 1) {
    cells.push(`${monthKey}-${pad(day)}`);
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

/** "October 2026" for a "YYYY-MM" key. */
export function monthLabel(monthKey: string): string {
  const [year, month] = monthKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    year: "numeric",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}
