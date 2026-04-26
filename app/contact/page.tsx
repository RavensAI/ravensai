import type { Metadata } from "next";
import { PartnerForm } from "@/components/partner-form";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Get in touch with RavensAI to explore partnership opportunities and bring climate intelligence to your institution.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Partnerships"
        title="Deploy climate intelligence with RavensAI"
        description="RavensAI partners with governments, NGOs, research institutions, and development organizations to operationalize Eden in real-world decision workflows."
      >
        <div className="rounded-3xl border border-brand-700/20 bg-surface-muted p-8 shadow-sm">
          <p className="max-w-3xl text-sm leading-7 text-slate-700">
            Whether you're a ministry planning regional adaptation strategies,
            an NGO supporting smallholder farmers, or a research institution studying
            climate impacts, we can tailor Eden to your specific context and scale.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Typical Engagement Flow"
        title="How partnerships work"
        description="We guide partners through discovery, deployment, and ongoing operation to ensure lasting value."
      >
        <div className="grid gap-5 md:grid-cols-4">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <p className="font-mono text-xs tracking-[0.2em] text-brand-700">
              PHASE 01
            </p>
            <h3 className="mt-3 text-base font-semibold text-brand-950">
              Discovery & Assessment
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              We understand your geographic scope, crops, and decision infrastructure.
              Technical feasibility is confirmed.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <p className="font-mono text-xs tracking-[0.2em] text-brand-700">
              PHASE 02
            </p>
            <h3 className="mt-3 text-base font-semibold text-brand-950">
              Baseline Data Curation
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Historical rainfall, crop yields, and soil data are assembled and
              validated for model training.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <p className="font-mono text-xs tracking-[0.2em] text-brand-700">
              PHASE 03
            </p>
            <h3 className="mt-3 text-base font-semibold text-brand-950">
              Model Training & Validation
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Eden is tuned for your regional climate patterns and crops. Performance
              is independently validated.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <p className="font-mono text-xs tracking-[0.2em] text-brand-700">
              PHASE 04
            </p>
            <h3 className="mt-3 text-base font-semibold text-brand-950">
              Launch & Operations
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Regular forecasts are delivered via API, dashboard, or mobile. Ongoing
              support and retraining.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Use Cases"
        title="How institutions use Eden"
        description="Real examples of climate intelligence in action across different institutional contexts."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-950">
              Ministry of Agriculture
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Integrate Eden forecasts into seasonal crop advisories, national early
              warning systems, and input subsidy targeting. Reach extension agents and
              smallholders at scale.
            </p>
            <p className="mt-4 font-mono text-xs text-brand-700">
              📍 East Africa | 3 countries | 500K+ farmers
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-950">
              NGO Climate Programs
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Embed Eden recommendations into humanitarian response planning, disaster
              risk reduction programs, and community adaptation initiatives for
              targeted support.
            </p>
            <p className="mt-4 font-mono text-xs text-brand-700">
              📍 West Africa | Multi-country | 200K farmers
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-950">
              Research Institutions
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Use Eden as a reproducible baseline for climate impact studies,
              behavioral research, and policy evaluation. Access open datasets and
              model architectures.
            </p>
            <p className="mt-4 font-mono text-xs text-brand-700">
              📍 Multi-region | 12 pilot sites | 50+ papers
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-950">
              Private Sector
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Agritech firms and insurers integrate Eden predictions into platform
              features: risk-based insurance, input recommendations, market
              intelligence.
            </p>
            <p className="mt-4 font-mono text-xs text-brand-700">
              📍 Across Africa | 10+ integrations
            </p>
          </article>
        </div>
      </Section>

      <Section
        className="pb-24"
        eyebrow="Get Started"
        title="Tell us about your partnership vision"
        description="Fill out the form below and we'll connect you with a partnership specialist who can answer your questions and explore next steps."
      >
        <PartnerForm />
      </Section>

      <Section className="border-t border-border/70 bg-surface-muted" title="Other ways to connect">
        <div className="max-w-3xl">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Questions or want to learn more before filling out a formal inquiry?
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-brand-950">Email</h3>
            <p className="mt-3 text-sm text-slate-700">
              <a
                href="mailto:partners@ravensai.com"
                className="font-semibold text-brand-700 hover:text-brand-900"
              >
                partners@ravensai.com
              </a>
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-brand-950">Locations</h3>
            <p className="mt-3 text-sm text-slate-700">
              <span className="block">Nairobi, Kenya</span>
              <span className="block">Kigali, Rwanda</span>
              <span className="block">Remote globally</span>
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-brand-950">Media & Press</h3>
            <p className="mt-3 text-sm text-slate-700">
              <a
                href="mailto:press@ravensai.com"
                className="font-semibold text-brand-700 hover:text-brand-900"
              >
                press@ravensai.com
              </a>
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
