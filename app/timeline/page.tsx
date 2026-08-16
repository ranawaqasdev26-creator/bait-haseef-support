import Link from "next/link";
import { getTicket, timeline } from "@/lib/data";

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
          Email timeline
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          Tuesday 11 August 2026, Zoho Mail. Newest first. Official bilingual
          replies are at 3:11–3:12 PM. Correction emails sit on top at
          3:16–3:17 PM.
        </p>
      </div>

      <div className="relative space-y-3 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-line">
        {timeline.map((event, i) => {
          const ticket = getTicket(event.ticketId);
          const official = event.kind === "official";
          return (
            <Link
              key={`${event.ticketId}-${event.time}-${i}`}
              href={`/tickets/${event.ticketId}`}
              className="relative ml-8 block rounded-2xl border border-line bg-card p-4 hover:border-sand"
            >
              <span
                className={`absolute top-5 -left-[29px] h-3 w-3 rounded-full border-2 border-paper ${
                  official ? "bg-moss" : "bg-sand"
                }`}
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-ink">
                  {event.time} · #{event.ticketId} {ticket?.subject}
                </p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    official
                      ? "bg-moss/10 text-moss"
                      : "bg-sand/20 text-ink-soft"
                  }`}
                >
                  {official ? "Official request" : "Correction — ignore Arabic-only"}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">
                {official
                  ? ticket?.whatTheySaid
                  : "Same correction on every ticket: use only the bilingual message."}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
