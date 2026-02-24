"use client";

import { motion } from "framer-motion";
import { trustSignals } from "@/content/site";

export function TrustSignals() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="trust-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Trust Signals
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2"
          role="list"
        >
          {trustSignals.map((signal, i) => (
            <li key={signal} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
              {signal}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
