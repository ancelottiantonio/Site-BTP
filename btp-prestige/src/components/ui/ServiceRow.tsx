// src/components/ui/ServiceRow.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/data/types";
import { getLocalizedService, useLanguage } from "@/lib/i18n";

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
}

const SPRING = { type: "spring" as const, stiffness: 200, damping: 22 };

export function ServiceRow({ service, index }: ServiceRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const localizedService = getLocalizedService(service, language);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex cursor-default items-center gap-6 rounded-3xl px-6 py-8 transition-colors duration-500 ease-organic md:gap-10"
    >
      {/* Fond de surlignage doux, en pleine carte */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-cream-50/[0.04] backdrop-blur-sm"
      />

      <span
        className={cn(
          "font-sans text-sm font-medium transition-colors duration-300",
          isHovered ? "text-terracotta-light" : "text-cream-400"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex-1">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-cream-50 md:text-3xl">
          {localizedService.title}
        </h3>
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 max-w-lg overflow-hidden font-sans text-sm text-cream-300"
        >
          {localizedService.description}
        </motion.p>
      </div>

      <motion.span
        animate={{
          x: isHovered ? 6 : 0,
          rotate: isHovered ? 90 : 0,
          backgroundColor: isHovered ? "rgba(194,112,61,1)" : "rgba(253,251,247,0.08)",
        }}
        transition={SPRING}
        className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xl text-cream-50 md:flex"
        aria-hidden
      >
        +
      </motion.span>
    </motion.div>
  );
}
