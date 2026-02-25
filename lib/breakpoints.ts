/**
 * Central breakpoint values for responsive design.
 * Use with Tailwind: sm:, md:, lg:, xl:, 2xl:
 * Use with useMediaQuery: (min-width: ${breakpoints.md})
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

/** Minimum touch target size (Apple HIG). */
export const TOUCH_TARGET_MIN = 44;
