"use client";

import { motion } from "framer-motion";
import { ctaContent, messaging } from "@/content/site";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-lg font-medium text-muted-foreground"
        >
          {messaging.coreSentence}
        </motion.p>
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {ctaContent.headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.07 }}
          className="mx-auto mt-6 max-w-xl space-y-2 text-left text-sm text-muted-foreground"
          role="list"
        >
          {messaging.benefits.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-primary" aria-hidden>✓</span>
              {b}
            </li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="xl" className="w-full sm:w-auto rounded-lg">
            <a href="#contact">{ctaContent.primary}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="w-full sm:w-auto rounded-lg border-border"
          >
            <a href="#contact">{ctaContent.secondary}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
