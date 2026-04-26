import type { Metadata } from "next";
import { DataSourceCard } from "@/components/data-source-card";
import { Section } from "@/components/section";
import { dataSources } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Data Sources",
  description:
    "Dataset inventory for Eden including source provenance, update cadence, and credibility indicators.",
};

export default function DataPage() {
  return (
    <>
      <Section
        eyebrow="Data Foundation"
        title="Scientific datasets powering Eden"
        description="Eden prioritizes transparent, validated, and institutionally recognized data sources to ensure forecast credibility."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {dataSources.map((source) => (
            <DataSourceCard key={source.name} source={source} />
          ))}
        </div>
      </Section>

      <Section
        className="pb-24"
        eyebrow="Credibility Controls"
        title="How data quality is monitored before model execution"
        description="Each cycle includes integrity checks to prevent low-quality signals from propagating into recommendations."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-brand-950">
              Source Provenance Tracking
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Every record maintains source, timestamp, and transformation lineage
              for reproducible analytical audits.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-brand-950">
              Automated Validation Rules
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Outlier detection, missingness thresholds, and regional consistency
              checks are applied before features enter model pipelines.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-brand-950">
              Versioned Data Snapshots
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Each run uses immutable snapshots, enabling historical comparisons and
              clear attribution of model performance changes.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
