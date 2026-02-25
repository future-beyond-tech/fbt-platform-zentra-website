"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site";

const FBT_TRANSITION_DURATION_MS = 500;
const companyUrl = siteConfig.companyUrl ?? "https://futurebeyondtech.com";

type FbtTransitionContextValue = {
  /** Start the transition to FBT site; navigates after animation */
  goToFbt: () => void;
};

const FbtTransitionContext = createContext<FbtTransitionContextValue | null>(null);

export function useFbtTransition() {
  const ctx = useContext(FbtTransitionContext);
  return ctx ?? { goToFbt: () => { window.location.href = companyUrl; } };
}

export function FbtTransitionProvider({ children }: { children: React.ReactNode }) {
  const [transitioning, setTransitioning] = useState(false);

  const goToFbt = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      window.location.href = companyUrl;
    }, FBT_TRANSITION_DURATION_MS);
  }, []);

  return (
    <FbtTransitionContext.Provider value={{ goToFbt }}>
      {children}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: FBT_TRANSITION_DURATION_MS / 1000,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-[100] bg-background"
            aria-hidden
          />
        )}
      </AnimatePresence>
    </FbtTransitionContext.Provider>
  );
}
