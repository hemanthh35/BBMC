import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { SITE_URL, site } from "@/content/site";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { posts } from "@/content/blog";
import { heroSlides, interiors, projects } from "@/content/home";

// Sitemap with image entries, so Google Images can find BBMC's project and interior photos.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (p: string) => `${SITE_URL}${p}`;
  const page = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly" | "yearly" = "monthly",
    images: string[] = [],
  ) => ({
    url: abs(path),
    lastModified: now,
    changeFrequency,
    priority,
    ...(images.length ? { images: images.map(abs) } : {}),
  });

  return [
    page("", 1, "weekly", [...heroSlides.map((s) => s.image), ...projects.slice(0, 6).map((p) => p.image)]),
    page("/services", 0.9, "monthly", services.map((s) => s.image)),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9, "monthly", [s.image])),
    ...locations.map((l) => page(`/${l.slug}`, l.areas ? 0.8 : 0.7)),
    page("/locations", 0.8),
    page("/projects", 0.8, "monthly", [...projects, ...interiors].map((p) => p.image)),
    page("/about", 0.7, "monthly", [site.founder.image]),
    page("/faq", 0.6),
    page("/blog", 0.6, "weekly"),
    ...posts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.6, "monthly", [p.image]), lastModified: new Date(p.date) })),
    page("/privacy-policy", 0.2, "yearly"),
  ];
}
