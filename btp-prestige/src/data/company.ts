// src/data/company.ts
import { StatItem, ServiceItem, NavLink } from "./types";

export const COMPANY = {
  name: "CASANOVA",
  tagline: "L'excellence structurelle",
  baseline:
    "Nous construisons des ouvrages d'exception, où précision d'ingénierie et exigence architecturale ne font qu'un.",
  founded: 2009,
  phone: "+39 35 09 17 08 01",
  email: "contact@casanovabtp.com",
  address: "Riviera di Chiaia, 251, 80121 Napoli NA, Italie",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Réalisations", href: "/#realisations" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Agence", href: "/#agence" },
  { label: "Contact", href: "/#contact" },
];

export const STATS: StatItem[] = [
  { label: "Années d'expertise", value: "15", suffix: "+" },
  { label: "Chantiers livrés", value: "120", suffix: "+" },
  { label: "Corps de métier intégrés", value: "8" },
  { label: "Zéro accident majeur", value: "100", suffix: "%" },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "gros-oeuvre",
    title: "Gros Œuvre",
    description:
      "Fondations, structures béton et charpente : la rigueur au service de la durabilité.",
    icon: "hard-hat",
  },
  {
    slug: "architecture-sur-mesure",
    title: "Architecture sur mesure",
    description:
      "Conception intégrée, de l'esquisse au permis de construire, en lien avec nos architectes partenaires.",
    icon: "drafting-compass",
  },
  {
    slug: "renovation-haut-de-gamme",
    title: "Rénovation haut de gamme",
    description:
      "Réhabilitation de bâtiments d'exception, alliant patrimoine et exigences contemporaines.",
    icon: "hammer",
  },
  {
    slug: "conduite-de-travaux",
    title: "Conduite de travaux",
    description:
      "Pilotage rigoureux des délais, des coûts et de la qualité sur l'ensemble du chantier.",
    icon: "clipboard-check",
  },
];

export const SEO = {
  siteUrl: "https://www.casanovabtp.com", // à remplacer par le domaine final
  ogImageAlt: "CASANOVA — Entreprise de BTP haut de gamme",
  keywords: [
    "entreprise BTP haut de gamme",
    "construction sur mesure",
    "architecture Paris",
    "rénovation haut de gamme",
    "gros œuvre",
  ],
  geo: {
    latitude: 48.8589,
    longitude: 2.3775,
  },
} as const;