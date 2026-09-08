// src/components/layout/Footer.tsx
"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY, NAV_LINKS, SERVICES } from "@/data/company";
import { getLocalizedService, useLanguage } from "@/lib/i18n";

export function Footer() {
  const year = new Date().getFullYear();
  const { language, t } = useLanguage();

  const navigationLabels: Record<string, string> = {
    Réalisations: t("projects"),
    Expertise: t("expertise"),
    Agence: t("agency"),
    Contact: t("contact"),
  };

  return (
    <footer className="rounded-t-[3rem] bg-navy text-cream-50 md:rounded-t-[4rem]">
      <Container className="py-section">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Colonne identité */}
          <div className="md:col-span-2">
            <span className="font-display text-3xl font-semibold tracking-tight">
              {COMPANY.name}
              <span className="text-terracotta-light">.</span>
            </span>
            <p className="mt-4 max-w-md font-sans text-sm text-cream-300">
              {t("baseline")}
            </p>
          </div>

          {/* Colonne navigation */}
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
              {t("navigation")}
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream-300 transition-colors hover:text-cream-50"
                  >
                    {navigationLabels[link.label] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne expertise */}
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
              {t("expertise")}
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.slug} className="font-sans text-sm text-cream-300">
                  {getLocalizedService(service, language).title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bandeau contact — cartes douces en verre dépoli */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-cream-50/[0.04] p-6 backdrop-blur-sm">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream-400">
              {t("address")}
            </p>
            <p className="mt-1 font-sans text-sm">{COMPANY.address}</p>
          </div>
          <div className="rounded-2xl bg-cream-50/[0.04] p-6 backdrop-blur-sm">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream-400">
              {t("phone")}
            </p>
            <p className="mt-1 font-sans text-sm">{COMPANY.phone}</p>
          </div>
          <div className="rounded-2xl bg-cream-50/[0.04] p-6 backdrop-blur-sm">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream-400">
              {t("email")}
            </p>
            <p className="mt-1 font-sans text-sm">{COMPANY.email}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-cream-50/10 pt-6 font-sans text-xs uppercase tracking-wider text-cream-400 md:flex-row md:items-center">
          <span>© {year} {COMPANY.name} — Depuis {COMPANY.founded}</span>
          <span>{t("allRightsReserved")}</span>
        </div>
      </Container>
    </footer>
  );
}
