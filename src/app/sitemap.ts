import type { MetadataRoute } from "next";

// Required for `output: export` (static generation at build time).
export const dynamic = "force-static";

const BASE_URL = "https://retake.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/produits/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mentions-legales/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/cgv/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politique-de-confidentialite/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
