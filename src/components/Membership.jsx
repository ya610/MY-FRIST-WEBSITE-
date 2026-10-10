import { Check } from "lucide-react";
import { gymConfig as g } from "../config/gymConfig.js";

export default function Membership() {
  const message = encodeURIComponent(`Hi, I want to join the membership plan.`);
  return (
    <section id="membership" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center text-sm font-semibold tracking-[0.3em] text-primary">MEMBERSHIP</p>
        <h2 className="mt-2 text-center font-display text-5xl md:text-6xl">CHOOSE YOUR PLAN</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {g.membership.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg p-8 ${plan.popular ? "bg-base ring-2 ring-primary" : "bg-base"}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold tracking-wider">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-3xl">{plan.name}</h3>
              <p className="mt-4">
                <span className="font-display text-5xl">{plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${g.whatsapp}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-md py-3 text-center font-semibold transition hover:brightness-110 ${plan.popular ? "bg-primary" : "border border-white/30"}`}
              >
                JOIN NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
