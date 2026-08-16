import Link from "next/link";
import { getSolution, tickets } from "@/lib/data";

export default function SolutionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
          Solution for each ticket
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          Do the work in this order: unlock faa (#197), then admin accounts
          (#203), then Cliq mapping (#202), then permissions (#200), then
          CRM fields (#199), then workflows (#201), then PO approvals (#198).
          Keep every ticket open until the client Pass/Fail tests.
        </p>
      </div>

      {tickets.map((ticket) => {
        const solution = getSolution(ticket.id);
        if (!solution) return null;
        return (
          <article
            key={ticket.id}
            className="rounded-2xl border border-line bg-card p-5 md:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-rust uppercase">
                  #{ticket.id} · {ticket.priority}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl text-ink">
                  {ticket.subject}
                </h3>
              </div>
              <Link
                href={`/tickets/${ticket.id}`}
                className="text-sm text-ink-soft hover:text-ink"
              >
                Open ticket →
              </Link>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {solution.rootCause}
            </p>
            <ol className="mt-4 space-y-2">
              {solution.doThis.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-3 text-sm leading-relaxed text-ink"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-5 grid gap-4 border-t border-line pt-4 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  Send back
                </p>
                <ul className="mt-2 space-y-1.5">
                  {solution.sendToClient.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  Pass / Fail
                </p>
                <ul className="mt-2 space-y-1.5">
                  {solution.passFail.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
