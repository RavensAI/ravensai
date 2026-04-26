import { Fragment } from "react";
import { architectureFlow } from "@/lib/mock-data";

function FlowNode({
  layer,
  title,
  details,
}: {
  layer: string;
  title: string;
  details: string[];
}) {
  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <p className="font-mono text-[11px] tracking-[0.18em] text-brand-700">
        {layer}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-brand-950">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </article>
  );
}

function FlowConnector() {
  return (
    <>
      <div className="flex items-center justify-center py-1 text-brand-700 lg:hidden">
        <span className="font-mono text-lg">v</span>
      </div>
      <div className="hidden items-center justify-center text-brand-700 lg:flex">
        <span className="rounded-full border border-brand-700/25 bg-surface-muted px-2 py-1 font-mono text-[10px] tracking-[0.14em]">
          FLOW
        </span>
        <span className="ml-2 font-mono text-base">{"->"}</span>
      </div>
    </>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm lg:p-8">
      {/* Diagram style flow rendered as nodes and connectors for clarity on all breakpoints. */}
      <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
        {architectureFlow.map((node, index) => (
          <Fragment key={node.layer}>
            <FlowNode layer={node.layer} title={node.title} details={node.details} />
            {index < architectureFlow.length - 1 ? <FlowConnector /> : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
