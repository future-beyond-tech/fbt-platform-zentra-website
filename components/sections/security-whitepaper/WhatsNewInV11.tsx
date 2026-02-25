"use client";

import { motion } from "framer-motion";
import { whatsNewInV11 } from "@/content/whitepaper";
import { cn } from "@/lib/utils";

export function WhatsNewInV11() {
  return (
    <section
      id="whats-new-v11"
      aria-labelledby="whats-new-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="whats-new-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {whatsNewInV11.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          {whatsNewInV11.intro}
        </motion.p>
        <ul className="mt-12 space-y-6" role="list">
          {whatsNewInV11.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
