import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://your-domain.com";
  return [
    { url: base },
    { url: base + "/about" },
    { url: base + "/courses" },
    { url: base + "/testimonials" },
    { url: base + "/faq" },
    { url: base + "/contact" },
  ];
}
