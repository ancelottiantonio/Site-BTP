// src/data/company.ts
import { StatItem, ServiceItem, NavLink } from "./types";

export const COMPANY = {
  name: "CASANOVA",
  tagline: "L'eccellenza strutturale",
  baseline:
    "Realizziamo opere d'eccellenza dove precisione ingegneristica e rigore architettonico diventano un tutt'uno.",
  founded: 2009,
  phone: "+39 35 09 17 08 01",
  email: "contact@casanovabtp.com",
  address: "Riviera di Chiaia, 251, 80121 Napoli NA, Italia",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Realizzazioni", href: "/#realisations" },
  { label: "Competenze", href: "/#expertise" },
  { label: "Studio", href: "/#agence" },
  { label: "Contatti", href: "/#contact" },
];

export const STATS: StatItem[] = [
  { label: "Anni di esperienza", value: "15", suffix: "+" },
  { label: "Cantieri consegnati", value: "120", suffix: "+" },
  { label: "Mestieri integrati", value: "8" },
  { label: "Incidenti gravi", value: "100", suffix: "%" },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "gros-oeuvre",
    title: "Opere strutturali",
    description:
      "Fondazioni, strutture in calcestruzzo e carpenteria: rigore al servizio della durata.",
    icon: "hard-hat",
  },
  {
    slug: "architecture-sur-mesure",
    title: "Architettura su misura",
    description:
      "Progettazione integrata dallo schizzo al permesso di costruire, con i nostri architetti partner.",
    icon: "drafting-compass",
  },
  {
    slug: "renovation-haut-de-gamme",
    title: "Ristrutturazione di pregio",
    description:
      "Riqualificazione di edifici d'eccezione, tra patrimonio e nuove esigenze contemporanee.",
    icon: "hammer",
  },
  {
    slug: "conduite-de-travaux",
    title: "Direzione lavori",
    description:
      "Gestione rigorosa di tempi, costi e qualità durante l'intero cantiere.",
    icon: "clipboard-check",
  },
];

export const SEO = {
  siteUrl: "https://www.casanovabtp.com", // à remplacer par le domaine final
  ogImageAlt: "CASANOVA — Impresa di costruzioni di pregio",
  keywords: [
    "impresa di costruzioni di pregio",
    "costruzioni su misura",
    "architettura Napoli",
    "ristrutturazione di pregio",
    "opere strutturali",
  ],
  geo: {
    latitude: 40.8359,
    longitude: 14.2488,
  },
} as const;