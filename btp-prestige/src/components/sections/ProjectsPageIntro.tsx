"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/lib/i18n";

export function ProjectsPageIntro() {
  const { t } = useLanguage();

  return (
    <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
      <SectionTitle eyebrow={t("portfolio")} title={t("allProjectsTitle")} />
      <p className="max-w-sm font-sans text-sm text-anthracite-muted md:text-right">
        {t("allProjectsIntro")}
      </p>
    </div>
  );
}
