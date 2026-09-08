// src/data/projects.ts
import { Project } from "./types";
import { STOCK_IMAGES } from "./stock-images";

export const PROJECTS: Project[] = [
  {
    slug: "villa-monolithe",
    title: "Villa Monolithe",
    category: "Résidentiel",
    location: "Saint-Tropez",
    year: 2024,
    surface: "620 m²",
    description:
      "Résidence contemporaine en béton brut, ancrée dans la roche, ouverte sur la Méditerranée.",
    coverImage: STOCK_IMAGES.projects["villa-monolithe"].cover,
    gallery: STOCK_IMAGES.projects["villa-monolithe"].gallery,
    featured: true,
  },
  {
    slug: "siege-arkos",
    title: "Siège Arkos",
    category: "Tertiaire",
    location: "La Défense, Paris",
    year: 2023,
    surface: "4 200 m²",
    description:
      "Immeuble de bureaux à structure apparente, certifié BREEAM Excellent.",
    coverImage: STOCK_IMAGES.projects["siege-arkos"].cover,
    gallery: STOCK_IMAGES.projects["siege-arkos"].gallery,
    featured: true,
  },
  {
    slug: "hangar-nexa",
    title: "Hangar Nexa",
    category: "Industriel",
    location: "Lyon",
    year: 2023,
    surface: "8 900 m²",
    description:
      "Plateforme logistique à ossature métallique, livrée en 9 mois.",
    coverImage: STOCK_IMAGES.projects["hangar-nexa"].cover,
    gallery: STOCK_IMAGES.projects["hangar-nexa"].gallery,
    featured: false,
  },
  {
    slug: "hotel-particulier-marais",
    title: "Hôtel Particulier — Le Marais",
    category: "Rénovation",
    location: "Paris 3e",
    year: 2022,
    surface: "310 m²",
    description:
      "Restauration complète d'un hôtel particulier classé, préservation des façades d'origine.",
    coverImage: STOCK_IMAGES.projects["hotel-marais"].cover,
    gallery: STOCK_IMAGES.projects["hotel-marais"].gallery,
    featured: true,
  },
];

export const getFeaturedProjects = (): Project[] =>
  PROJECTS.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);