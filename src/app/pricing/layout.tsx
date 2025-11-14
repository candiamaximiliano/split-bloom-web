import type { Metadata } from "next"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
  title: "Precios y Planes - Split Bloom",
  description:
    "Elegí el plan que mejor se adapte a tu estilo de vida. Planes desde gratis hasta PRO+ con funciones avanzadas. Cuidá tu plata, viví sin drama.",
  openGraph: {
    title: "Precios y Planes - Split Bloom",
    description:
      "Elegí el plan que mejor se adapte a tu estilo de vida. Planes desde gratis hasta PRO+ con funciones avanzadas.",
    url: `${siteConfig.url}/pricing`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Split Bloom - Precios y Planes",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios y Planes - Split Bloom",
    description:
      "Elegí el plan que mejor se adapte a tu estilo de vida. Planes desde gratis hasta PRO+ con funciones avanzadas.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="mx-auto mt-36 max-w-6xl">{children}</main>
}
