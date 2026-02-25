"use client";

import { motion } from "framer-motion";
import { comparisonData, comparisonSection } from "@/content/site";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const headers = ["Feature", "Auth0", "Okta", "Zentra"] as const;

/**
 * Comparison section: card layout on mobile (stacked), table on md+.
 * Touch-friendly cards with min tap area; table for desktop.
 */
export function Comparison() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-title"
      className="border-b border-border/50 bg-muted/20 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="comparison-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl"
        >
          {comparisonSection.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:mt-4 md:text-base"
        >
          {comparisonSection.subtitle}
        </motion.p>

        {/* Mobile: card layout */}
        <div className="mt-8 md:hidden space-y-4">
          {comparisonData.map((row, i) => (
            <motion.article
              key={row.feature}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card p-4"
              aria-label={`${row.feature}: Auth0 ${row.auth0}, Okta ${row.okta}, Zentra ${row.zentra}`}
            >
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <dt className="col-span-2 font-medium text-foreground">{row.feature}</dt>
                <dt className="text-muted-foreground">Auth0</dt>
                <dd className="text-foreground">{row.auth0}</dd>
                <dt className="text-muted-foreground">Okta</dt>
                <dd className="text-foreground">{row.okta}</dd>
                <dt className="text-muted-foreground">Zentra</dt>
                <dd className="font-medium text-primary">{row.zentra}</dd>
              </dl>
            </motion.article>
          ))}
        </div>

        {/* Tablet/Desktop: table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 hidden md:block overflow-hidden rounded-xl border border-border bg-card"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-border bg-muted/50 hover:bg-muted/50">
                {headers.map((h, i) => (
                  <TableHead
                    key={h}
                    className={cn(
                      "px-4 py-3 font-medium text-foreground",
                      i === 0 && "w-[40%]",
                      i === 3 && "bg-primary/10 text-primary"
                    )}
                  >
                    {h}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow key={row.feature} className="border-border/70">
                  <TableCell className="px-4 py-3 font-medium text-foreground">
                    {row.feature}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-muted-foreground">{row.auth0}</TableCell>
                  <TableCell className="px-4 py-3 text-muted-foreground">{row.okta}</TableCell>
                  <TableCell className="px-4 py-3 font-medium text-primary">{row.zentra}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
}
