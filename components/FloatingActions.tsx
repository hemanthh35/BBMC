import { Phone } from "lucide-react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop: floating WhatsApp button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BBMC on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 md:flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      {/* Mobile: sticky call + WhatsApp bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white md:hidden">
        <a href={`tel:${site.phones[0].tel}`} className="flex min-h-14 items-center justify-center gap-2 font-semibold text-ink">
          <Phone className="h-5 w-5 text-brand-600" aria-hidden="true" /> Call
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 bg-[#25D366] font-semibold text-white">
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
      </div>
    </>
  );
}
