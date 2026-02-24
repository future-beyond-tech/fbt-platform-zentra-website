"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const complianceItems = [
  {
    name: "SOC 2",
    description: "Access controls, audit logging, encryption in transit, and change management alignment.",
  },
  {
    name: "GDPR",
    description: "Data minimization, purpose limitation, and data sovereignty via self-hosted deployment.",
  },
  {
    name: "HIPAA",
    description: "Technical safeguards for ePHI: access controls, audit trails, and encryption considerations.",
  },
  {
    name: "ISO 27001",
    description: "Information security management alignment: risk treatment, policies, and controls.",
  },
  {
    name: "PCI DSS",
    description: "Strong access control and identification for systems that may touch cardholder data.",
  },
  {
    name: "CCPA",
    description: "Consumer rights and data handling practices supported by audit and access controls.",
  },
];

export function WhitepaperComplianceMapping() {
  return (
    <section
      id="compliance-mapping"
      aria-labelledby="compliance-mapping-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="compliance-mapping-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Compliance Mapping
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          How Zentra aligns with major enterprise and regulatory frameworks.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
            >
              <Card className="h-full rounded-2xl border-border bg-card shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold">{c.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
