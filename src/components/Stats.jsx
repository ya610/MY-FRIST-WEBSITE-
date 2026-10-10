import { gymConfig as g } from "../config/gymConfig.js";

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
        {g.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-5xl text-primary md:text-6xl">{s.number}</p>
            <p className="mt-1 text-xs tracking-[0.2em] text-muted uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
