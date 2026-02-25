"use client";

import { siteConfig } from "@/content/site";
import { useFbtTransition } from "@/contexts/fbt-transition";

export function Footer() {
  const year = new Date().getFullYear();
  const { goToFbt } = useFbtTransition();
  return (
    <footer
      className="border-t border-border/50 bg-background py-10"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <span className="font-semibold text-foreground">{siteConfig.name}</span>
            <span className="ml-1.5 text-muted-foreground">
              by{" "}
              <button
                type="button"
                onClick={goToFbt}
                className="text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded touch-manipulation"
                aria-label={`Go to ${siteConfig.companyFull} website`}
              >
                {siteConfig.companyFull}
              </button>
            </span>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground sm:justify-end">
            <a href="/#security-highlights" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Security
            </a>
            <a href="/#use-cases" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Use Cases
            </a>
            <a href="/trust" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Trust Center
            </a>
            <a href="/security-whitepaper" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Whitepaper
            </a>
            <a href="/#contact" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground sm:text-left">
          © {year} {siteConfig.companyFull}. {siteConfig.name} — {siteConfig.tagline}.
        </p>
      </div>
    </footer>
  );
}
