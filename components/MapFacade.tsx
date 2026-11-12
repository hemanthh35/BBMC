import { site } from "@/content/site";

/** Google Map of the BBMC office. Native lazy loading keeps it off the critical path. */
export default function MapFacade() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-mist">
      <div className="relative aspect-[16/10]">
        <iframe
          src={site.mapsEmbed}
          title="BBMC Location – Srinagar Colony, Boduppal, Hyderabad"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 border-t border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:text-brand-700"
      >
        <span>View larger map</span>
        <span className="text-ink-40" aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
