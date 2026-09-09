"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Project, ServiceItem } from "@/data/types";

export type Language = "fr" | "en" | "it";

const translations = {
  fr: {
    navigation: "Navigation",
    projects: "Réalisations",
    expertise: "Expertise",
    agency: "Agence",
    contact: "Contact",
    quote: "Devis Chantier",
    discoverProjects: "Découvrir nos réalisations",
    requestQuote: "Demander un devis",
    allProjects: "Voir toutes les réalisations",
    notFoundTitle: "Chantier introuvable",
    notFoundText:
      "Ce projet n'existe pas ou a été déplacé. Retrouvez l'ensemble de nos réalisations ci-dessous.",
    heroEyebrow: "Entreprise Générale du Bâtiment — Depuis",
    tagline: "L'excellence structurelle",
    baseline:
      "Nous construisons des ouvrages d'exception, où précision d'ingénierie et exigence architecturale ne font qu'un.",
    portfolio: "Portfolio",
    exceptionalProjects: "Réalisations d'exception",
    portfolioIntro:
      "Une sélection de chantiers menés avec la même exigence : celle du détail structurel et de la performance d'exécution.",
    allProjectsTitle: "Toutes nos réalisations",
    allProjectsIntro:
      "Découvrez l'ensemble des projets conçus et réalisés par les équipes CASANOVA.",
    expertiseTitle: "Notre expertise",
    expertiseDescription:
      "Du premier coup de pelle à la livraison, nous maîtrisons chaque corps de métier en interne — gage de cohérence et de respect des délais.",
    agencyTitle: "L'agence",
    aboutTitle: "Bâtir avec exigence",
    aboutDescription:
      "réunit architectes, ingénieurs structure et compagnons sous une même exigence : celle de la précision.",
    aboutContinuation:
      "Chaque chantier est piloté en interne, du gros œuvre à la livraison, pour garantir une continuité sans faille entre la conception et l'exécution.",
    foundedIn: "Fondée en",
    yearsExperience: "Années d'expertise",
    projectsDelivered: "Chantiers livrés",
    integratedTrades: "Corps de métier intégrés",
    majorAccidents: "Zéro accident majeur",
    directorEyebrow: "Mot du Directeur",
    directorTitle: "Construire une relation de confiance",
    directorQuote:
      "Chez CASANOVA, nous ne construisons pas seulement des ouvrages. Nous construisons une relation durable avec chaque client, fondée sur l'écoute, la transparence et le respect des engagements. Chaque projet porte notre nom : c'est pourquoi nous y apportons la même exigence, du premier échange jusqu'à la remise des clés.",
    directorName: "Paulo Francesco ANCELOTTI",
    directorRole: "Directeur général",
    contactTitle: "Un projet en tête ?",
    contactDescription:
      "Décrivez-nous votre projet : nos équipes reviennent vers vous sous 48h avec une première estimation.",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    category: "Catégorie",
    year: "Année",
    location: "Localisation",
    surface: "Surface",
    language: "Langue",
    allRightsReserved: "Tous droits réservés",
    fullName: "Nom complet",
    emailPlaceholder: "jean.dupont@email.fr",
    projectPlaceholder:
      "Décrivez la nature, la localisation et la surface approximative de votre projet...",
    optionalPhone: "Téléphone (optionnel)",
    yourProject: "Votre projet",
    sendRequest: "Envoyer ma demande",
    sending: "Envoi en cours...",
    openMenu: "Ouvrir le menu",
    galleryImage: "vue",
    namePlaceholder: "Jean Dupont",
    phonePlaceholder: "06 12 34 56 78",
    teamImageAlt: "Équipe CASANOVA sur chantier",
    since: "Depuis",
    error404: "Erreur 404",
  },
  en: {
    navigation: "Navigation",
    projects: "Projects",
    expertise: "Expertise",
    agency: "Studio",
    contact: "Contact",
    quote: "Request a quote",
    discoverProjects: "Discover our projects",
    requestQuote: "Request a quote",
    allProjects: "View all projects",
    notFoundTitle: "Project not found",
    notFoundText:
      "This project does not exist or has been moved. Explore all our projects below.",
    heroEyebrow: "General Building Contractor — Since",
    tagline: "Structural excellence",
    baseline:
      "We build exceptional structures where engineering precision and architectural standards become one.",
    portfolio: "Portfolio",
    exceptionalProjects: "Exceptional projects",
    portfolioIntro:
      "A selection of projects delivered with the same commitment to structural detail and execution performance.",
    allProjectsTitle: "All our projects",
    allProjectsIntro:
      "Explore every project designed and delivered by the CASANOVA teams.",
    expertiseTitle: "Our expertise",
    expertiseDescription:
      "From the first dig to delivery, we manage every trade in-house for consistency and reliable deadlines.",
    agencyTitle: "The studio",
    aboutTitle: "Building with precision",
    aboutDescription:
      "brings together architects, structural engineers and craftspeople under one shared standard: precision.",
    aboutContinuation:
      "Every project is managed in-house, from structural work to delivery, ensuring seamless continuity between design and execution.",
    foundedIn: "Founded in",
    yearsExperience: "Years of expertise",
    projectsDelivered: "Projects delivered",
    integratedTrades: "Integrated trades",
    majorAccidents: "Major accidents",
    directorEyebrow: "A word from the Director",
    directorTitle: "Building lasting trust",
    directorQuote:
      "At CASANOVA, we do not simply build structures. We build lasting relationships with every client, grounded in listening, transparency and a commitment to our word. Every project carries our name, which is why we bring the same standards to every stage, from the first conversation to the handover of the keys.",
    directorName: "Paulo Francesco ANCELOTTI",
    directorRole: "Managing Director",
    contactTitle: "Have a project in mind?",
    contactDescription:
      "Tell us about your project: our team will get back to you within 48 hours with an initial estimate.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    category: "Category",
    year: "Year",
    location: "Location",
    surface: "Area",
    language: "Language",
    allRightsReserved: "All rights reserved",
    fullName: "Full name",
    emailPlaceholder: "john.doe@email.com",
    projectPlaceholder:
      "Describe your project's nature, location and approximate area...",
    optionalPhone: "Phone (optional)",
    yourProject: "Your project",
    sendRequest: "Send my request",
    sending: "Sending...",
    openMenu: "Open menu",
    galleryImage: "view",
    namePlaceholder: "John Doe",
    phonePlaceholder: "+1 212 555 0123",
    teamImageAlt: "CASANOVA team on site",
    since: "Since",
    error404: "Error 404",
  },
  it: {
    navigation: "Navigazione",
    projects: "Realizzazioni",
    expertise: "Competenze",
    agency: "Studio",
    contact: "Contatti",
    quote: "Richiedi un preventivo",
    discoverProjects: "Scopri le nostre realizzazioni",
    requestQuote: "Richiedi un preventivo",
    allProjects: "Vedi tutte le realizzazioni",
    notFoundTitle: "Cantiere non trovato",
    notFoundText:
      "Questo progetto non esiste o è stato spostato. Scopri tutte le nostre realizzazioni qui sotto.",
    heroEyebrow: "Impresa Generale di Costruzioni — Dal",
    tagline: "L'eccellenza strutturale",
    baseline:
      "Realizziamo opere d'eccellenza dove precisione ingegneristica e rigore architettonico diventano un tutt'uno.",
    portfolio: "Portfolio",
    exceptionalProjects: "Realizzazioni d'eccellenza",
    portfolioIntro:
      "Una selezione di progetti realizzati con la stessa attenzione ai dettagli strutturali e all'efficienza esecutiva.",
    allProjectsTitle: "Tutte le nostre realizzazioni",
    allProjectsIntro:
      "Scopri tutti i progetti ideati e realizzati dai team CASANOVA.",
    expertiseTitle: "Le nostre competenze",
    expertiseDescription:
      "Dal primo scavo alla consegna, gestiamo ogni mestiere internamente per garantire coerenza e rispetto delle scadenze.",
    agencyTitle: "Lo studio",
    aboutTitle: "Costruire con rigore",
    aboutDescription:
      "riunisce architetti, ingegneri strutturali e artigiani sotto un unico standard: la precisione.",
    aboutContinuation:
      "Ogni cantiere è gestito internamente, dalle opere strutturali alla consegna, per garantire continuità tra progettazione ed esecuzione.",
    foundedIn: "Fondata nel",
    yearsExperience: "Anni di esperienza",
    projectsDelivered: "Cantieri consegnati",
    integratedTrades: "Mestieri integrati",
    majorAccidents: "Incidenti gravi",
    directorEyebrow: "Le parole del Direttore",
    directorTitle: "Costruire un rapporto di fiducia",
    directorQuote:
      "In CASANOVA non costruiamo soltanto edifici. Costruiamo un rapporto duraturo con ogni cliente, fondato sull'ascolto, sulla trasparenza e sul rispetto degli impegni. Ogni progetto porta il nostro nome: per questo manteniamo lo stesso rigore, dal primo incontro alla consegna delle chiavi.",
    directorName: "Paulo Francesco ANCELOTTI",
    directorRole: "Direttore generale",
    contactTitle: "Hai un progetto in mente?",
    contactDescription:
      "Raccontaci il tuo progetto: il nostro team ti ricontatterà entro 48 ore con una prima stima.",
    address: "Indirizzo",
    phone: "Telefono",
    email: "Email",
    category: "Categoria",
    year: "Anno",
    location: "Località",
    surface: "Superficie",
    language: "Lingua",
    allRightsReserved: "Tutti i diritti riservati",
    fullName: "Nome e cognome",
    emailPlaceholder: "mario.rossi@email.it",
    projectPlaceholder:
      "Descrivi la natura, la posizione e la superficie approssimativa del tuo progetto...",
    optionalPhone: "Telefono (facoltativo)",
    yourProject: "Il tuo progetto",
    sendRequest: "Invia la richiesta",
    sending: "Invio in corso...",
    openMenu: "Apri il menu",
    galleryImage: "vista",
    namePlaceholder: "Mario Rossi",
    phonePlaceholder: "+39 333 123 4567",
    teamImageAlt: "Team CASANOVA in cantiere",
    since: "Dal",
    error404: "Errore 404",
  },
} as const;

const localizedProjects: Record<Language, Record<string, Partial<Project>>> = {
  fr: {},
  en: {
    "villa-monolithe": {
      title: "Monolith Villa",
      category: "Residential",
      description:
        "Contemporary raw-concrete residence anchored in the rock and open to the Mediterranean.",
    },
    "siege-arkos": {
      title: "Arkos Headquarters",
      category: "Commercial",
      location: "La Défense, Paris",
      description: "Exposed-structure office building, BREEAM Excellent certified.",
    },
    "hangar-nexa": {
      title: "Nexa Hangar",
      category: "Industrial",
      description: "Steel-frame logistics platform delivered in nine months.",
    },
    "hotel-particulier-marais": {
      title: "Private Mansion — Le Marais",
      category: "Renovation",
      location: "Paris 3rd",
      description:
        "Complete restoration of a listed private mansion, preserving the original facades.",
    },
  },
  it: {
    "villa-monolithe": {
      title: "Villa Monolite",
      category: "Residenziale",
      description:
        "Residenza contemporanea in cemento grezzo, ancorata alla roccia e affacciata sul Mediterraneo.",
    },
    "siege-arkos": {
      title: "Sede Arkos",
      category: "Terziario",
      location: "La Défense, Parigi",
      description: "Edificio per uffici con struttura a vista, certificato BREEAM Excellent.",
    },
    "hangar-nexa": {
      title: "Hangar Nexa",
      category: "Industriale",
      description: "Piattaforma logistica con struttura in acciaio, completata in nove mesi.",
    },
    "hotel-particulier-marais": {
      title: "Dimora storica — Le Marais",
      category: "Ristrutturazione",
      location: "Parigi 3e",
      description:
        "Restauro completo di una dimora storica tutelata, preservando le facciate originali.",
    },
  },
};

const localizedServices: Record<Language, Record<string, Partial<ServiceItem>>> = {
  fr: {},
  en: {
    "gros-oeuvre": {
      title: "Structural Work",
      description: "Foundations, concrete structures and framing: rigour serving durability.",
    },
    "architecture-sur-mesure": {
      title: "Bespoke Architecture",
      description: "Integrated design from sketch to planning permission, alongside our architect partners.",
    },
    "renovation-haut-de-gamme": {
      title: "High-End Renovation",
      description: "Restoration of exceptional buildings combining heritage and contemporary standards.",
    },
    "conduite-de-travaux": {
      title: "Construction Management",
      description: "Rigorous management of timelines, costs and quality throughout the project.",
    },
  },
  it: {
    "gros-oeuvre": {
      title: "Opere strutturali",
      description: "Fondazioni, strutture in calcestruzzo e carpenteria: rigore al servizio della durata.",
    },
    "architecture-sur-mesure": {
      title: "Architettura su misura",
      description: "Progettazione integrata dallo schizzo al permesso di costruire, con i nostri architetti partner.",
    },
    "renovation-haut-de-gamme": {
      title: "Ristrutturazione di pregio",
      description: "Riqualificazione di edifici d'eccezione, tra patrimonio e nuove esigenze contemporanee.",
    },
    "conduite-de-travaux": {
      title: "Direzione lavori",
      description: "Gestione rigorosa di tempi, costi e qualità durante l'intero cantiere.",
    },
  },
};

type TranslationKey = keyof typeof translations.fr;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "casanova-language-v3";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("it");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (savedLanguage && savedLanguage in translations) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: (key) => translations[language][key],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function getLocalizedProject(project: Project, language: Language): Project {
  return { ...project, ...localizedProjects[language][project.slug] };
}

export function getLocalizedService(service: ServiceItem, language: Language): ServiceItem {
  return { ...service, ...localizedServices[language][service.slug] };
}
