"use client";

import { motion } from "framer-motion";
import { roadmapLevels } from "@/content/site";
import { cn } from "@/lib/utils";

export function Roadmap() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="roadmap-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Engineering Maturity Roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Zentra is at L2 (Production Ready) and moving toward L3 (Enterprise Hardened).
        </motion.p>

        <div className="mt-12 space-y-4">
          {roadmapLevels.map((level, i) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "rounded-xl border p-4 sm:p-5",
                level.current
                  ? "border-primary/50 bg-primary/5"
                  : "border-border bg-card/50"
              )}
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <span
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-sm font-medium",
                    level.current
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {level.level} – {level.title}
                </span>
                {level.current && (
                  <span className="text-xs font-medium text-primary">Current</span>
                )}
              </div>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground" role="list">
                {level.features.map((f) => (
                  <li key={f} className="rounded bg-muted/70 px-2 py-1">
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
