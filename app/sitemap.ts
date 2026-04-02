import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, priority: 1, changeFrequency: "weekly" },
    { url: `${siteConfig.url}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${siteConfig.url}/avrupa-standartlari`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${siteConfig.url}/admin`, priority: 0.3, changeFrequency: "monthly" }
  ];
}
