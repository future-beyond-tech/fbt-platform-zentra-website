"use client";

import { motion } from "framer-motion";
import { TrustSection } from "./TrustSection";
import { governanceAndMonitoring } from "@/content/trust";

export function TrustGovernance() {
  return (
    <TrustSection
      id="governance-monitoring"
      title={governanceAndMonitoring.title}
      noSubtitle
    >
      <ul className="space-y-3 text-sm text-muted-foreground" role="list">
        {governanceAndMonitoring.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.04 }}
            className="flex gap-2"
          >
            <span className="text-primary shrink-0" aria-hidden>•</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </TrustSection>
  );
}
