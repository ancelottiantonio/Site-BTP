// src/data/projects.ts
import { Project } from "./types";
import { STOCK_IMAGES } from "./stock-images";

export const PROJECTS: Project[] = [
  {
    slug: "villa-monolithe",
    title: "Villa Monolite",
    category: "Residenziale",
    location: "Saint-Tropez",
    year: 2024,
    surface: "620 m²",
    description:
      "Residenza contemporanea in cemento grezzo, ancorata alla roccia e affacciata sul Mediterraneo.",
    coverImage: STOCK_IMAGES.projects["villa-monolithe"].cover,
    gallery: STOCK_IMAGES.projects["villa-monolithe"].gallery,
    featured: true,
  },
  {
    slug: "siege-arkos",
    title: "Sede Arkos",
    category: "Terziario",
    location: "La Défense, Parigi",
    year: 2023,
    surface: "4 200 m²",
    description:
      "Edificio per uffici con struttura a vista, certificato BREEAM Excellent.",
    coverImage: STOCK_IMAGES.projects["siege-arkos"].cover,
    gallery: STOCK_IMAGES.projects["siege-arkos"].gallery,
    featured: true,
  },
  {
    slug: "hangar-nexa",
    title: "Hangar Nexa",
    category: "Industriale",
    location: "Lione",
    year: 2023,
    surface: "8 900 m²",
    description:
      "Piattaforma logistica con struttura in acciaio, completata in nove mesi.",
    coverImage: STOCK_IMAGES.projects["hangar-nexa"].cover,
    gallery: STOCK_IMAGES.projects["hangar-nexa"].gallery,
    featured: false,
  },
  {
    slug: "hotel-particulier-marais",
    title: "Dimora storica — Le Marais",
    category: "Ristrutturazione",
    location: "Parigi 3e",
    year: 2022,
    surface: "310 m²",
    description:
      "Restauro completo di una dimora storica tutelata, preservando le facciate originali.",
    coverImage: STOCK_IMAGES.projects["hotel-marais"].cover,
    gallery: STOCK_IMAGES.projects["hotel-marais"].gallery,
    featured: true,
  },
];

export const getFeaturedProjects = (): Project[] =>
  PROJECTS.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);