import type { ImpactMetric } from "@/lib/mock-data";

export function MetricCard({ metric }: { metric: ImpactMetric }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <p className="font-mono text-[11px] tracking-[0.16em] text-brand-700">
        METRIC
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-950">
        {metric.value}
      </p>
      <h3 className="mt-2 text-base font-semibold text-slate-900">{metric.label}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{metric.description}</p>
    </article>
  );
}
