"use client";

import { motion } from "framer-motion";
import { problemContent } from "@/content/site";

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="problem-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {problemContent.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
        >
          {problemContent.subtitle}
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-sm font-medium uppercase tracking-wider text-destructive/90">
              Without Zentra
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {problemContent.without.map((text, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive/80" aria-hidden="true">×</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-xl border border-primary/30 bg-card p-6"
          >
            <h3 className="text-sm font-medium uppercase tracking-wider text-primary">
              With Zentra
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {problemContent.withZentra.map((text, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="text-primary" aria-hidden="true">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
