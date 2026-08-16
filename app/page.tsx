import Link from "next/link";
import { tickets } from "@/lib/data";
import { TicketCard } from "@/components/TicketCard";

export default function HomePage() {
  const high = tickets.filter((t) => t.priority === "High").length;

  return (
    <div className="space-y-8">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat value="7" label="Open tickets" hint="All waiting on Hallek" />
        <Stat value="14" label="Emails in window" hint="Two waves, same tickets" />
        <Stat value={String(high)} label="High priority" hint="#201 #200 #199 #198" />
        <Stat value="1" label="Hard blocker" hint="faa login for Faisal" />
      </section>

      <div className="rounded-2xl border border-sand/50 bg-card p-5">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-rust uppercase">
          Read this first
        </p>
        <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl text-ink">
          Two waves — use the bilingual reply only
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">
          3:11–3:12 PM is the official client request (Arabic + English).
          3:16–3:17 PM is a correction: ignore any earlier Arabic-only reply
          from that day. They also asked you to remove the earlier Arabic
          reply from the thread if possible. They already sent{" "}
          <strong className="text-ink">Assign Members List.xlsx</strong> —
          do not ask for it again.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/solutions"
            className="rounded-full bg-ink px-4 py-1.5 text-sm text-white"
          >
            Open solutions
          </Link>
          <Link
            href="/timeline"
            className="rounded-full border border-line px-4 py-1.5 text-sm text-ink"
          >
            See the 14 emails
          </Link>
          <Link
            href="/actions"
            className="rounded-full border border-line px-4 py-1.5 text-sm text-ink"
          >
            What to send back
          </Link>
        </div>
      </div>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
            Tickets
          </h2>
          <p className="text-xs text-ink-soft">
            Desk status: Waiting for Customer · assigned to you
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card px-5 py-4">
      <p className="font-[family-name:var(--font-display)] text-3xl text-ink">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-ink">{label}</p>
      <p className="text-xs text-ink-soft">{hint}</p>
    </div>
  );
}
