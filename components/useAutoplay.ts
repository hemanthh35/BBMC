"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Advances a slider every `delay` ms.
 * - Pauses only while the pointer is over it (or keyboard focus is inside it).
 * - Restarts the timer after any manual change, so clicking a dot/arrow never stops autoplay.
 * - Keeps running with prefers-reduced-motion; components just drop the motion effects then.
 */
export function useAutoplay(index: number, advance: () => void, delay = 5000) {
  const [hovered, setHovered] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [hidden, setHidden] = useState(false);
  const advanceRef = useRef(advance);
  advanceRef.current = advance;

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const paused = hovered || keyboardFocus || hidden;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => advanceRef.current(), delay);
    return () => clearTimeout(t);
  }, [index, paused, delay]);

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      // Only pause for keyboard users; a mouse click on a dot shouldn't freeze the slider.
      if ((e.target as HTMLElement).matches?.(":focus-visible")) setKeyboardFocus(true);
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) setKeyboardFocus(false);
    },
  };

  return { paused, handlers };
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
