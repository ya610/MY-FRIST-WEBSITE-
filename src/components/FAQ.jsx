import { gymConfig as g } from "../config/gymConfig.js";

export default function FAQ() {
  return (
    <section id="faq" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-center text-sm font-semibold tracking-[0.3em] text-primary">FAQ</p>
        <h2 className="mt-2 text-center font-display text-5xl md:text-6xl">QUESTIONS? ANSWERED.</h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {g.faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold focus-visible:outline-primary">
                {item.q}
                <span className="text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
