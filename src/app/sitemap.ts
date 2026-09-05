import type { MetadataRoute } from "next";

// Required for `output: export` (static generation at build time).
export const dynamic = "force-static";

const BASE_URL = "https://retake.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: "2026-09-06",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/produits/`,
      lastModified: "2026-09-06",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mentions-legales/`,
      lastModified: "2026-09-06",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/cgv/`,
      lastModified: "2024-11-22",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politique-de-confidentialite/`,
      lastModified: "2026-09-06",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
