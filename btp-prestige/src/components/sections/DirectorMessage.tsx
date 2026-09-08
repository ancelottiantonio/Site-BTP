"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useLanguage } from "@/lib/i18n";

const DIRECTOR_IMAGE = "/directeur.jpeg";

export function DirectorMessage() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-100 py-section">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <RevealOnScroll className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-cream-200 shadow-soft-lg">
              <Image
                src={DIRECTOR_IMAGE}
                alt={`${t("directorName")}, ${t("directorRole")}`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="md:col-span-6 md:col-start-7">
            <SectionTitle eyebrow={t("directorEyebrow")} title={t("directorTitle")} />
            <blockquote className="mt-8 font-display text-2xl font-medium leading-relaxed text-anthracite md:text-3xl">
              “{t("directorQuote")}”
            </blockquote>
            <div className="mt-8 border-l-2 border-terracotta pl-4">
              <p className="font-display text-lg font-semibold text-anthracite">
                {t("directorName")}
              </p>
              <p className="mt-1 font-sans text-sm text-anthracite-muted">
                {t("directorRole")}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}