"use client";

import { motion } from "framer-motion";
import { TrustSection } from "./TrustSection";
import { securityOverview } from "@/content/trust";
import { Shield, FileCheck, BookOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [Shield, FileCheck, BookOpen, Layers];

export function TrustSecurityOverview() {
  return (
    <TrustSection
      id="security-overview"
      title={securityOverview.title}
      noSubtitle
    >
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2" role="list">
        {securityOverview.philosophy.map((item, i) => {
          const Icon = icons[i] ?? Shield;
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex gap-3">
                <Icon className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </TrustSection>
  );
}
