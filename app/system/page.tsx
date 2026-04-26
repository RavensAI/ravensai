import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Section } from "@/components/section";
import { modelSpecifications } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "System Architecture",
  description:
    "Technical overview of Eden's data ingestion, processing, model ensemble, and decision intelligence engine.",
};

export default function SystemPage() {
  return (
    <>
      <Section
        eyebrow="Eden System"
        title="Architecture designed for traceable climate intelligence"
        description="Eden follows a layered architecture that preserves source provenance and model transparency from ingestion to advisory output."
      >
        <ArchitectureDiagram />
      </Section>

      <Section
        eyebrow="Model Layer"
        title="AI models used in operational forecasting"
        description="Eden combines sequence learning and tree-based methods so outputs remain accurate across different data densities and climate regimes."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modelSpecifications.map((model) => (
            <article
              key={model.name}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-950">{model.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{model.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {model.strengths.map((strength) => (
                  <li key={strength}>- {strength}</li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-surface-muted px-3 py-2 text-xs text-slate-700">
                <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500">
                  PRIMARY OUTPUT
                </span>
                {model.output}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="pb-24"
        eyebrow="Decision Intelligence Engine"
        title="From predictions to action-ready recommendations"
        description="The final layer encodes institutional policies and operational thresholds so outputs are immediately usable for intervention planning."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-950">
              Recommendation Logic
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>- Threshold rules map forecast distributions to advisory categories.</li>
              <li>
                - Confidence-aware fallback logic avoids overconfident decisions in
                sparse data conditions.
              </li>
              <li>- Alert ranking prioritizes districts by expected impact severity.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-surface-muted p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-950">
              Delivery Interfaces
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>- Structured JSON/API outputs for institutional dashboards.</li>
              <li>- Bulletin-ready narrative summaries for extension teams.</li>
              <li>- Audit-friendly metadata for donor and research reporting.</li>
            </ul>
          </article>
        </div>
      </Section>
    </>
  );
}
