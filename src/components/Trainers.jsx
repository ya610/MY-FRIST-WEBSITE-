import { Instagram } from "lucide-react";
import { gymConfig as g } from "../config/gymConfig.js";
import SafeImage from "./SafeImage.jsx";

export default function Trainers() {
  return (
    <section id="trainers" className="mx-auto max-w-7xl px-5 py-24">
      <p className="text-sm font-semibold tracking-[0.3em] text-primary">TRAINERS</p>
      <h2 className="mt-2 font-display text-5xl md:text-6xl">MEET YOUR COACHES</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {g.trainers.map((t) => (
          <article key={t.name} className="overflow-hidden rounded-lg bg-surface">
            <SafeImage src={t.image} alt={`${t.name}, ${t.role}`} className="h-80 w-full object-cover object-top" />
            <div className="p-6">
              <h3 className="font-display text-3xl">{t.name}</h3>
              <p className="text-sm font-semibold text-primary">{t.role}</p>
              <p className="mt-2 text-sm text-muted">{t.specialty}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs tracking-wider text-white/70 uppercase">{t.experience} Experience</span>
                <a href={t.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${t.name} on Instagram`} className="text-white/80 hover:text-primary">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
