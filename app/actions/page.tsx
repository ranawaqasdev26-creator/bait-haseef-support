import Link from "next/link";
import { tickets } from "@/lib/data";

export default function ActionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
          What you need to send back
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          All seven tickets stay open until the client finishes their own
          Pass/Fail test. Do not close anything. Do not re-request Assign
          Members List.xlsx.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-paper-2 text-[11px] tracking-[0.14em] text-ink-soft uppercase">
            <tr>
              <th className="px-5 py-3 font-semibold">Ticket</th>
              <th className="px-5 py-3 font-semibold">Priority</th>
              <th className="px-5 py-3 font-semibold">Deliverable</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id} className="border-t border-line align-top">
                <td className="px-5 py-4">
                  <Link href={`/tickets/${t.id}`} className="font-semibold text-ink hover:text-rust">
                    #{t.id}
                  </Link>
                  <p className="mt-0.5 max-w-[220px] text-xs text-ink-soft">
                    {t.subject}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={
                      t.priority === "High" ? "font-semibold text-rose" : "text-ink-soft"
                    }
                  >
                    {t.priority}
                  </span>
                </td>
                <td className="px-5 py-4 leading-relaxed text-ink">
                  {t.deliverable}
                  {t.blocker ? (
                    <p className="mt-2 text-xs font-medium text-rose">
                      Blocker: {t.blocker}
                    </p>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
