import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import TeamGallery from "@/components/ui/TeamGallery"
import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer"

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Sobre Split Bloom</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            Tu compañero de confianza para manejar gastos compartidos
          </Balancer>
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-gray-700 dark:text-gray-400">
          La forma en que manejamos el dinero está cambiando, y queremos ser
          parte de esa revolución. <br />
          Split Bloom está en el centro de esta transformación, haciendo que las
          finanzas personales sean simples y sociales.
        </p>
      </section>
      <TeamGallery />
      <section aria-labelledby="stats-title" className="mx-auto mt-40">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-green-600 dark:text-green-400">
              +50,000
            </span>
            <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Usuarios activos
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-green-600 dark:text-green-400">
              4.8/5
            </span>
            <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Rating en App Store
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-green-600 dark:text-green-400">
              99.9%
            </span>
            <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Uptime garantizado
            </span>
          </div>
        </div>
      </section>
      <section aria-labelledby="vision-title" className="mx-auto mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Nuestra Misión
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            Creemos que las finanzas compartidas no deberían ser una fuente de
            estrés. Por eso, desarrollamos una plataforma que hace que dividir
            gastos sea tan natural como mandar un mensaje. Con tecnología de
            punta y las más altas medidas de seguridad, nos aseguramos de que tu
            dinero y datos estén siempre protegidos.
          </p>
          <p className="text-lg leading-8">
            Nuestro compromiso es mantener la transparencia y simplicidad en
            cada aspecto. Desde nuestra política de cero comisiones ocultas
            hasta nuestro soporte 24/7, trabajamos para que puedas enfocarte en
            lo importante: disfrutar los momentos con tus seres queridos sin
            preocuparte por las cuentas.
          </p>
          <p
            className={cx(
              "w-fit rotate-3 font-handwriting text-3xl text-green-600 dark:text-green-400",
            )}
          >
            Split Bloom - Simple, Social, Seguro
          </p>
        </div>
        <Button
          asChild
          className="mt-32 h-10 w-full shadow-xl shadow-green-500/20"
        >
          <a href="/pricing">Comenzá Gratis</a>
        </Button>
      </section>
    </div>
  )
}
