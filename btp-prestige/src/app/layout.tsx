// src/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { COMPANY, SEO } from "@/data/company";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: `${COMPANY.name} — Architettura e costruzioni di alta gamma`,
    template: `%s — ${COMPANY.name}`,
  },
  description:
    "Realizziamo opere d'eccellenza dove precisione ingegneristica e rigore architettonico diventano un tutt'uno.",
  keywords: [...SEO.keywords],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SEO.siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Architettura e costruzioni di alta gamma`,
    description:
      "Realizziamo opere d'eccellenza dove precisione ingegneristica e rigore architettonico diventano un tutt'uno.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SEO.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Architecture & Construction Haut de Gamme`,
    description: COMPANY.baseline,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${plusJakartaSans.variable} ${outfit.variable}`}
    >
      <body className="bg-cream-50 text-anthracite font-sans antialiased selection:bg-terracotta/20 selection:text-anthracite">
        <LanguageProvider>
          <JsonLd />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}