"use client";

import { motion } from "framer-motion";
import { whatZentraSolves } from "@/content/site";
import { cn } from "@/lib/utils";

export function WhatZentraSolves() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="solutions-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {whatZentraSolves.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          {whatZentraSolves.intro}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl space-y-2"
          role="list"
        >
          {whatZentraSolves.solutions.map((text, i) => (
            <li
              key={i}
              className="flex gap-3 text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {text}
            </li>
          ))}
        </motion.ul>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatZentraSolves.highlights.map(({ term, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
              className="rounded-lg border border-border bg-card/50 p-4"
            >
              <dt className="font-medium text-foreground">{term}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{desc}</dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
