import type { EdenOutput } from "@/lib/mock-data";

const statusStyles: Record<EdenOutput["status"], string> = {
  Stable: "bg-emerald-100 text-emerald-800",
  Watch: "bg-amber-100 text-amber-800",
  Critical: "bg-rose-100 text-rose-800",
};

export function OutputCard({ output }: { output: EdenOutput }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-6 text-brand-950">
          {output.title}
        </h3>
        <span
          className={`rounded-full px-2 py-1 text-[11px] font-semibold ${statusStyles[output.status]}`}
        >
          {output.status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-700">{output.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-brand-700/20 bg-surface-muted px-2 py-1 text-[11px] font-medium text-brand-700">
          {output.leadTime}
        </span>
        <span className="rounded-full border border-accent-500/30 bg-white px-2 py-1 text-[11px] font-medium text-accent-700">
          {output.confidence}
        </span>
      </div>

      <p className="mt-4 font-mono text-xs tracking-[0.12em] text-slate-500">
        {output.region}
      </p>
    </article>
  );
}
