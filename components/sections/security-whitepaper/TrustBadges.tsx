"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const badges = [
  "Built on .NET 8",
  "Clean Architecture",
  "OWASP Mitigated",
  "Zero Trust Model",
  "Enterprise Deployment Ready",
];

export function WhitepaperTrustBadges() {
  return (
    <section
      id="whitepaper-trust-badges"
      aria-label="Trust signals"
      className="border-b border-border/50 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((label) => (
            <Badge
              key={label}
              variant="outline"
              className="rounded-lg border-border px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {label}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
