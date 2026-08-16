import Link from "next/link";
import {
  CORRECTION_ENGLISH,
  getSolution,
  getTicket,
} from "@/lib/data";

const workOrder = ["197", "203", "202", "200", "199", "201", "198"];

const currentState: Record<
  string,
  { verifiedNow: string[]; nextMove: string; dependency?: string }
> = {
  "197": {
    verifiedNow: [
      "The 15-minute Non-Billable Time Log was saved with Pending status.",
      "faa (Faisal / PMO) is not among the six verified CRM Active Users.",
    ],
    nextMove:
      "Restore or create Faisal's individual faa user first, assign the required Projects access, then run the Owner, Team, Completed, and assignment-email test.",
    dependency:
      "Hallek cannot verify Zoho One activation/licensing directly until mek adds Hallek to the Zoho One organization or the client supplies an admin export.",
  },
  "203": {
    verifiedNow: [
      "mek works and is the verified Super Admin / Administrator.",
      "aia and bms are not among the six verified CRM Active Users.",
      "The client requires independent accounts; no shared password is requested.",
    ],
    nextMove:
      "Have mek inspect aia and bms in Zoho One, activate each unique account, assign licenses/apps, and return the per-account matrix before live login testing.",
    dependency:
      "Hallek's Zoho One account is blocked, so organization-wide license, SSO, and MFA checks require mek's access or a client export.",
  },
  "202": {
    verifiedNow: [
      "Cliq departments and designations are not configured.",
      "Assign Members List.xlsx already contains the employee baseline and must not be requested again.",
    ],
    nextMove:
      "Prepare the proposed Email → Department → Designation mapping from the existing Excel, obtain department-lead approval, apply it in Cliq, then test directory search and chat.",
  },
  "200": {
    verifiedNow: [
      "Mohannad is Super Admin / Administrator and can access several CRM modules and Cost Sheet.",
      "Zoho Desk inside CRM returns Permission denied.",
      "Only six CRM Active Users have been verified.",
    ],
    nextMove:
      "Check Mohannad's Desk license and agent mapping, then produce the six-user Profile, Role, Teamspace, modules, and licenses matrix for role-based testing.",
    dependency:
      "Full license verification needs Zoho One access or a client-provided export.",
  },
  "199": {
    verifiedNow: ["VAT at 15% was verified during the PO test."],
    nextMove:
      "Identify the live quotation template, locate Kick-off DateTime and Project Responsible, document the Lead-update workflow, then capture a real BD/PMO notification delivery.",
  },
  "201": {
    verifiedNow: [
      "No end-to-end evidence currently proves the requested CRM/Projects notifications are delivered.",
    ],
    nextMove:
      "Export active workflow rules, build the trigger/criteria/recipient matrix, obtain recipient approval, and run named test Lead and Task records with inbox evidence.",
    dependency:
      "PMO notification testing remains incomplete while Faisal's faa user is unavailable.",
  },
  "198": {
    verifiedNow: [
      "PO-00004 exists as Draft.",
      "A 15-minute Time Log was verified.",
      "Historical Cost Sheet records show completed approvals.",
    ],
    nextMove:
      "Document the PO location and integration, obtain final stage-owner approval, configure notifications, then move a test PO through Submit → Approve/Reject with email evidence.",
  },
};

export default function ClientTicketsPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-2xl border border-line bg-card p-6">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-rust uppercase">
          Master execution guide · Sunday 16 Aug 2026
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-ink">
          Client Tickets [English]
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
          Each ticket follows one sequence: the client&apos;s official English
          message, what the client actually needs, and the steps Hallek should
          complete. The source is the official bilingual reply sent on Tue 11
          Aug at 3:11–3:12 PM. Earlier Arabic-only replies are not authoritative.
        </p>
        <div className="mt-5 rounded-xl border border-rust/25 bg-rust/5 px-4 py-3">
          <p className="text-sm font-semibold text-ink">Rules for every ticket</p>
          <ul className="mt-1 space-y-1 text-sm text-ink-soft">
            <li>• Do not request Assign Members List.xlsx again.</li>
            <li>• Keep the ticket open until the client records Pass or Fail.</li>
            <li>• Do not send a Zoho Desk reply without Waqqas&apos;s approval.</li>
          </ul>
        </div>
      </header>

      <nav className="flex flex-wrap gap-2" aria-label="Ticket shortcuts">
        {workOrder.map((id, index) => (
          <a
            key={id}
            href={`#ticket-${id}`}
            className="rounded-full border border-line bg-card px-3 py-1.5 text-sm text-ink transition hover:border-sand hover:bg-paper-2"
          >
            {index + 1}. #{id}
          </a>
        ))}
      </nav>

      {workOrder.map((id, orderIndex) => {
        const ticket = getTicket(id);
        const solution = getSolution(id);
        const state = currentState[id];
        if (!ticket || !solution || !state) return null;

        return (
          <article
            id={`ticket-${id}`}
            key={id}
            className="scroll-mt-6 overflow-hidden rounded-2xl border border-line bg-card"
          >
            <header className="flex flex-col gap-3 border-b border-line bg-paper-2/50 p-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-rust uppercase">
                  Work order {orderIndex + 1} · Ticket #{ticket.id} ·{" "}
                  {ticket.priority}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-ink">
                  {ticket.subject}
                </h3>
                <p className="mt-1 text-xs text-ink-soft">
                  Official reply {ticket.officialTime} · Status: {ticket.status}
                </p>
              </div>
              <Link
                href={`/tickets/${ticket.id}`}
                className="text-sm font-medium text-rust hover:text-ink"
              >
                Open original ticket view →
              </Link>
            </header>

            <div className="space-y-6 p-5 md:p-6">
              <section>
                <StepLabel number="1" title="Client ticket [English]" />
                <blockquote className="mt-3 border-l-2 border-sand pl-4 text-sm leading-relaxed text-ink">
                  {ticket.officialEnglish}
                </blockquote>
              </section>

              <section>
                <StepLabel number="2" title="What exactly the client needs" />
                <ul className="mt-3 grid gap-2 md:grid-cols-2">
                  {ticket.whatTheyWant.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-line bg-paper/50 px-4 py-3 text-sm leading-relaxed text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <StepLabel number="3" title="Current verified situation" />
                <ul className="mt-3 space-y-2">
                  {state.verifiedNow.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss" />
                      {item}
                    </li>
                  ))}
                </ul>
                {state.dependency ? (
                  <p className="mt-3 rounded-xl border border-rose/25 bg-rose/5 px-4 py-3 text-sm leading-relaxed text-ink">
                    <span className="font-semibold text-rose">Dependency: </span>
                    {state.dependency}
                  </p>
                ) : null}
              </section>

              <section>
                <StepLabel number="4" title="Solution — how to complete it" />
                <p className="mt-3 rounded-xl bg-ink px-4 py-3 text-sm leading-relaxed text-white">
                  <span className="font-semibold text-sand">Immediate move: </span>
                  {state.nextMove}
                </p>
                <ol className="mt-4 space-y-3">
                  {solution.doThis.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-3 text-sm leading-relaxed text-ink"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-2 text-xs font-semibold text-rust">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="grid gap-4 border-t border-line pt-5 lg:grid-cols-2">
                <ResultList
                  title="Evidence / response package"
                  items={solution.sendToClient}
                />
                <ResultList title="Acceptance test" items={solution.passFail} />
              </section>
            </div>
          </article>
        );
      })}

      <section className="rounded-2xl border border-line bg-card p-5">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-rust uppercase">
          Official correction applied to all seven
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {CORRECTION_ENGLISH}
        </p>
      </section>
    </div>
  );
}

function StepLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rust text-xs font-semibold text-white">
        {number}
      </span>
      <h4 className="font-[family-name:var(--font-display)] text-lg text-ink">
        {title}
      </h4>
    </div>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
        {title}
      </p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-ink">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
