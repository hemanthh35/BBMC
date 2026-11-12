"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/content/home";

/** Accessible testimonial carousel: fade + slide, autoplay (pauses on hover/focus), arrows, dots, swipe. */
export default function Testimonials() {
  const total = testimonials.length;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const go = useCallback(
    (i: number, d: 1 | -1) => {
      setDir(d);
      setIndex((i + total) % total);
    },
    [total],
  );
  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(next, 6000);
    return () => clearTimeout(t);
  }, [paused, reduced, next]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKey}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
      data-reveal
    >
      <div className="relative grid overflow-hidden" aria-live={paused ? "polite" : "off"}>
        {testimonials.map((t, i) => {
          const active = i === index;
          return (
            <figure
              key={t.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={!active}
              className="col-start-1 row-start-1 mx-auto max-w-3xl px-2 text-center transition-all duration-500 ease-[var(--ease-out-soft)]"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "none" : `translateX(${dir * (i < index ? -40 : 40)}px)`,
                visibility: active ? "visible" : "hidden",
              }}
            >
              <div className="flex justify-center gap-1 text-brand-500" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 font-display font-semibold text-brand-700">
                  {t.initials}
                </span>
                <span className="text-left">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-ink-40">{t.source}</span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-center gap-5">
        <button type="button" onClick={prev} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-brand-500 hover:bg-brand-500 hover:text-white">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2" role="group" aria-label="Choose testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Testimonial ${i + 1} from ${t.name}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand-500" : "w-2 bg-line hover:bg-ink-40"}`}
            />
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-brand-500 hover:bg-brand-500 hover:text-white">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
