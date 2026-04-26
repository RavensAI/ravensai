import type { APIEndpoint } from "@/lib/mock-data";

export function APICard({ endpoint }: { endpoint: APIEndpoint }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-brand-950">{endpoint.name}</h3>
        <span className="rounded-full bg-brand-700/10 px-2 py-1 font-mono text-[11px] font-semibold text-brand-700">
          {endpoint.method}
        </span>
      </div>

      <p className="mt-1 font-mono text-xs text-slate-600">{endpoint.path}</p>

      <p className="mt-4 text-sm leading-6 text-slate-700">{endpoint.description}</p>

      <div className="mt-4 rounded-lg bg-slate-900 p-3">
        <p className="font-mono text-[11px] text-slate-300 leading-6 break-all">
          {endpoint.responseExample}
        </p>
      </div>

      <a
        href="#api-docs"
        className="mt-4 inline-flex text-xs font-semibold text-brand-700 transition hover:text-brand-900"
      >
        View full documentation →
      </a>
    </article>
  );
}
