"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background to-background/95 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-28 safe-area-inset-top"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,120,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 safe-area-x">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-8"
        >
          <motion.h1
            id="hero-heading"
            variants={item}
            className={cn(
              "text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl",
              "leading-[1.2]"
            )}
          >
            {heroContent.headline}
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
          >
            {heroContent.subheadline}
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Button asChild size="xl" className="w-full sm:w-auto rounded-lg touch-manipulation">
              <a href="#contact">{heroContent.ctaPrimary}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full sm:w-auto rounded-lg border-border touch-manipulation"
            >
              <a href="/security-whitepaper">{heroContent.ctaSecondary}</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Architecture diagram: Client → API Gateway → Zentra → Microservices */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 rounded-xl border border-border bg-card/50 p-4 sm:mt-16 sm:p-6 md:p-8"
          aria-label="Architecture flow: Client to API Gateway to Zentra to Microservices"
        >
          <figcaption className="sr-only">
            Client requests flow to API Gateway, then to Zentra for identity, then to microservices.
          </figcaption>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <Box label="Client" />
            <Arrow />
            <Box label="API Gateway" />
            <Arrow />
            <Box label="Zentra" highlight />
            <Arrow />
            <Box label="Microservices" />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

function Box({
  label,
  highlight,
}: { label: string; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg border px-3 py-2 text-xs font-medium sm:px-4 sm:py-2.5 sm:text-sm",
        highlight
          ? "border-primary/50 bg-primary/10 text-foreground"
          : "border-border bg-muted/50 text-muted-foreground"
      )}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <span className="text-muted-foreground/60" aria-hidden="true">
      →
    </span>
  );
}
