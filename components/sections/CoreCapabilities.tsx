"use client";

import { motion } from "framer-motion";
import { coreCapabilities } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const blocks = [
  { key: "security", ...coreCapabilities.security },
  { key: "architecture", ...coreCapabilities.architecture },
  { key: "microservices", ...coreCapabilities.microservices },
  { key: "compliance", ...coreCapabilities.compliance },
] as const;

export function CoreCapabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="capabilities-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Core Capabilities
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {blocks.map((block, i) => (
            <motion.div
              key={block.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="h-full border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded bg-primary/15 px-1.5 py-0.5 text-xs font-medium text-primary"
                      )}
                      aria-hidden
                    >
                      {block.key === "security" && "🔐"}
                      {block.key === "architecture" && "🧠"}
                      {block.key === "microservices" && "🌍"}
                      {block.key === "compliance" && "📊"}
                    </span>
                    {block.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5 text-sm text-muted-foreground" role="list">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary/80" aria-hidden>•</span>
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
