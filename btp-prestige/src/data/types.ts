// src/data/types.ts

export interface Project {
  slug: string;
  title: string;
  category:
    | "Résidentiel"
    | "Tertiaire"
    | "Industriel"
    | "Rénovation"
    | "Residential"
    | "Commercial"
    | "Industrial"
    | "Renovation"
    | "Residenziale"
    | "Terziario"
    | "Industriale"
    | "Ristrutturazione";
  location: string;
  year: number;
  surface: string; // ex: "4 200 m²"
  description: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
}

export interface StatItem {
  label: string;
  value: string; // ex: "120+", "15 ans"
  suffix?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: string; // nom d'icône (lucide-react à intégrer en Mission ultérieure)
}

export interface NavLink {
  label: string;
  href: string;
}