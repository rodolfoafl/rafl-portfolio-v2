import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projetos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
