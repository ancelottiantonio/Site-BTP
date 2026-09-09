// src/components/sections/ProjectDetail.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/types";
import { getLocalizedProject, useLanguage } from "@/lib/i18n";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { language, t } = useLanguage();
  const localizedProject = getLocalizedProject(project, language);

  return (
    <article className="pt-32">
      {/* En-tête projet */}
      <Container>
        <Link
          href="/#realisations"
          className="inline-flex items-center gap-2 rounded-full bg-anthracite/5 px-4 py-2 font-sans text-xs font-medium uppercase tracking-widest text-anthracite-muted transition-colors hover:bg-terracotta/10 hover:text-terracotta"
        >
          ← {t("allProjects")}
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-8 border-b border-anthracite/10 pb-8 md:grid-cols-12 md:items-end">
          <h1 className="font-display text-display-lg font-semibold leading-tight text-anthracite md:col-span-8">
            {localizedProject.title}
          </h1>

          <dl className="grid grid-cols-2 gap-y-4 font-sans text-xs uppercase tracking-wider text-anthracite-muted md:col-span-4">
            <div>
              <dt className="text-anthracite-muted/70">{t("category")}</dt>
              <dd className="mt-1 text-anthracite">{localizedProject.category}</dd>
            </div>
            <div>
              <dt className="text-anthracite-muted/70">{t("year")}</dt>
              <dd className="mt-1 text-anthracite">{localizedProject.year}</dd>
            </div>
            <div>
              <dt className="text-anthracite-muted/70">{t("location")}</dt>
              <dd className="mt-1 text-anthracite">{localizedProject.location}</dd>
            </div>
            <div>
              <dt className="text-anthracite-muted/70">{t("surface")}</dt>
              <dd className="mt-1 text-anthracite">{localizedProject.surface}</dd>
            </div>
          </dl>
        </div>
      </Container>

      {/* Image de couverture */}
      <Container className="mt-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-cream-200 shadow-soft-lg md:aspect-[21/9]">
          <Image
            src={project.coverImage}
            alt={localizedProject.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Container>

      {/* Description */}
      <Container className="py-section">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <p className="font-sans text-lg leading-relaxed text-anthracite-soft md:col-span-7 md:col-start-1">
            {localizedProject.description}
          </p>
        </div>

        {/* Galerie */}
        {project.gallery.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-200 shadow-soft"
              >
                <Image
                  src={image}
                  alt={`${localizedProject.title} — ${t("galleryImage")} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* CTA de fin de fiche */}
        <div className="mt-20 flex flex-col items-start gap-4 rounded-3xl bg-cream-100/70 p-10 shadow-soft">
          <p className="font-display text-2xl font-semibold text-anthracite">
            {t("contactTitle")}
          </p>
          <Link href="/#contact">
            <Button variant="primary">{t("requestQuote")}</Button>
          </Link>
        </div>
      </Container>
    </article>
  );
}
