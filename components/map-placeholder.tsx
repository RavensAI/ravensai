import type { RegionalScale } from "@/lib/mock-data";

const pinPositions: Record<string, string> = {
  "North Africa": "top-[28%] left-[44%]",
  "West Africa": "top-[44%] left-[33%]",
  "East Africa": "top-[46%] left-[58%]",
  "Southern Africa": "top-[67%] left-[47%]",
};

const statusStyles: Record<RegionalScale["status"], string> = {
  Live: "bg-emerald-100 text-emerald-800",
  Pilot: "bg-amber-100 text-amber-800",
  Expansion: "bg-sky-100 text-sky-800",
};

export function MapPlaceholder({ regions }: { regions: RegionalScale[] }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(37,112,91,0.08),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(42,127,175,0.12),transparent_50%)]" />

      <div className="relative z-10 h-full min-h-[280px]">
        <div className="absolute left-1/2 top-1/2 h-[84%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-[40%_35%_42%_48%/38%_45%_40%_44%] border border-brand-700/20 bg-gradient-to-b from-surface-muted to-white" />

        {regions.map((region) => {
          const position = pinPositions[region.region] ?? "top-1/2 left-1/2";
          return (
            <div
              key={region.region}
              className={`absolute ${position} -translate-x-1/2 -translate-y-1/2`}
            >
              <div className="group relative">
                <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/30 blur-sm transition group-hover:scale-125" />
                <span className="relative block h-3 w-3 rounded-full bg-brand-700 ring-4 ring-white" />
                <div className="absolute left-4 top-1/2 w-max -translate-y-1/2 rounded-lg border border-border bg-white px-2 py-1 text-[11px] shadow-sm">
                  <p className="font-medium text-slate-700">{region.region}</p>
                  <p className={`mt-1 rounded px-2 py-0.5 text-[10px] ${statusStyles[region.status]}`}>
                    {region.status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
