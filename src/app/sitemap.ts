import type { MetadataRoute } from "next";

import { projects } from "../data/projects";

const SITE_URL = "https://mgdigitalagency.com.tr";

const locales = ["en", "tr"] as const;

const staticPages = [
  "",
  "/about",
  "/services",
  "/expertise",
  "/work",
  "/insights",
  "/contact",
  "/privacy",
  "/cookies",
];

const insightSlugs = [
  "hospitality-brands-need-more-than-content",
  "from-destination-to-desire",
  "performance-without-brand-is-a-dead-end",
  "luxury-is-not-an-aesthetic",
  "brands-that-belong-to-culture",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${SITE_URL}/${locale}${page}`,
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority:
        page === ""
          ? 1
          : page === "/work" || page === "/services"
            ? 0.9
            : page === "/insights" || page === "/expertise"
              ? 0.8
              : 0.7,
    }))
  );

  const projectRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${SITE_URL}/${locale}/work/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  const insightRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    insightSlugs.map((slug) => ({
      url: `${SITE_URL}/${locale}/insights/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...insightRoutes,
  ];
}