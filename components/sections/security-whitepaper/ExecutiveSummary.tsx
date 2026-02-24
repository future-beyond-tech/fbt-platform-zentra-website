"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Key, Building2, FileCheck, Layers } from "lucide-react";

const summaryCards = [
  {
    title: "Zero Trust Architecture",
    description:
      "Never trust, always verify. Every request is validated; no implicit trust at the perimeter.",
    icon: Shield,
  },
  {
    title: "Token-Based Authentication",
    description:
      "OAuth 2.0 and OpenID Connect with JWT access tokens, refresh token rotation, and PKCE for public clients.",
    icon: Key,
  },
  {
    title: "Vendor Independence",
    description:
      "Self-hosted identity layer. No lock-in; full control over data, keys, and deployment.",
    icon: Building2,
  },
  {
    title: "Compliance Evidence",
    description:
      "Audit trails, encryption in transit, and access controls support your path to SOC 2, GDPR, HIPAA, or ISO 27001. We do not claim certification; controls are documented for your audit.",
    icon: FileCheck,
  },
  {
    title: "Defense in Depth",
    description:
      "Layered security: CSP, parameterized queries, SameSite cookies, short-lived tokens, and OWASP mitigations.",
    icon: Layers,
  },
];

export function WhitepaperExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      aria-labelledby="executive-summary-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="executive-summary-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Executive Summary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          You build your product. Zentra secures your identity layer.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {summaryCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full rounded-2xl border-border bg-card shadow-sm">
                <CardHeader>
                  <card.icon className="h-8 w-8 text-muted-foreground" aria-hidden />
                  <CardTitle className="text-base font-semibold">{card.title}</CardTitle>
                  <CardDescription className="text-sm">{card.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
