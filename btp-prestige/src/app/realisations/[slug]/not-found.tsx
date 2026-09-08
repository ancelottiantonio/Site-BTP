// src/app/realisations/[slug]/not-found.tsx
"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n";

export default function ProjectNotFound() {
  const { t } = useLanguage();

  return (
    <Container
      as="section"
      className="flex min-h-[80svh] flex-col items-start justify-center"
    >
      <span className="rounded-full bg-terracotta/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        Erreur 404
      </span>
      <h1 className="mt-4 font-display text-display-md font-semibold text-anthracite">
        {t("notFoundTitle")}
      </h1>
      <p className="mt-4 max-w-md font-sans text-anthracite-soft">
        {t("notFoundText")}
      </p>
      <Link href="/#realisations" className="mt-8">
        <Button variant="primary" href="/realisations">
          {t("allProjects")}
        </Button>
      </Link>
    </Container>
  );
}
