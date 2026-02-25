"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TrustSection } from "./TrustSection";
import { trustWhitepapersSection } from "@/content/trust";
import { whitepaperVersions } from "@/content/whitepaper";
import { cn } from "@/lib/utils";

export function TrustWhitepapers() {
  const versions = whitepaperVersions;
  return (
    <TrustSection
      id="trust-whitepapers"
      title={trustWhitepapersSection.title}
      noSubtitle
    >
      <ul className="space-y-4" role="list">
        {versions.map((wp) => (
          <li key={wp.version} className="flex flex-wrap items-center gap-3">
            <Link
              href={wp.path}
              download
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                wp.latest
                  ? "border-primary bg-primary/10 text-foreground hover:bg-primary/20"
                  : "border-border bg-muted/30 text-muted-foreground hover:bg-muted/50"
              )}
            >
              <Download className="h-4 w-4" aria-hidden />
              {wp.label} ({wp.date})
            </Link>
            {wp.latest && (
              <Badge variant="default" className="rounded-md text-xs">
                {trustWhitepapersSection.latestLabel}
              </Badge>
            )}
            {!wp.latest && (
              <Badge variant="outline" className="rounded-md text-xs text-muted-foreground">
                {trustWhitepapersSection.archivedLabel}
              </Badge>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted-foreground">
        Full details and downloads:{" "}
        <Link href="/security-whitepaper" className="text-foreground underline hover:no-underline">
          Security Whitepaper page
        </Link>
        .
      </p>
    </TrustSection>
  );
}
