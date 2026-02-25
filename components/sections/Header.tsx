"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useFbtTransition } from "@/contexts/fbt-transition";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#security-highlights", label: "Security" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "/trust", label: "Trust Center" },
  { href: "/security-whitepaper", label: "Whitepaper" },
  { href: "/#contact", label: "Contact" },
] as const;

const linkClass =
  "text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md touch-manipulation active:opacity-80";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { goToFbt } = useFbtTransition();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isDesktop) setMobileMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    firstLinkRef.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, [mobileMenuOpen]);

  function handleFbtClick(e: React.MouseEvent) {
    e.preventDefault();
    goToFbt();
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md safe-area-inset-top"
      role="banner"
    >
      <div className="mx-auto flex h-14 min-h-[44px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 safe-area-x">
        <div className="flex items-center -ml-2 pl-2 min-h-[44px] md:min-h-0">
          <Link
            href="/"
            className={cn(
              "text-base font-semibold tracking-tight text-foreground md:text-lg",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md touch-manipulation"
            )}
            aria-label="Zentra home"
          >
            {siteConfig.name}
          </Link>
          <span className="ml-1.5 text-muted-foreground font-normal">
            by{" "}
            <button
              type="button"
              onClick={handleFbtClick}
              className="text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded touch-manipulation active:opacity-80"
              aria-label={`Go to ${siteConfig.companyFull} (opens FBT website)`}
            >
              {siteConfig.company}
            </button>
          </span>
        </div>

        {/* Desktop: inline nav */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex md:items-center md:gap-1 lg:gap-4"
        >
          {navLinks.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(linkClass, "min-h-[44px] flex items-center px-3 text-sm")}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={cn(linkClass, "min-h-[44px] flex items-center px-3 text-sm")}
              >
                {item.label}
              </a>
            )
          )}
          <Button asChild size="sm" className="rounded-lg ml-1">
            <a href="/#contact">Request Architecture Review</a>
          </Button>
        </nav>

        {/* Mobile: hamburger */}
        <div className="flex items-center md:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 touch-manipulation active:scale-[0.98]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile: overlay + drawer */}
      <AnimatePresence>
        {mobileMenuOpen && !isDesktop && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              aria-hidden
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm border-l border-border bg-background p-6 pt-24 safe-area-inset-top safe-area-inset-right md:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map((item, i) => (
                  <li key={item.href}>
                    {item.href.startsWith("/") ? (
                      <Link
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          linkClass,
                          "flex items-center min-h-[44px] px-4 py-3 text-base rounded-lg"
                        )}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          linkClass,
                          "flex items-center min-h-[44px] px-4 py-3 text-base rounded-lg"
                        )}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
                <li className="mt-4 pt-4 border-t border-border">
                  <Button asChild size="lg" className="w-full rounded-lg">
                    <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                      Request Architecture Review
                    </a>
                  </Button>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
