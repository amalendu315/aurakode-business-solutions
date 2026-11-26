import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const origin = "https://aurakode.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/services/website-design-siliguri`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/services/branding-siliguri`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/services/seo-siliguri`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map(({ slug }) => ({ url: `${origin}/projects/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${origin}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${origin}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${origin}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
