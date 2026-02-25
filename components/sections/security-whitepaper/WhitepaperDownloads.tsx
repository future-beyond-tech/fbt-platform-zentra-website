"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { whitepaperVersions } from "@/content/whitepaper";
import { cn } from "@/lib/utils";

export function WhitepaperDownloads() {
  return (
    <section
      id="download-whitepaper"
      aria-labelledby="whitepaper-downloads-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="whitepaper-downloads-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Download Whitepapers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mt-4 text-center text-muted-foreground"
        >
          Both versions are available for evaluation. v1.1 is the current evidence-based release.
        </motion.p>

        <ul className="mt-10 space-y-6" role="list">
          {whitepaperVersions.map((wp, i) => (
            <motion.li
              key={wp.version}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "rounded-xl border bg-card p-5 sm:p-6",
                wp.latest ? "border-primary/40" : "border-border"
              )}
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" aria-hidden />
                <span className="font-medium text-foreground">{wp.label}</span>
                <span className="text-sm text-muted-foreground">({wp.date})</span>
                {wp.latest && (
                  <Badge variant="default" className="rounded-md text-xs">
                    Latest
                  </Badge>
                )}
                {!wp.latest && (
                  <Badge variant="outline" className="rounded-md text-xs text-muted-foreground">
                    Archived
                  </Badge>
                )}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={wp.path}
                  download
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                    wp.latest
                      ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                  aria-label={`Download ${wp.label} (PDF)`}
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download PDF
                </a>
              </div>
              {"sha256Placeholder" in wp && wp.sha256Placeholder && (
                <p className="mt-3 text-xs text-muted-foreground font-mono">
                  SHA256: {wp.sha256Placeholder}
                </p>
              )}
            </motion.li>
          ))}
        </ul>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          For enterprise procurement packages or security questionnaires,{" "}
          <a href="/#contact" className="text-foreground underline hover:no-underline">
            contact us
          </a>
          .
        </p>
      </div>
    </section>
  );
}
