import Link from "next/link";
import type { Ticket } from "@/lib/data";

export function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <Link
      href={`/tickets/${ticket.id}`}
      className="group block rounded-2xl border border-line bg-card p-5 transition hover:border-sand"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
            #{ticket.id} · {ticket.threads} threads
          </p>
          <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg leading-snug text-ink group-hover:text-rust">
            {ticket.subject}
          </h3>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
            ticket.priority === "High"
              ? "bg-rose/10 text-rose"
              : "bg-paper-2 text-ink-soft"
          }`}
        >
          {ticket.priority}
        </span>
      </div>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
        {ticket.whatTheySaid}
      </p>
      {ticket.blocker ? (
        <p className="mt-3 rounded-lg bg-rose/10 px-3 py-2 text-xs font-medium text-rose">
          Blocker: {ticket.blocker}
        </p>
      ) : null}
      <div className="mt-4 flex items-center justify-between text-xs text-ink-soft">
        <span>Official {ticket.officialTime}</span>
        <span className="text-ink group-hover:underline">Open detail →</span>
      </div>
    </Link>
  );
}
