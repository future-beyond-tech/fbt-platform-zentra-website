"use client";

import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
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
              by {siteConfig.companyFull}
            </span>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-6 text-sm text-muted-foreground">
            <a href="#solutions" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Solutions
            </a>
            <a href="#use-cases" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Use Cases
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground sm:text-left">
          © {year} {siteConfig.companyFull}. {siteConfig.name} — Enterprise Identity Platform.
        </p>
      </div>
    </footer>
  );
}
