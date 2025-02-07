import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import { DatabaseLogo } from "../../../public/DatabaseLogo"
import ThemeSwitch from "../ThemeSwitch"

const navigation = {
  product: [
    { name: "Cómo funciona", href: "#hiw-title", external: false },
    { name: "Precios", href: "/pricing", external: false },
    {
      name: "Preguntas frecuentes",
      href: "/pricing#faq-title",
      external: false,
    },
    { name: "Quienes somos", href: "/about", external: false },
  ],
  resources: [
    { name: "Blog de Finanzas", href: "/blog", external: false },
    {
      name: "Guía para dividir gastos",
      href: "/blog/guia-para-dividir-gastos",
      external: true,
    },
    {
      name: "Soporte en WhatsApp",
      href: "https://wa.me/5491170636744",
      external: true,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@splitbloom",
      external: true,
    },
  ],
  company: [
    {
      name: "Feedback",
      href: "https://splitbloom.featurebase.app/en",
      external: true,
    },
    {
      name: "Roadmap",
      href: "https://splitbloom.featurebase.app/en/roadmap",
      external: true,
    },
    {
      name: "Changelog",
      href: "https://splitbloom.featurebase.app/en/changelog",
      external: true,
    },
    {
      name: "Centro de ayuda",
      href: "https://splitbloom.featurebase.app/en/help",
      external: true,
    },
  ],
  legal: [
    { name: "Términos y Condiciones", href: "/terms", external: false },
    { name: "Política de Privacidad", href: "/privacy", external: false },
    { name: "Seguridad y Datos", href: "/security", external: false },
    { name: "Cookies", href: "/cookies", external: false },
  ],
}

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <DatabaseLogo className="w-32 sm:w-40" />
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Redefiniendo la forma de administrarte.
              <br />
              💸 Cuidá tu plata, viví sin drama 🚀🔥
            </p>
            <div className="flex space-x-6">
              <ThemeSwitch />
            </div>
            <div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div className="min-w-[140px]">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Producto
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Product"
                >
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="flex items-center whitespace-nowrap rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-[140px]">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Recursos
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Resources"
                >
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="flex items-center whitespace-nowrap rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="min-w-[140px]">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Empresa
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Company"
                >
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="flex items-center whitespace-nowrap rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-[140px]">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Legales
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Legal"
                >
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="flex items-center whitespace-nowrap rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Split Bloom, diseñado con amor y
            dedicación 💚 por Store Max. Todos los derechos reservados.
          </p>
          <div className="rounded-full border border-gray-200 py-1 pl-1 pr-2 dark:border-gray-800">
            <div className="flex items-center gap-1.5">
              <div className="relative size-4 shrink-0">
                <div className="absolute inset-[1px] rounded-full bg-emerald-500/20 dark:bg-emerald-600/20" />
                <div className="absolute inset-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />
              </div>
              <span className="text-xs text-gray-700 dark:text-gray-50">
                Todos los sistemas funcionando
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
