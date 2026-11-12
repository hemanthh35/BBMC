"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Lightbox from "./Lightbox";
import { interiors, portfolioIntro, projects } from "@/content/home";

type Tab = "projects" | "interiors";
const PER_PAGE = 6;

export default function Portfolio({ showAll = false }: { showAll?: boolean }) {
  const [tab, setTab] = useState<Tab>("projects");
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const items = tab === "projects" ? projects : interiors;
  const pages = Math.ceil(items.length / PER_PAGE);
  const visible = showAll ? items : items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const intro = portfolioIntro[tab];
  const from = page * PER_PAGE + 1;
  const to = Math.min(from + PER_PAGE - 1, items.length);

  const switchTab = (t: Tab) => {
    setTab(t);
    setPage(0);
  };

  return (
    <div>
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end" data-reveal>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{portfolioIntro.eyebrow}</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{intro.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-60">{intro.text}</p>
        </div>
        <div role="tablist" aria-label="Portfolio category" className="inline-flex shrink-0 rounded-full border border-line p-1">
          {(["projects", "interiors"] as Tab[]).map((t) => (
            <button
              key={t}
              role="tab"
              type="button"
              aria-selected={tab === t}
              aria-controls="portfolio-panel"
              onClick={() => switchTab(t)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                tab === t ? "bg-ink text-white" : "text-ink-60 hover:text-ink"
              }`}
            >
              {portfolioIntro[t].title}
            </button>
          ))}
        </div>
      </div>

      <ul id="portfolio-panel" role="tabpanel" className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <li key={item.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <figure className="zoom group">
              <button
                type="button"
                onClick={() => setOpen(items.indexOf(item))}
                aria-label={`View ${item.title} full screen`}
                className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-lg bg-mist"
              >
                <Image quality={90} src={item.image} alt={item.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25" aria-hidden="true">
                  <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/95 text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Expand className="h-5 w-5" />
                  </span>
                </span>
              </button>
              <figcaption className="mt-4 flex items-baseline justify-between gap-3 border-b border-line pb-3">
                <span className="font-display font-semibold text-ink">{item.title}</span>
                <span className="shrink-0 text-xs uppercase tracking-wider text-ink-40">{item.kind}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {open !== null && <Lightbox items={items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}

      {!showAll && pages > 1 && (
        <div className="mt-10 flex items-center justify-between gap-4">
          <p className="text-sm text-ink-60" aria-live="polite">
            Showing {from}-{to} of {items.length} {tab === "projects" ? "projects" : "designs"}
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={() => setPage((p) => (p - 1 + pages) % pages)} aria-label="Previous page" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => setPage((p) => (p + 1) % pages)} aria-label="Next page" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
