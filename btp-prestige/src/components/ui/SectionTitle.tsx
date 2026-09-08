// src/components/ui/SectionTitle.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

const SPRING = { type: "spring" as const, stiffness: 60, damping: 20 };

export function SectionTitle({
  eyebrow,
  title,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING}
          className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terracotta"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...SPRING, stiffness: 50 }}
        className="font-display text-display-md font-semibold leading-tight text-anthracite"
      >
        {title}
      </motion.h2>
    </div>
  );
}
