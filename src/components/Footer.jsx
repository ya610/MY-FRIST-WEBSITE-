import { Instagram, Facebook } from "lucide-react";
import { gymConfig as g } from "../config/gymConfig.js";
import SafeImage from "./SafeImage.jsx";

const quickLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <SafeImage src={g.logo} alt={`${g.gymName} logo`} className="h-10 w-10 object-contain" />
            <span className="font-display text-2xl">{g.gymName}</span>
          </div>
          <p className="mt-3 text-sm text-muted">{g.tagline}</p>
          <div className="mt-5 flex gap-4">
            <a href={g.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary"><Instagram size={20} /></a>
            <a href={g.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary"><Facebook size={20} /></a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted">
            {quickLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-muted">
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Contact</h3>
          <p className="mt-4">{g.address}</p>
          <p className="mt-2"><a href={`tel:${g.phone.replace(/\s/g, "")}`} className="hover:text-primary">{g.phone}</a></p>
          <p className="mt-2"><a href={`mailto:${g.email}`} className="hover:text-primary">{g.email}</a></p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {g.gymName}. All Rights Reserved.
      </div>
    </footer>
  );
}
