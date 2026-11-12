"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/content/site";

/** Loads the Google Map iframe only when asked, keeping the page fast. */
export default function MapFacade() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-mist">
      {show ? (
        <iframe
          src={site.mapsEmbed}
          title="BBMC Location"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setShow(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white transition-transform duration-300 group-hover:scale-110">
            <MapPin className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="font-semibold text-ink">View larger map</span>
          <span className="text-sm text-ink-60">BBMC, Srinagar Colony, Boduppal</span>
        </button>
      )}
    </div>
  );
}
