import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20 ${className ?? ""}`}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="font-mono text-xs tracking-[0.2em] text-brand-700">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
