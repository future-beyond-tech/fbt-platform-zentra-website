"use client";

import { motion } from "framer-motion";
import { useCasesContent } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function UseCases() {
  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-title"
      className="border-b border-border/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="use-cases-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Real-World Use Cases
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {useCasesContent.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="h-full border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  <p className="text-sm font-normal text-muted-foreground">
                    {useCase.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5 text-sm text-muted-foreground" role="list">
                    {useCase.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary/80" aria-hidden>•</span>
                        {b}
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
