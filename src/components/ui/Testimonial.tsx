import Image from "next/image"
import Balancer from "react-wrap-balancer"

export default function Testimonial() {
  return (
    <section id="testimonial" aria-label="Testimonial">
      <figure className="mx-auto">
        <blockquote className="mx-auto max-w-2xl text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 dark:text-gray-50">
          <p>
            <Balancer>
              &ldquo;Con mis amigos siempre nos peleábamos por la cuenta. Ahora
              Split Bloom nos dice quién debe qué y listo. 10/10.&rdquo;
            </Balancer>
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center justify-center gap-x-5">
          <Image
            className="h-11 w-11 rounded-full object-cover shadow-lg shadow-green-500/50 ring-2 ring-white dark:ring-gray-700"
            width={200}
            height={200}
            src="/images/testimonial.webp"
            alt="Foto de Sofía"
          />
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-50">
              Sofía
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">26 años</p>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
