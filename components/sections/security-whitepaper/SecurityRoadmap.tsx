"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const roadmap = [
  {
    phase: "Near Term",
    badge: "Current focus",
    items: [
      "Rate limiting",
      "Token encryption at rest",
      "Health endpoints",
    ],
  },
  {
    phase: "Medium Term",
    badge: null,
    items: [
      "Distributed tracing",
      "Automated key rotation",
      "Risk-based authentication",
    ],
  },
  {
    phase: "Long Term",
    badge: null,
    items: [
      "Federation (SAML)",
      "Adaptive authentication",
      "Compliance automation",
    ],
  },
];

export function WhitepaperSecurityRoadmap() {
  return (
    <section
      id="security-roadmap"
      aria-labelledby="security-roadmap-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="security-roadmap-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Security Roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Planned security and compliance enhancements.
        </motion.p>
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:gap-6">
          {roadmap.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="flex-1"
            >
              <Card className="h-full rounded-2xl border-border bg-card shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">{phase.phase}</CardTitle>
                  {phase.badge && (
                    <Badge variant="secondary" className="rounded-md text-xs">
                      {phase.badge}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
