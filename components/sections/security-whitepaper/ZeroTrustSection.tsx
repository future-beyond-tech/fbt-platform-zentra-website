"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Key, Target, Clock } from "lucide-react";

const pillars = [
  {
    title: "Never Trust, Always Verify",
    description: "Every request is authenticated and authorized. No implicit trust at the network perimeter.",
    icon: ShieldCheck,
  },
  {
    title: "Service-to-Service JWT Validation",
    description: "APIs and microservices validate JWTs via JWKS or introspection. No bypass for internal calls.",
    icon: Key,
  },
  {
    title: "Explicit Scope Enforcement",
    description: "Access is granted only for requested scopes. Principle of least privilege at the token level.",
    icon: Target,
  },
  {
    title: "Continuous Session Validation",
    description: "Short-lived access tokens and refresh rotation ensure sessions are re-validated regularly.",
    icon: Clock,
  },
];

export function WhitepaperZeroTrustSection() {
  return (
    <section
      id="zero-trust"
      aria-labelledby="zero-trust-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="zero-trust-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Zero Trust
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Identity layer designed around zero-trust principles.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full rounded-2xl border-border bg-card shadow-sm">
                <CardContent className="flex gap-4 p-6">
                  <p.icon className="h-8 w-8 shrink-0 text-muted-foreground" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12"
        >
          <Card className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Zero Trust architecture diagram
            </p>
            <p className="mt-1 text-xs text-muted-foreground/80">
              Placeholder for future diagram: Policy Engine → Token Service → Resource Validation
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
