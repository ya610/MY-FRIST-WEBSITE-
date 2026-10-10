import { MessageCircle } from "lucide-react";
import { gymConfig as g } from "../config/gymConfig.js";

export default function WhatsAppButton() {
  const href = `https://wa.me/${g.whatsapp}?text=${encodeURIComponent(g.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
}
