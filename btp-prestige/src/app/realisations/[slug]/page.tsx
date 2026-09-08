// src/app/realisations/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { SEO } from "@/data/company";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  const title = `${project.title} — ${project.location}`;

  return {
    title,
    description: project.description,
    alternates: {
      canonical: `/realisations/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${SEO.siteUrl}/realisations/${project.slug}`,
      title,
      description: project.description,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}