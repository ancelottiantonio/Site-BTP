// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GsapFadeChars } from "@/components/animations/GsapFadeChars";
import { COMPANY, STATS } from "@/data/company";
import { useLanguage } from "@/lib/i18n";

const SPRING = { type: "spring" as const, stiffness: 50, damping: 20 };

export function Hero() {
  const { t } = useLanguage();
  const statLabels = [
    t("yearsExperience"),
    t("projectsDelivered"),
    t("integratedTrades"),
    t("majorAccidents"),
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-cream-50 pb-16 pt-40">
      {/* Halos organiques en arrière-plan — remplacent la grille brutaliste */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-terracotta/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-navy/10 blur-[120px]"
      />

      <Container className="relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
          className="mb-6 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terracotta"
        >
          <span className="h-2 w-2 rounded-full bg-terracotta" />
          {t("heroEyebrow")} {COMPANY.founded}
        </motion.div>

        {/* Titre principal — animation GSAP caractère par caractère */}
        <GsapFadeChars
          text={t("tagline")}
          className="font-display text-display-xl font-semibold text-anthracite"
        />

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.9 }}
          className="mt-8 max-w-xl font-sans text-lg text-anthracite-soft md:text-xl"
        >
          {t("baseline")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button variant="primary" href="#realisations">
            {t("discoverProjects")}
          </Button>
          <Button variant="outline" href="#contact">
            {t("requestQuote")}
          </Button>
        </motion.div>

        {/* Bandeau de statistiques — carte flottante en verre dépoli */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 1.3 }}
          className="mt-20 grid grid-cols-2 gap-6 rounded-3xl bg-cream-50/60 p-8 shadow-soft backdrop-blur-sm md:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-anthracite md:text-4xl">
                {stat.value}
                <span className="text-terracotta">{stat.suffix}</span>
              </p>
              <p className="mt-1 font-sans text-xs uppercase tracking-wider text-anthracite-muted">
                {statLabels[index]}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...SPRING, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-anthracite/20 bg-cream-50/60 backdrop-blur-sm"
        >
          <span className="mx-auto mt-1.5 block h-2 w-1 rounded-full bg-terracotta" />
        </motion.div>
      </motion.div>
    </section>
  );
}
