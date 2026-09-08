// src/components/sections/Services.tsx
"use client";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ServiceRow } from "@/components/ui/ServiceRow";
import { SERVICES } from "@/data/company";
import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="mx-4 rounded-[3rem] bg-navy py-section text-cream-50 md:mx-6">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Colonne fixe */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionTitle
                eyebrow={t("expertiseTitle")}
                title={t("expertiseTitle")}
                className="[&_h2]:text-cream-50 [&_span]:text-terracotta-light"
              />
              <RevealOnScroll delay={0.2}>
                <p className="mt-6 max-w-sm font-sans text-sm text-cream-300">
                  {t("expertiseDescription")}
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Liste de services */}
          <div className="md:col-span-8">
            <div className="flex flex-col gap-2">
              {SERVICES.map((service, index) => (
                <ServiceRow key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
