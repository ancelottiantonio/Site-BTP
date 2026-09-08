// src/components/sections/FeaturedProjects.tsx
"use client";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();
  const { t } = useLanguage();

  return (
    <section id="realisations" className="bg-cream-50 py-section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle eyebrow={t("portfolio")} title={t("exceptionalProjects")} />
          <p className="max-w-sm font-sans text-sm text-anthracite-muted md:text-right">
            {t("portfolioIntro")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" href="/realisations">
            {t("allProjects")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
