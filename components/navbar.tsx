import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/system", label: "System" },
  { href: "/data", label: "Data" },
  { href: "/impact", label: "Impact" },
  //{ href: "/science", label: "Science" },
  //{ href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-900 text-xs font-semibold tracking-[0.08em] text-white">
            RA
          </span>
          <div className="leading-tight">
            <p className="font-mono text-[11px] tracking-[0.18em] text-brand-700">
              RAVENSAI
            </p>
            <p className="text-xs text-slate-600">Eden Climate Intelligence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:partners@ravensai.com?subject=Partner%20With%20RavensAI"
          className="hidden rounded-full bg-brand-400 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-950 md:inline-flex"
        >
          Partner With Us
        </a>
      </div>

      <nav className="border-t border-border/70 px-6 py-3 md:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-700 transition hover:text-brand-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
