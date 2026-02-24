"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Browser", desc: "User or SPA" },
  { label: "API Gateway", desc: "JWT validated here" },
  { label: "Zentra", desc: "Refresh token, RBAC defined" },
  { label: "Services", desc: "Scope-based access" },
  { label: "Database", desc: "Data layer" },
] as const;

export function ArchitectureViz() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="architecture-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Architecture
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Browser → API Gateway → Zentra → Services → Database. JWT is validated at the gateway; refresh token is used at Zentra; RBAC is defined in Zentra and enforced across services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-wrap items-stretch justify-center gap-2 sm:gap-4"
          role="img"
          aria-label="Architecture flow from Browser to Database"
        >
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-4">
              <div
                className={cn(
                  "rounded-xl border bg-card px-4 py-3 text-center min-w-[100px] sm:min-w-[120px]",
                  step.label === "Zentra"
                    ? "border-primary/50 bg-primary/10"
                    : "border-border"
                )}
              >
                <span className="block font-medium text-foreground">{step.label}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{step.desc}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="text-muted-foreground/60 text-xl" aria-hidden>→</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
