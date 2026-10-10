import { Dumbbell, User, Flame, Activity, Users, HeartPulse, ArrowRight } from "lucide-react";
import { gymConfig as g } from "../config/gymConfig.js";
import SafeImage from "./SafeImage.jsx";

const iconMap = { Dumbbell, User, Flame, Activity, Users, HeartPulse };

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-5 py-24">
      <p className="text-sm font-semibold tracking-[0.3em] text-primary">PROGRAMS</p>
      <h2 className="mt-2 font-display text-5xl md:text-6xl">TRAIN THE WAY YOU WANT</h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {g.programs.map((p) => {
          const Icon = iconMap[p.icon] ?? Dumbbell;
          return (
            <article key={p.title} className="group overflow-hidden rounded-lg bg-surface">
              <div className="relative h-52 overflow-hidden">
                <SafeImage src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <Icon className="text-primary" size={28} aria-hidden="true" />
                <h3 className="mt-3 font-display text-3xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
