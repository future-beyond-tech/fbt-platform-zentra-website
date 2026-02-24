"use client";

import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const owaspRows = [
  { risk: "Injection", mitigation: "Parameterized queries" },
  { risk: "Broken Authentication", mitigation: "PKCE + refresh token rotation" },
  { risk: "XSS", mitigation: "CSP + encoding" },
  { risk: "CSRF", mitigation: "SameSite + anti-forgery" },
  { risk: "Replay", mitigation: "Single-use auth codes" },
];

export function WhitepaperOwaspMitigationTable() {
  return (
    <section
      id="owasp-mitigation"
      aria-labelledby="owasp-mitigation-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="owasp-mitigation-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          OWASP Mitigation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          How Zentra addresses common OWASP Top 10 risks in the identity layer.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="w-[45%] font-semibold text-foreground">
                    OWASP Risk
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Mitigation
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {owaspRows.map((row) => (
                  <TableRow key={row.risk} className="border-border">
                    <TableCell className="font-medium">{row.risk}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.mitigation}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
