"use client";

import { motion } from "framer-motion";
import { TrustSection } from "./TrustSection";
import { securityControlsOverview } from "@/content/trust";

export function TrustSecurityControls() {
  return (
    <TrustSection
      id="security-controls"
      title={securityControlsOverview.title}
      subtitle={securityControlsOverview.subtitle}
    >
      <ul className="space-y-2 text-sm text-muted-foreground" role="list">
        {securityControlsOverview.controls.map((control, i) => (
          <motion.li
            key={control}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.03 }}
            className="flex gap-2"
          >
            <span className="text-primary" aria-hidden>•</span>
            {control}
          </motion.li>
        ))}
      </ul>
    </TrustSection>
  );
}
