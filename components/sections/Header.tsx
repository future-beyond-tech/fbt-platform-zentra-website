"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "text-lg font-semibold tracking-tight text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
          )}
          aria-label="Zentra home"
        >
          {siteConfig.name}
          <span className="ml-1.5 text-muted-foreground font-normal">
            by {siteConfig.company}
          </span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-4">
          <a
            href="#solutions"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Solutions
          </a>
          <a
            href="#use-cases"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Use Cases
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Contact
          </a>
          <Button asChild size="sm" className="rounded-lg">
            <a href="#contact">{siteConfig.name} Demo</a>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
