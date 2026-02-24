"use client";

import { motion } from "framer-motion";
import { architectureOverview } from "@/content/site";
import { cn } from "@/lib/utils";

export function ArchitectureOverview() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="architecture-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {architectureOverview.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          {architectureOverview.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-wrap items-stretch justify-center gap-2 sm:gap-4"
          role="img"
          aria-label="Architecture flow from Client to Data"
        >
          {architectureOverview.flow.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-4">
              <div
                className={cn(
                  "rounded-xl border bg-card px-4 py-3 text-center min-w-[100px] sm:min-w-[120px]",
                  step.label === "Zentra"
                    ? "border-primary/50 bg-primary/10"
                    : "border-border"
                )}
              >
                <span className="block font-medium text-foreground">{step.label}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{step.desc}</span>
              </div>
              {i < architectureOverview.flow.length - 1 && (
                <span className="text-muted-foreground/60 text-xl" aria-hidden>→</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-12 max-w-2xl space-y-2 text-sm text-muted-foreground"
          role="list"
        >
          {architectureOverview.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary" aria-hidden>•</span>
              {bullet}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
