// src/components/sections/Contact.tsx
"use client";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ContactForm } from "@/components/ui/ContactForm";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-4 mb-4 rounded-[3rem] bg-navy py-section text-cream-50 md:mx-6 md:mb-6">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Colonne info */}
          <div className="md:col-span-4">
            <SectionTitle
              eyebrow={t("contact")}
              title={t("contactTitle")}
              className="[&_h2]:text-cream-50"
            />
            <RevealOnScroll delay={0.15} className="mt-6 flex flex-col gap-4">
              <p className="max-w-sm font-sans text-sm text-cream-300">
                {t("contactDescription")}
              </p>
              <div className="mt-4 flex flex-col gap-1 rounded-2xl bg-cream-50/[0.04] p-5 backdrop-blur-sm">
                <span className="font-sans text-xs uppercase tracking-wider text-cream-400">
                  {t("phone")}
                </span>
                <a
                  href={`tel:${COMPANY.phone.replaceAll(" ", "")}`}
                  className="font-display text-lg text-cream-50 hover:text-terracotta-light"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl bg-cream-50/[0.04] p-5 backdrop-blur-sm">
                <span className="font-sans text-xs uppercase tracking-wider text-cream-400">
                  {t("email")}
                </span>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-display text-lg text-cream-50 hover:text-terracotta-light"
                >
                  {COMPANY.email}
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Formulaire */}
          <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
