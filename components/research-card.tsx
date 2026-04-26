import type { ResearchDataset } from "@/lib/mock-data";

export function ResearchCard({ dataset }: { dataset: ResearchDataset }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-brand-950">{dataset.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{dataset.description}</p>

      <div className="mt-4 space-y-2 text-xs text-slate-600">
        <p className="rounded-lg bg-surface-muted px-3 py-2">
          <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500">
            SCOPE
          </span>
          {dataset.scope}
        </p>
        <p className="rounded-lg bg-surface-muted px-3 py-2">
          <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500">
            SIZE
          </span>
          {dataset.size}
        </p>
        <p className="rounded-lg bg-surface-muted px-3 py-2">
          <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500">
            ACCESS
          </span>
          {dataset.access}
        </p>
      </div>

      <p className="mt-4 text-xs text-brand-700">
        <span className="font-mono tracking-[0.12em]">RELEASE</span> {dataset.releaseDate}
      </p>
    </article>
  );
}
