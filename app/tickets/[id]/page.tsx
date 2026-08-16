import Link from "next/link";
import { notFound } from "next/navigation";
import { CORRECTION_ENGLISH, getSolution, getTicket, tickets } from "@/lib/data";

export function generateStaticParams() {
  return tickets.map((t) => ({ id: t.id }));
}

export default async function TicketPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = getTicket(id);
  const solution = getSolution(id);
  if (!ticket) notFound();

  const index = tickets.findIndex((t) => t.id === id);
  const prev = tickets[index - 1];
  const next = tickets[index + 1];

  return (
    <article className="space-y-6">
      <Link href="/" className="text-sm text-ink-soft hover:text-ink">
        ← Back to board
      </Link>

      <header className="rounded-2xl border border-line bg-card p-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
          <span className="text-rust">Ticket #{ticket.id}</span>
          <span className="text-line">·</span>
          <span
            className={
              ticket.priority === "High" ? "text-rose" : "text-ink-soft"
            }
          >
            {ticket.priority}
          </span>
          <span className="text-line">·</span>
          <span className="text-ink-soft">{ticket.status}</span>
        </div>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl leading-tight text-ink">
          {ticket.subject}
        </h2>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <Meta label="Contact" value={ticket.contact} />
          <Meta label="Opened" value={ticket.created} />
          <Meta label="Last reply" value={ticket.lastReply} />
          <Meta label="Official email" value={ticket.officialTime} />
          <Meta label="Correction email" value={ticket.correctionTime} />
          <Meta label="Threads" value={String(ticket.threads)} />
        </dl>
      </header>

      {ticket.blocker ? (
        <div className="rounded-2xl border border-rose/30 bg-rose/10 px-5 py-4">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-rose uppercase">
            Blocker
          </p>
          <p className="mt-1 text-sm text-ink">{ticket.blocker}</p>
        </div>
      ) : null}

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-card p-5">
          <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
            What the client said
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {ticket.whatTheySaid}
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-5">
          <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
            What they want from you
          </h3>
          <ul className="mt-2 space-y-2">
            {ticket.whatTheyWant.map((item) => (
              <li
                key={item}
                className="border-l-2 border-sand pl-3 text-sm leading-relaxed text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <List title="Already verified" items={ticket.verified} empty="Nothing verified yet." tone="ok" />
        <List title="Still pending" items={ticket.pending} empty="—" tone="wait" />
      </section>

      <section className="rounded-2xl border border-line bg-card p-5">
        <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
          Official English from the {ticket.officialTime} email
        </h3>
        <blockquote className="mt-3 border-l-2 border-sand pl-4 text-sm leading-relaxed text-ink-soft italic">
          {ticket.officialEnglish}
        </blockquote>
        <p className="mt-5 text-[11px] font-semibold tracking-[0.16em] text-rust uppercase">
          Correction email · {ticket.correctionTime}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {CORRECTION_ENGLISH}
        </p>
      </section>

      {solution ? (
        <section className="space-y-4 rounded-2xl border border-moss/30 bg-card p-5">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-moss uppercase">
              Solution
            </p>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl text-ink">
              What Hallek should do
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {solution.rootCause}
            </p>
          </div>
          <ol className="space-y-2">
            {solution.doThis.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="grid gap-4 pt-2 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                Send back to the client
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
        </section>
      ) : null}

      <section className="rounded-2xl bg-ink px-5 py-4 text-white">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-sand uppercase">
          Deliverable
        </p>
        <p className="mt-1 text-sm leading-relaxed">{ticket.deliverable}</p>
      </section>

      <nav className="flex justify-between text-sm">
        {prev ? (
          <Link href={`/tickets/${prev.id}`} className="text-ink-soft hover:text-ink">
            ← #{prev.id} {prev.subject}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/tickets/${next.id}`} className="text-ink-soft hover:text-ink">
            #{next.id} {next.subject} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] tracking-[0.12em] text-ink-soft uppercase">
        {label}
      </dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

function List({
  title,
  items,
  empty,
  tone,
}: {
  title: string;
  items: string[];
  empty: string;
  tone: "ok" | "wait";
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
        {title}
      </h3>
      {items.length === 0 ? (
        <p className="mt-2 text-sm text-ink-soft">{empty}</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink">
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                  tone === "ok" ? "bg-moss" : "bg-rust"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
