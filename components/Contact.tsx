import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { socialLinks } from "./Footer";
import MapFacade from "./MapFacade";
import { CallButton, WhatsAppButton } from "./ui";

export default function Contact() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div data-reveal>
        <dl className="divide-y divide-line border-y border-line">
          <div className="flex gap-4 py-5">
            <dt className="flex w-36 shrink-0 items-center gap-3 text-sm font-semibold text-ink"><Phone className="h-4 w-4 text-brand-600" aria-hidden="true" />Phone</dt>
            <dd className="space-y-1 text-ink-60">
              {site.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="link-underline block hover:text-ink">{p.display}</a>
              ))}
            </dd>
          </div>
          <div className="flex gap-4 py-5">
            <dt className="flex w-36 shrink-0 items-center gap-3 text-sm font-semibold text-ink"><Mail className="h-4 w-4 text-brand-600" aria-hidden="true" />Email</dt>
            <dd className="text-ink-60 break-all"><a href={`mailto:${site.email}`} className="link-underline hover:text-ink">{site.email}</a></dd>
          </div>
          <div className="flex gap-4 py-5">
            <dt className="flex w-36 shrink-0 items-center gap-3 text-sm font-semibold text-ink"><Clock className="h-4 w-4 text-brand-600" aria-hidden="true" />Working Hours</dt>
            <dd className="text-ink-60">{site.hours.display}</dd>
          </div>
          <div className="flex gap-4 py-5">
            <dt className="flex w-36 shrink-0 items-start gap-3 text-sm font-semibold text-ink"><MapPin className="mt-0.5 h-4 w-4 text-brand-600" aria-hidden="true" />Address</dt>
            <dd>
              <address className="not-italic leading-relaxed text-ink-60">
                {site.address.lines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-block text-sm font-semibold text-brand-700">Get Directions</a>
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton text={site.whatsappText} className="border-[#25D366] text-ink hover:bg-[#25D366] hover:text-white" />
        </div>
        <p className="mt-3 text-sm text-ink-60">Chat on WhatsApp</p>

        <ul className="mt-8 flex gap-2" aria-label="Social media">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-60 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600">
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
        <MapFacade />
      </div>
    </div>
  );
}
