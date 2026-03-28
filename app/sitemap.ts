export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ziggyhr.com";
  const now = new Date();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/features", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/vs/bamboohr", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/vs/rippling", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/small-business", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/restaurants", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/retail", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contractors", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${base}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
