// src/components/seo/JsonLd.tsx
import { COMPANY, SEO } from "@/data/company";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: COMPANY.name,
    description: COMPANY.baseline,
    url: SEO.siteUrl,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: String(COMPANY.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO.geo.latitude,
      longitude: SEO.geo.longitude,
    },
    areaServed: "FR",
    priceRange: "€€€",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}