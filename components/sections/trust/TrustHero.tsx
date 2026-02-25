"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TrustHero() {
  return (
    <section
      id="trust-hero"
      aria-labelledby="trust-hero-heading"
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background via-background to-muted/20 pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(120,120,120,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Shield className="h-3.5 w-3.5" aria-hidden />
              Trust Center
            </span>
          </div>
          <h1
            id="trust-hero-heading"
            className={cn(
              "text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl",
              "leading-[1.2]"
            )}
          >
            Security, Governance & Transparency
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Evidence-based security overview, controls, governance, and vulnerability disclosure for enterprise evaluation.
          </p>
          <p className="text-sm text-muted-foreground">
            <Link href="/security-whitepaper" className="text-foreground underline hover:no-underline">
              Security Whitepaper v1.1
            </Link>
            {" "}contains STRIDE threat model, RFC compliance evidence, and risk transparency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
