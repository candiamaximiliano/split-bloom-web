import type { Metadata } from "next"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
  title: "Sobre Nosotros - Split Bloom",
  description:
    "Conocé más sobre Split Bloom, tu compañero de confianza para manejar gastos compartidos. Descubrí nuestra misión, valores y el equipo detrás de la app que te ayuda a controlar tus finanzas.",
  openGraph: {
    title: "Sobre Nosotros - Split Bloom",
    description:
      "Conocé más sobre Split Bloom, tu compañero de confianza para manejar gastos compartidos. Descubrí nuestra misión y valores.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Split Bloom - Sobre Nosotros",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros - Split Bloom",
    description:
      "Conocé más sobre Split Bloom, tu compañero de confianza para manejar gastos compartidos.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="mx-auto mt-36 max-w-6xl">{children}</main>
}
