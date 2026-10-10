import { gymConfig as g } from "../config/gymConfig.js";
import SafeImage from "./SafeImage.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden pt-24">
      <SafeImage src={g.hero.image} alt={`${g.gymName} training floor`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-base/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:pb-24">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-primary">{g.tagline}</p>
        <h1 className="font-display text-6xl leading-none sm:text-7xl md:text-8xl lg:text-9xl">
          {g.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">{g.hero.subtitle}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="rounded-md bg-primary px-8 py-4 text-center font-semibold transition hover:-translate-y-0.5 hover:brightness-110">
            {g.hero.primaryCta}
          </a>
          <a href="#programs" className="rounded-md border border-white/30 px-8 py-4 text-center font-semibold transition hover:border-primary hover:text-primary">
            {g.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
