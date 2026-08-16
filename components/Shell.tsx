"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Board" },
  { href: "/client-tickets", label: "Client Tickets [English]" },
  { href: "/timeline", label: "Email timeline" },
  { href: "/actions", label: "What to send" },
  { href: "/solutions", label: "Solutions" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col px-5 py-6 md:px-8">
      <header className="mb-8 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-rust uppercase">
            Hallek Technologies · Support
          </p>
          <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink md:text-4xl">
            Bait Haseef
          </h1>
          <p className="mt-1 max-w-xl text-sm text-ink-soft">
            Client replies from Tue 11 Aug 2026, 3:11–3:17 PM · contact{" "}
            <span className="font-semibold text-ink">aia</span> · tickets
            #197–#203
          </p>
        </div>
        <nav className="flex flex-wrap gap-1 rounded-full border border-line bg-card p-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? path === "/"
                : path.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-ink text-white"
                    : "text-ink hover:bg-paper-2"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="flex-1 pb-16">{children}</main>
    </div>
  );
}
