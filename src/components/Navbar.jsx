import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { gymConfig as g } from "../config/gymConfig.js";
import SafeImage from "./SafeImage.jsx";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-base">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Main">
        <a href="#top" className="flex items-center gap-3">
          <SafeImage src={g.logo} alt={`${g.gymName} logo`} className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl tracking-wide">{g.gymName}</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-white/80 transition hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={g.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hidden p-2 text-white/80 hover:text-primary sm:block">
            <Instagram size={20} />
          </a>
          <a href={g.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hidden p-2 text-white/80 hover:text-primary sm:block">
            <Facebook size={20} />
          </a>
          <a href="#contact" className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold transition hover:brightness-110 lg:block">
            JOIN NOW
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="p-2 lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-base px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 font-display text-2xl tracking-wide">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-6 block rounded-md bg-primary py-3 text-center font-semibold">
            JOIN NOW
          </a>
        </div>
      )}
    </header>
  );
}
