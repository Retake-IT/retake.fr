/**
 * Structured-data (schema.org) builders shared across pages.
 * Keep the facts here consistent with the legal pages and llms.txt.
 */

export const SITE_URL = "https://retake.fr";

const ORG_ID = `${SITE_URL}/#organization`;

export const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORG_ID,
  name: "Retake",
  legalName: "Léo Nonnenmacher — Retake",
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.webp`,
  image: `${SITE_URL}/og.png`,
  description:
    "Retake rachète le matériel informatique inutilisé des entreprises, le reconditionne et le revend à prix accessible aux particuliers et associations.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Léo Nonnenmacher",
  },
  email: "contact@retake.fr",
  telephone: "+33611036002",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 rue de la Fonderie",
    postalCode: "67000",
    addressLocality: "Strasbourg",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  priceRange: "€€",
  vatID: "984971499",
  knowsAbout: [
    "rachat de matériel informatique",
    "reconditionnement informatique",
    "effacement de données",
    "réemploi et recyclage des équipements électroniques (DEEE)",
  ],
  sameAs: [
    "https://www.linkedin.com/company/retake-leo-nonnenmacher",
    "https://github.com/Retake-IT",
  ],
};

export const websiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Retake",
  inLanguage: "fr-FR",
  publisher: { "@id": ORG_ID },
};

export function faqPageSchema(
  items: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
