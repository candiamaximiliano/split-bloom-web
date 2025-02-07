import { Button } from "@/components/Button"
import { ArrowAnimated } from "@/components/ui/ArrowAnimated"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "./siteConfig"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href={siteConfig.baseLinks.home}>
        <Image
          src="/images/404.png"
          alt="Split Bloom 404"
          width={300}
          height={300}
        />
      </Link>
      <p className="mt-6 text-4xl font-semibold text-green-600 sm:text-5xl dark:text-green-500">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        Página no encontrada
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Lo sentimos, no pudimos encontrar la página que estabas buscando.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={siteConfig.baseLinks.home}>
          Volver a la página principal
          <ArrowAnimated
            className="stroke-gray-900 dark:stroke-gray-50"
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  )
}
