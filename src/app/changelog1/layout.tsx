import type { Metadata } from "next"
import Balancer from "react-wrap-balancer"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
  title: "Changelog - Split Bloom",
  description:
    "Mantente informado sobre las últimas adiciones y mejoras que hemos hecho a Split Bloom. Descubrí nuevas funcionalidades y actualizaciones.",
  openGraph: {
    title: "Changelog - Split Bloom",
    description:
      "Mantente informado sobre las últimas adiciones y mejoras que hemos hecho a Split Bloom.",
    url: `${siteConfig.url}/changelog1`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Split Bloom - Changelog",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog - Split Bloom",
    description:
      "Mantente informado sobre las últimas adiciones y mejoras que hemos hecho a Split Bloom.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/changelog1`,
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main
      className="mx-auto mt-36 max-w-3xl animate-slide-up-fade px-3"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          <Balancer>
            Keep yourself informed about the most recent additions and
            improvements we&rsquo;ve made to Database.
          </Balancer>
        </p>
      </div>
      <div className="mt-28">{children}</div>
    </main>
  )
}
