import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    ...locations.map((l) => page(`/${l.slug}`, 0.8)),
    page("/locations", 0.7),
    page("/projects", 0.7),
    page("/about", 0.7),
    page("/contact", 0.8),
    page("/faq", 0.6),
    page("/blog", 0.6, "weekly"),
    ...posts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.6), lastModified: new Date(p.date) })),
    page("/privacy-policy", 0.2, "yearly"),
  ];
}
