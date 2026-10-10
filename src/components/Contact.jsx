import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { gymConfig as g } from "../config/gymConfig.js";

export default function Contact() {
  const waLink = `https://wa.me/${g.whatsapp}?text=${encodeURIComponent(g.whatsappMessage)}`;
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
      <p className="text-sm font-semibold tracking-[0.3em] text-primary">CONTACT</p>
      <h2 className="mt-2 font-display text-5xl md:text-6xl">READY TO START?</h2>
      <p className="mt-3 text-lg text-white/80">Book your free trial session today.</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-md bg-primary py-4 font-semibold transition hover:brightness-110">
            <MessageCircle size={20} /> BOOK YOUR FREE TRIAL SESSION
          </a>
          <ul className="space-y-5 text-white/85">
            <li className="flex gap-4"><MapPin className="shrink-0 text-primary" size={22} />{g.address}</li>
            <li className="flex gap-4"><Phone className="shrink-0 text-primary" size={22} /><a href={`tel:${g.phone.replace(/\s/g, "")}`} className="hover:text-primary">{g.phone}</a></li>
            <li className="flex gap-4"><Mail className="shrink-0 text-primary" size={22} /><a href={`mailto:${g.email}`} className="hover:text-primary">{g.email}</a></li>
          </ul>
        </div>

        <iframe
          title={`${g.gymName} location on Google Maps`}
          src={g.mapEmbedUrl}
          loading="lazy"
          className="h-80 w-full rounded-lg border-0 lg:h-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
