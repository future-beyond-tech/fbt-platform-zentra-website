"use client";

import { motion } from "framer-motion";
import { securityHighlights } from "@/content/site";
import { cn } from "@/lib/utils";

export function SecurityHighlights() {
  return (
    <section
      id="security-highlights"
      aria-labelledby="security-highlights-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="security-highlights-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {securityHighlights.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          {securityHighlights.subtitle}
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-1 md:grid-cols-2"
          role="list"
        >
          {securityHighlights.items.map((item, i) => (
            <li
              key={item}
              className={cn(
                "flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
              )}
            >
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
