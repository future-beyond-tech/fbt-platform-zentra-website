"use client";

import { motion } from "framer-motion";
import { securityCommitment } from "@/content/site";
import { cn } from "@/lib/utils";

export function SecurityCommitment() {
  return (
    <section
      id="security"
      aria-labelledby="security-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="security-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Security Commitment
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3"
          role="list"
        >
          {securityCommitment.map((item, i) => (
            <li key={item}>
              <span
                className={cn(
                  "inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                )}
              >
                {item}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
