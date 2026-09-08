import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { SEO } from "@/data/company";
import { ProjectsPageIntro } from "@/components/sections/ProjectsPageIntro";

export const metadata: Metadata = {
  title: "Toutes les réalisations",
  description: "Découvrez toutes les réalisations de CASANOVA.",
  alternates: {
    canonical: "/realisations",
  },
  openGraph: {
    type: "website",
    url: `${SEO.siteUrl}/realisations`,
    title: "Toutes les réalisations — CASANOVA",
    description: "Découvrez toutes les réalisations de CASANOVA.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <Container>
          <ProjectsPageIntro />
          <div className="grid grid-cols-1 gap-8 pb-section md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
