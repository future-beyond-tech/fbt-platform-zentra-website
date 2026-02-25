"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function WhitepaperHero() {
  return (
    <section
      id="whitepaper-hero"
      aria-labelledby="whitepaper-hero-heading"
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background via-background to-muted/20 pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(120,120,120,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={item} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <FileText className="h-3.5 w-3.5" aria-hidden />
              v1.1 (Latest) | February 2026 | Evidence-Based
            </span>
          </motion.div>
          <motion.h1
            id="whitepaper-hero-heading"
            variants={item}
            className={cn(
              "text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl",
              "leading-[1.2]"
            )}
          >
            Zentra Security Whitepaper
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Evidence-Based OAuth2 / OIDC Security Architecture
          </motion.p>
          <motion.p variants={item} className="mx-auto max-w-xl text-sm text-muted-foreground/90">
            STRIDE threat model, RFC compliance evidence, residual risk transparency, governance model, L2.5 maturity.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto rounded-xl">
              <a href="#download-whitepaper">Download Whitepapers</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-xl border-border"
            >
              <a href="/trust">Trust Center</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
