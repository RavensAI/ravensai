import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-brand-700">
            RAVENSAI
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Eden is an AI-powered climate intelligence platform that helps
            institutions translate complex environmental signals into actionable
            agricultural decisions.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-brand-950">Platform</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/system" className="transition hover:text-brand-900">
                System Architecture
              </Link>
            </li>
            <li>
              <Link href="/data" className="transition hover:text-brand-900">
                Data Sources
              </Link>
            </li>
            <li>
              <Link href="/impact" className="transition hover:text-brand-900">
                Impact Metrics
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-brand-950">Research</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/science" className="transition hover:text-brand-900">
                Open Science
              </Link>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand-900">
                Publications
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand-900">
                Datasets & API
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-brand-950">Connect</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/contact" className="transition hover:text-brand-900">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="mailto:partners@ravensai.com"
                className="transition hover:text-brand-900"
              >
                partners@ravensai.com
              </a>
            </li>
            <li className="font-mono text-xs tracking-[0.12em] text-slate-500">
              VERCEL-READY NEXT.JS APPLICATION
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
