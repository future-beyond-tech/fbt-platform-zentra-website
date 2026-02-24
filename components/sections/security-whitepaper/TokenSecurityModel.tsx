"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  KeyRound,
  Clock,
  RefreshCw,
  Smartphone,
  Server,
  Search,
} from "lucide-react";

const features = [
  {
    title: "RS256 / ES256 Signing",
    description: "Asymmetric signing for JWT access tokens. No shared secrets; public key validation via JWKS.",
    icon: KeyRound,
  },
  {
    title: "Short-Lived Tokens",
    description: "Access tokens under 15 minutes. Reduces exposure window and enforces refresh flow.",
    icon: Clock,
  },
  {
    title: "Refresh Token Rotation",
    description: "Single-use refresh tokens with rotation. Compromise detection and automatic invalidation.",
    icon: RefreshCw,
  },
  {
    title: "Device Isolation",
    description: "Refresh tokens bound to device or session. Prevents token replay across contexts.",
    icon: Smartphone,
  },
  {
    title: "JWKS Endpoint",
    description: "Public key distribution for stateless JWT validation at API gateways and resource servers.",
    icon: Server,
  },
  {
    title: "Introspection Endpoint",
    description: "RFC 7662 token introspection for opaque tokens or centralized validation.",
    icon: Search,
  },
];

export function WhitepaperTokenSecurityModel() {
  return (
    <section
      id="token-security"
      aria-labelledby="token-security-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="token-security-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Token Security Model
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Security controls built into the token lifecycle and validation stack.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
            >
              <Card className="h-full rounded-2xl border-border bg-card shadow-sm">
                <CardHeader className="pb-2">
                  <f.icon className="h-7 w-7 text-muted-foreground" aria-hidden />
                  <CardTitle className="text-base font-semibold">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
