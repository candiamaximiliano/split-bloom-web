import { MetadataRoute } from "next"
import { siteConfig } from "./siteConfig"

export default function sitemap(): MetadataRoute.Sitemap {
  // Fecha base para páginas estáticas (puedes actualizar cuando hagas cambios significativos)
  const baseDate = new Date("2024-01-01")
  
  const routes = Object.values(siteConfig.baseLinks).map((route) => {
    // Determinar changeFrequency según el tipo de página
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "monthly"
    if (route === "/changelog1") {
      changeFrequency = "weekly"
    } else if (route === "/") {
      changeFrequency = "weekly"
    }
    
    // Determinar priority según importancia
    let priority = 0.8
    if (route === "/") {
      priority = 1.0
    } else if (route === "/pricing") {
      priority = 0.9
    }
    
    return {
      url: `${siteConfig.url}${route}`,
      lastModified: baseDate,
      changeFrequency,
      priority,
    }
  })

  return routes
}
