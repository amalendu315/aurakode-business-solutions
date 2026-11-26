import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://aurakode.in/sitemap.xml",
    host: "https://aurakode.in",
  };
}
