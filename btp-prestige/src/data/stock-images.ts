// src/data/stock-images.ts
//
// ⚠️ PLACEHOLDER — Photos temporaires servies depuis le CDN Unsplash
// (https://images.unsplash.com), en attendant les vraies photos de chantier
// de l'entreprise. Licence : Unsplash License (usage libre, y compris
// commercial, sans attribution obligatoire — https://unsplash.com/license).
//
// Pour remplacer par de vraies photos :
// 1. Dépose les fichiers dans /public/images/... (ex: /public/images/projects/villa-monolithe/cover.jpg)
// 2. Remplace la valeur correspondante ici par le chemin local ("/images/...")
// 3. Tu peux alors retirer le bloc `images.remotePatterns` dans next.config.ts

function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const STOCK_IMAGES = {
  about: {
    chantier: unsplash("photo-1566570144806-33f096699a57"), // équipe casques de chantier
  },
  projects: {
    "villa-monolithe": {
      cover: unsplash("photo-1512917774080-9991f1c4c750"), // villa béton face mer
      gallery: [
        unsplash("photo-1760340769739-653d00200baf"), // architecture béton brutaliste
        unsplash("photo-1512917774080-9991f1c4c750", 1400), // même villa, cadrage large
      ],
    },
    "siege-arkos": {
      cover: unsplash("photo-1745015446589-7ee6f702d8c1"), // façade vitrée bureaux
      gallery: [
        unsplash("photo-1763251177167-85a9ca1966a8"), // angle bâtiment vitré
        unsplash("photo-1745015446589-7ee6f702d8c1", 1400), // façade, cadrage large
      ],
    },
    "hangar-nexa": {
      cover: unsplash("photo-1760340769739-653d00200baf", 1600), // structure béton/industrielle
      gallery: [unsplash("photo-1763251177167-85a9ca1966a8", 1400)], // structure vitrée/métallique
    },
    "hotel-marais": {
      cover: unsplash("photo-1762419371724-62026e913a70"), // façade haussmannienne Paris
      gallery: [unsplash("photo-1762419371724-62026e913a70", 1400)], // façade, cadrage large
    },
  },
};
