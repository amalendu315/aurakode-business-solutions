import type { MetadataRoute } from "next";

const origin = "https://aurakode.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/services/website-design-siliguri`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/services/branding-siliguri`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/services/seo-siliguri`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
