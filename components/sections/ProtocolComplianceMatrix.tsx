"use client";

import { motion } from "framer-motion";
import { protocolComplianceMatrix } from "@/content/site";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function ProtocolComplianceMatrix() {
  return (
    <section
      id="protocol-compliance"
      aria-labelledby="protocol-compliance-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="protocol-compliance-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Protocol Compliance Matrix
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          RFC-level compliance and what it means in practice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 overflow-hidden rounded-xl border border-border bg-card"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-border bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium text-foreground">RFC</TableHead>
                <TableHead className="font-medium text-foreground">Name</TableHead>
                <TableHead className="font-medium text-foreground">Compliance level</TableHead>
                <TableHead className="font-medium text-foreground">In practice</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {protocolComplianceMatrix.map((row) => (
                <TableRow key={row.rfc} className="border-border/70">
                  <TableCell className="font-mono text-sm text-foreground">{row.rfc}</TableCell>
                  <TableCell className="font-medium text-foreground">{row.name}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "rounded-md px-2 py-0.5 text-xs font-medium",
                        row.level === "Compliant" || row.level === "S256 only"
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {row.level}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{row.inPractice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
}
