import type { Metadata } from "next";
import { APICard } from "@/components/api-card";
import { ResearchCard } from "@/components/research-card";
import { Section } from "@/components/section";
import { apiEndpoints, researchDatasets, researchReleases } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Open Science",
  description:
    "RavensAI commits to transparent AI research. Access training data, model checkpoints, and peer-reviewed publications.",
};

export default function SciencePage() {
  return (
    <>
      <Section
        eyebrow="Open Science"
        title="Transparent research enabling reproducibility and collaboration"
        description="RavensAI believes AI for climate should be open, auditable, and available to researchers and institutions worldwide."
      >
        <div className="rounded-3xl border border-brand-700/20 bg-surface-muted p-8 shadow-sm">
          <p className="max-w-3xl text-sm leading-7 text-slate-700">
            We release training datasets, model weights, and validation benchmarks
            under open licenses. This commitment enables external auditing, accelerates
            regional adaptation, and builds trust with institutional partners who can
            inspect our methods and results.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Research Datasets"
        title="Publicly available climate and agricultural data"
        description="Datasets used to train and validate Eden are released on standard platforms with full documentation and preprocessing scripts."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {researchDatasets.map((dataset) => (
            <ResearchCard key={dataset.name} dataset={dataset} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Peer-Reviewed Publications"
        title="Published research from Eden development"
        description="Technical papers describing our model architecture, training procedures, and field validation are available in open-access journals."
      >
        <div className="space-y-4">
          {researchReleases.map((release) => (
            <article
              key={release.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-brand-950">
                    {release.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-brand-700">
                    {release.date} • v{release.version}
                    {release.doi ? ` • ${release.doi}` : ""}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {release.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-slate-700">
                        - {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="inline-flex whitespace-nowrap rounded-full border border-brand-900/25 px-4 py-2 text-xs font-semibold text-brand-900 transition hover:border-brand-900/45 hover:bg-surface-muted"
                >
                  Read Paper
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="api-docs"
        eyebrow="API Access"
        title="Programmatic access to Eden predictions"
        description="Partners can integrate Eden forecasts directly into operational dashboards and decision-support systems via REST API."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {apiEndpoints.map((endpoint) => (
            <APICard key={endpoint.path} endpoint={endpoint} />
          ))}
        </div>
      </Section>

      <Section
        className="pb-24"
        eyebrow="API Integration"
        title="Getting started with the Eden API"
        description="Authentication, rate limits, and full endpoint documentation are available in our developer portal."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-brand-950">
              Request an API Key
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Academic researchers, NGOs, and government partners can request free API
              access. Commercial licensing available upon inquiry.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-brand-950">
              Developer Documentation
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Complete API reference, code examples in Python and JavaScript, and best
              practices for production integrations.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-brand-950">
              Support & Community
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Access our Slack community for technical support, share use cases, and
              collaborate with other developers.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
