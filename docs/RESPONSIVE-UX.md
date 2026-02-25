# Responsive UX — Implementation Notes

## Breakpoints (Tailwind / useMediaQuery)

- **sm**: 640px — Large phones
- **md**: 768px — Tablets portrait
- **lg**: 1024px — Tablets landscape / small laptops
- **xl**: 1280px — Desktops
- **2xl**: 1536px — Large screens

Use `min-width` (mobile-first). See `lib/breakpoints.ts` and `hooks/use-media-query.ts`.

## Touch Targets

- Minimum **44×44px** for interactive elements (buttons, links, nav items).
- Button/Input base sizes use `min-h-[44px]` or `h-11` (44px) on mobile; `md:` overrides reduce to `h-10` where appropriate.
- Nav links in header use `min-h-[44px]` and `min-w-[44px]` for tap area.

## Global

- **overflow-x: hidden** and **max-width: 100vw** on `html` and `body` (globals.css).
- **Safe areas**: `.safe-area-inset-top`, `.safe-area-inset-bottom`, `.safe-area-x`, `.safe-area-y` for notched devices.

## Components Updated

- **Button**: `touch-manipulation`, `active:scale-[0.98]`, responsive sizes with min 44px on mobile.
- **Input**: `h-12 text-base` on base (avoid iOS zoom), `md:h-10 md:text-sm`; `touch-manipulation`.
- **Textarea**: `px-4 py-3 text-base` on base, `md:px-3 md:py-2 md:text-sm`.
- **Header**: Hamburger + slide-over nav &lt; 768px; inline nav ≥ 768px. Focus trap and scroll lock when menu open.
- **Comparison**: Card layout on mobile, table on `md+`.
- **Hero / CTA / ContactForm**: Responsive padding (`py-12 sm:py-16 md:py-20`), typography, and full-width buttons on mobile.

## Forms

- Use **inputMode** where helpful: `email`, `tel`, `numeric`, `text`.
- ContactForm email field uses `inputMode="email"` and `autoComplete="email"`.

## Testing Checklist

- 320px (iPhone SE)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- Touch targets ≥ 44px
- No horizontal scroll
- Base text 16px+ where possible (Input uses text-base on mobile)
- Nav works with tap (no hover-only behavior)
