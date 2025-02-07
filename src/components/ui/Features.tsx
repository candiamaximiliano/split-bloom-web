import {
  RiAccountCircleLine,
  RiBellLine,
  RiLineChartLine,
  RiMoneyDollarCircleLine,
  RiTeamLine,
} from "@remixicon/react"
import { Badge } from "../Badge"

const features = [
  {
    title: "Creá tu cuenta",
    description:
      'Abrí la app o la versión web y registrate. Listo, ya tenés tu "branch" personal de finanzas donde vas a ver todos tus movimientos.',
    icon: RiAccountCircleLine,
    step: 1,
  },
  {
    title: "Anotá tus gastos e ingresos",
    description:
      'Efectivo, tarjeta, transferencias… Cargá todo y dejá que Split Bloom lo ordene. Podés incluso usar "backups" automáticos en la nube para no perder nada.',
    icon: RiMoneyDollarCircleLine,
    step: 2,
  },
  {
    title: "Sumá a tus amigos o familiares",
    description:
      'Creá un grupo y dividí gastos en segundos. La app hace la "magia" de decir quién le debe a quién, sin dramas.',
    icon: RiTeamLine,
    step: 3,
  },
  {
    title: "Insights en vivo",
    description:
      'Entrá a la sección "Insights" y mirá tus gastos mes a mes, con gráficas de "Allowed" (gastos validados), "Suspect" (alertas de gastos inesperados) y "Blocked" (transacciones que decidís bloquear o corregir).',
    icon: RiLineChartLine,
    step: 4,
  },
  {
    title: "Recibí alertas y notificaciones",
    description:
      "Activá notificaciones para saber si estás cerca de pasarte de tu presupuesto o si tenés un pago recurrente por vencer.",
    icon: RiBellLine,
    step: 5,
  },
]

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto mt-44 w-full max-w-6xl px-3"
    >
      <Badge>¿Cómo funciona?</Badge>
      <h2
        id="features-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        En simple pasos
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Descubrí todas las funciones que Split Bloom tiene para ofrecerte y
        empezá a manejar tu plata de forma inteligente.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-1 lg:gap-12">
        {features.map((feature) => (
          <div
            key={feature.step}
            className="group relative flex items-start gap-8 rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-green-500 hover:shadow-lg dark:border-gray-800 hover:dark:border-green-600"
          >
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white dark:bg-green-950 dark:text-green-400 dark:group-hover:bg-green-600 dark:group-hover:text-white">
                <feature.icon className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white group-hover:bg-green-800">
                  {feature.step}
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
