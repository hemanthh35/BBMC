"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { heroSlides } from "@/content/home";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";
import { useAutoplay } from "./useAutoplay";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;

  const go = useCallback((i: number) => setIndex((i + total) % total), [total]);
  const { paused, handlers } = useAutoplay(index, () => setIndex((i) => (i + 1) % total), 5000);

  const slide = heroSlides[index];

  return (
    <section
      className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink pt-18 text-white"
      aria-roledescription="carousel"
      aria-label="BBMC services"
      {...handlers}
    >
      {heroSlides.map((s, i) => (
        <Image
          quality={90}
          key={s.image}
          src={s.image}
          alt=""
          fill
          priority={i === 0}
          loading="eager"
          fetchPriority={i === 0 ? "high" : "low"}
          sizes="100vw"
          className={`-z-20 object-cover transition-opacity duration-[1000ms] ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-ink/65" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24">
        <h1 className="mb-6 max-w-3xl text-sm font-semibold uppercase tracking-[0.18em] text-brand-200 animate-fade-up">
          Architects, Builders & Vaasthu Consultants in Hyderabad & Telangana
        </h1>

        <div aria-live={paused ? "polite" : "off"} className="min-h-[200px] sm:min-h-[180px]">
          <p key={`t-${index}`} className="max-w-3xl text-4xl font-bold leading-[1.1] font-display sm:text-5xl lg:text-6xl animate-fade-up">
            {slide.title}
          </p>
          <p key={`s-${index}`} className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            {slide.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-row">
          <a href={`tel:${site.phones[0].tel}`} className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-700 px-7 font-semibold text-white transition-colors duration-200 hover:bg-brand-800">
            <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
          </a>
          <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-ink sm:px-7 sm:text-base">
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="sm:hidden">Consultation</span>
            <span className="hidden sm:inline">Get a Consultation</span>
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-ink sm:px-7 sm:text-base">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:bg-white hover:text-ink">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center" role="group" aria-label="Choose slide">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className="group flex h-8 items-center px-1"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand-500" : "w-3 bg-white/40 group-hover:bg-white/70"}`} />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:bg-white hover:text-ink">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
