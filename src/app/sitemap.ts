import { MetadataRoute } from "next"
import { siteConfig } from "./siteConfig"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(siteConfig.baseLinks).map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }))

  return routes
}
