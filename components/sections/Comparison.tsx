"use client";

import { motion } from "framer-motion";
import { comparisonData } from "@/content/site";
import { cn } from "@/lib/utils";

const headers = ["Feature", "Auth0", "Okta", "Zentra"] as const;

export function Comparison() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="comparison-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Why Not Auth0 / Okta?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          75–95% cost savings at scale. No MAU pricing. Own your identity layer. Increase IP valuation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 overflow-hidden rounded-xl border border-border bg-card"
        >
          <div className="overflow-x-auto">
            <table
              className="w-full min-w-[400px] text-left text-sm"
              role="table"
              aria-label="Comparison of Auth0, Okta, and Zentra"
            >
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {headers.map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={cn(
                        "px-4 py-3 font-medium text-foreground",
                        i === 0 && "w-[40%]",
                        i === 3 && "bg-primary/10 text-primary"
                      )}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border/70 last:border-0"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.auth0}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.okta}</td>
                    <td className="px-4 py-3 font-medium text-primary">{row.zentra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
