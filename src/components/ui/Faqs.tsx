"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion"

const faqs = [
  {
    question: "¿Es realmente gratis?",
    answer:
      "Sí, el plan Free es gratis para siempre. Podés usar todas las funciones básicas sin costo.",
  },
  {
    question: "¿Puedo usarlo en varios dispositivos?",
    answer:
      "Sí, tu cuenta se sincroniza en la web, Android y iOS. Podés acceder desde cualquier dispositivo.",
  },
  {
    question: "¿Cómo funciona el bot de WhatsApp?",
    answer:
      "Solo le escribís y te responde con tus datos en segundos. Podés consultar gastos, agregar nuevos o ver quién te debe plata.",
  },
  {
    question: "¿Puedo exportar mis datos?",
    answer:
      "Sí, podés bajar un Excel con todos tus movimientos en cualquier momento.",
  },
  {
    question: "¿Es seguro?",
    answer:
      "Sí, usamos encriptación de nivel bancario para proteger todos tus datos.",
  },
]

export function Faqs() {
  return (
    <section className="mt-20 sm:mt-36" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-full sm:col-span-5">
          <h2
            id="faq-title"
            className="inline-block scroll-my-24 bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 pr-2 text-2xl font-bold tracking-tighter text-transparent lg:text-3xl dark:from-gray-50 dark:to-gray-300"
          >
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
            Can&rsquo;t find the answer you&rsquo;re looking for? Don&rsquo;t
            hesitate to get in touch with our{" "}
            <a
              href="#"
              className="font-medium text-green-600 hover:text-green-300 dark:text-green-400"
            >
              customer support
            </a>{" "}
            team.
          </p>
        </div>
        <div className="col-span-full mt-6 lg:col-span-7 lg:mt-0">
          <Accordion type="multiple" className="mx-auto">
            {faqs.map((item) => (
              <AccordionItem
                value={item.question}
                key={item.question}
                className="py-3 first:pb-3 first:pt-0"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
