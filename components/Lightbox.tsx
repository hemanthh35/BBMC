"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Item = { slug: string; title: string; image: string; alt: string; kind: string };

/** Full-screen photo viewer: arrows, swipe, keyboard (← → Esc), focus kept inside while open. */
export default function Lightbox({ items, index, onChange, onClose }: { items: Item[]; index: number; onChange: (i: number) => void; onClose: () => void }) {
  const total = items.length;
  const item = items[index];
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose]);

  // Preload neighbours so swiping feels instant
  const neighbours = [items[(index + 1) % total], items[(index - 1 + total) % total]];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, photo ${index + 1} of ${total}`}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 text-white animate-fade-up"
      style={{ animationDuration: "250ms" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
        <p className="text-sm text-white/70" aria-live="polite">{index + 1} / {total}</p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close photo viewer" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex-1 select-none"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
          touchX.current = null;
        }}
      >
        <Image key={item.image} quality={90} src={item.image} alt={item.alt} fill sizes="100vw" className="object-contain p-2 sm:p-8 animate-fade-up" style={{ animationDuration: "300ms" }} priority />
        {neighbours.map((n) => (
          <Image key={`pre-${n.image}`} quality={90} src={n.image} alt="" fill sizes="100vw" className="pointer-events-none invisible" aria-hidden="true" />
        ))}
        <button type="button" onClick={prev} aria-label="Previous photo" className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/25 sm:left-6">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" onClick={next} aria-label="Next photo" className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/25 sm:right-6">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 text-center sm:px-6 sm:pb-6">
        <p className="font-display text-lg font-semibold">{item.title}</p>
        <p className="mt-1 text-xs uppercase tracking-wider text-white/50">{item.kind}</p>
      </div>
    </div>
  );
}
