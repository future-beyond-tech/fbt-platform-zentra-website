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
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background to-background/95 pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,120,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.h1
            id="hero-heading"
            variants={item}
            className={cn(
              "text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl",
              "leading-[1.15]"
            )}
          >
            {heroContent.headline}
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            {heroContent.subheadline}
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="xl" className="w-full sm:w-auto rounded-lg">
              <a href="#contact">{heroContent.ctaPrimary}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full sm:w-auto rounded-lg border-border"
            >
              <a href="#contact">{heroContent.ctaSecondary}</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Architecture diagram: Client → API Gateway → Zentra → Microservices */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 rounded-xl border border-border bg-card/50 p-6 sm:p-8"
          aria-label="Architecture flow: Client to API Gateway to Zentra to Microservices"
        >
          <figcaption className="sr-only">
            Client requests flow to API Gateway, then to Zentra for identity, then to microservices.
          </figcaption>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
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
        "rounded-lg border px-4 py-2.5 text-sm font-medium",
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
