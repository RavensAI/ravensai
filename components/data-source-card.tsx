import type { ClimateDataset } from "@/lib/mock-data";

const credibilityStyles: Record<ClimateDataset["credibility"], string> = {
  "Very High": "bg-emerald-100 text-emerald-800",
  High: "bg-sky-100 text-sky-800",
};

export function DataSourceCard({ source }: { source: ClimateDataset }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-brand-950">{source.name}</h3>
        <span
          className={`rounded-full px-2 py-1 text-[11px] font-semibold ${credibilityStyles[source.credibility]}`}
        >
          {source.credibility} credibility
        </span>
      </div>
      <p className="mt-1 text-sm text-brand-700">{source.provider}</p>

      <p className="mt-4 text-sm leading-6 text-slate-700">{source.description}</p>

      <div className="mt-4 grid gap-2 text-xs text-slate-600 sm:grid-cols-3">
        <p className="rounded-lg bg-surface-muted px-3 py-2">
          <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500">
            CADENCE
          </span>
          {source.cadence}
        </p>
        <p className="rounded-lg bg-surface-muted px-3 py-2">
          <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500">
            COVERAGE
          </span>
          {source.coverage}
        </p>
        <p className="rounded-lg bg-surface-muted px-3 py-2">
          <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500">
            FORMAT
          </span>
          {source.format}
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {source.indicators.map((indicator) => (
          <li key={indicator}>- {indicator}</li>
        ))}
      </ul>
    </article>
  );
}
