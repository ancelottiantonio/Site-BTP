// src/components/sections/About.tsx
"use client";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { COMPANY, STATS } from "@/data/company";
import { STOCK_IMAGES } from "@/data/stock-images";
import { useLanguage } from "@/lib/i18n";

/**
 * Extrait la partie numérique d'une stat (ex: "120" -> 120)
 * pour piloter l'animation, en conservant le suffixe tel quel.
 */
function parseStatValue(value: string): number {
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function About() {
  const { t } = useLanguage();
  const statLabels = [
    t("yearsExperience"),
    t("projectsDelivered"),
    t("integratedTrades"),
    t("majorAccidents"),
  ];

  return (
    <section id="agence" className="relative overflow-hidden bg-cream-50 py-section">
      {/* Halo organique discret */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-terracotta/[0.06] blur-[120px]"
      />

      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Colonne visuelle + narrative */}
          <div className="md:col-span-6">
            <SectionTitle eyebrow={t("agencyTitle")} title={t("aboutTitle")} />

            <RevealOnScroll delay={0.15} className="mt-6">
              <p className="max-w-lg font-sans text-base text-anthracite-soft md:text-lg">
                {t("foundedIn")} {COMPANY.founded}, {COMPANY.name} {t("aboutDescription")} {t("aboutContinuation")}
              </p>
            </RevealOnScroll>

            {/* Bloc image — coins généreusement arrondis, ombre douce */}
            <RevealOnScroll delay={0.25} className="mt-10">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-cream-200 shadow-soft-lg">
                <Image
                  src={STOCK_IMAGES.about.chantier}
                  alt={t("teamImageAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-anthracite/40 px-3 py-1 font-sans text-xs text-cream-50 backdrop-blur-md">
                  {COMPANY.address}
                </span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Colonne stats — cartes douces, plus de grille brutaliste */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="grid h-full grid-cols-2 gap-4">
              {STATS.map((stat, index) => (
                <RevealOnScroll
                  key={stat.label}
                  delay={0.1 * index}
                  className="flex flex-col justify-between rounded-3xl bg-cream-100/70 p-8 shadow-soft backdrop-blur-sm md:p-10"
                >
                  <p className="font-display text-4xl font-semibold text-anthracite md:text-5xl">
                    <AnimatedCounter
                      value={parseStatValue(stat.value)}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-4 font-sans text-xs uppercase tracking-wider text-anthracite-muted">
                    {statLabels[index]}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
