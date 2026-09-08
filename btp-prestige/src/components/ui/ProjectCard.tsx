// src/components/ui/ProjectCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/types";
import { getLocalizedProject, useLanguage } from "@/lib/i18n";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const SPRING = { type: "spring" as const, stiffness: 50, damping: 20 };

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const localizedProject = getLocalizedProject(project, language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...SPRING, delay: index * 0.08 }}
    >
      <Link
        href={`/realisations/${project.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group block overflow-hidden rounded-3xl bg-cream-50 shadow-soft transition-shadow duration-500 ease-organic hover:shadow-soft-lg"
      >
        {/* Zone image avec effet reveal en douceur */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.coverImage}
              alt={localizedProject.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Voile doux au survol pour faire ressortir le badge */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-anthracite/30 via-transparent to-transparent opacity-0 transition-opacity duration-500",
              isHovered && "opacity-100"
            )}
          />

          {/* Numéro de projet — badge pilule en verre dépoli */}
          <span className="absolute right-4 top-4 z-20 rounded-full bg-cream-50/40 px-3 py-1 font-sans text-xs font-medium text-cream-50 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Catégorie */}
          <span className="absolute left-4 top-4 z-20 rounded-full bg-cream-50/40 px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-cream-50 backdrop-blur-md">
            {localizedProject.category}
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between gap-4 p-6">
          <div>
            <h3 className="font-display text-xl font-semibold leading-tight text-anthracite md:text-2xl">
              {localizedProject.title}
            </h3>
            <p className="mt-1 font-sans text-sm text-anthracite-muted">
              {localizedProject.location} — {localizedProject.year}
            </p>
          </div>

          <motion.span
            animate={{ x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }}
            transition={SPRING}
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg transition-colors duration-300",
              isHovered ? "bg-terracotta text-cream-50" : "bg-terracotta/10 text-terracotta"
            )}
            aria-hidden
          >
            ↗
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}
