import type { Metadata } from "next";
import { MapPlaceholder } from "@/components/map-placeholder";
import { MetricCard } from "@/components/metric-card";
import { Section } from "@/components/section";
import { impactMetrics, institutionalOutcomes, regionalScale } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Institutional impact metrics for Eden, including reach, forecast performance, and scalability across Africa.",
};

export default function ImpactPage() {
  return (
    <>
      <Section
        eyebrow="Impact Metrics"
        title="Measured outcomes from Eden deployments"
        description="RavensAI tracks outcomes that matter to institutional partners: reach, predictive quality, and operational scale."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {impactMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Scalability Across Africa"
        title="Regional deployment footprint"
        description="Eden output templates are configured for regional climate patterns and country-specific advisory workflows."
      >
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <MapPlaceholder regions={regionalScale} />

          <div className="space-y-4">
            {regionalScale.map((region) => (
              <article
                key={region.region}
                className="rounded-2xl border border-border bg-white p-4 shadow-sm"
              >
                <h3 className="text-base font-semibold text-brand-950">
                  {region.region}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  {region.countries} countries | {region.institutions} partner
                  institutions
                </p>
                <p className="mt-2 font-mono text-xs tracking-[0.14em] text-brand-700">
                  STATUS: {region.status}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="pb-24"
        eyebrow="Institutional Value"
        title="What partners report after implementation"
        description="Beyond prediction quality, Eden is designed to improve operational coordination and policy execution."
      >
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <ul className="space-y-4 text-sm leading-7 text-slate-700">
            {institutionalOutcomes.map((outcome) => (
              <li key={outcome}>- {outcome}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
