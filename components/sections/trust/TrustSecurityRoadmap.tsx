"use client";

import { motion } from "framer-motion";
import { TrustSection } from "./TrustSection";
import { securityRoadmap } from "@/content/trust";

export function TrustSecurityRoadmap() {
  return (
    <TrustSection
      id="security-roadmap"
      title={securityRoadmap.title}
      subtitle={securityRoadmap.subtitle}
    >
      <ul className="space-y-3 text-sm" role="list">
        {securityRoadmap.items.map((item, i) => (
          <motion.li
            key={`${item.quarter}-${item.text}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.04 }}
            className="flex gap-3"
          >
            <span className="shrink-0 font-medium text-foreground w-20">{item.quarter}</span>
            <span className="text-muted-foreground">{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </TrustSection>
  );
}
