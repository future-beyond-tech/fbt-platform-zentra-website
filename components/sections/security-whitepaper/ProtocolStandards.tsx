"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const standards = [
  { name: "OAuth 2.0", spec: "RFC 6749" },
  { name: "OpenID Connect 1.0", spec: "OIDC Core" },
  { name: "PKCE", spec: "RFC 7636" },
  { name: "JWT", spec: "RFC 7519" },
  { name: "JWK", spec: "RFC 7517" },
  { name: "Token Introspection", spec: "RFC 7662" },
];

export function WhitepaperProtocolStandards() {
  return (
    <section
      id="protocol-standards"
      aria-labelledby="protocol-standards-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="protocol-standards-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Protocol & Standards
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Enterprise-grade OAuth 2.0 & OpenID Connect without vendor lock-in.
        </motion.p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
            >
              <Card className="rounded-2xl border-border bg-card shadow-sm">
                <CardContent className="flex flex-col items-start justify-between gap-2 p-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-medium text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.spec}</p>
                  </div>
                  <Badge variant="secondary" className="shrink-0 rounded-md border-border text-xs font-medium">
                    RFC Compliant
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
