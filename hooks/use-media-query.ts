"use client";

import { useState, useEffect } from "react";

/**
 * Breakpoints aligned with Tailwind (min-width).
 * Use for JS-based responsive behavior when CSS alone is insufficient.
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

/**
 * Returns true when the viewport matches the given media query.
 * SSR-safe: returns false on server and initial client render, then updates after mount.
 * Prefer min-width queries for mobile-first logic.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 767px)');
 * const isTabletUp = useMediaQuery('(min-width: 768px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
