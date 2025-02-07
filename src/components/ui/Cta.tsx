"use client"
import { RiComputerLine } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"
import { Button } from "../Button"
import { ArrowAnimated } from "./ArrowAnimated"

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="mx-auto mb-20 mt-32 max-w-6xl p-1 px-2 sm:mt-56"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mask pointer-events-none absolute -z-10 select-none opacity-70"
          aria-hidden="true"
        >
          <div className="flex size-full flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="flex size-full gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="size-5 rounded-md shadow shadow-green-500/20 ring-1 ring-black/5 dark:shadow-green-500/20 dark:ring-white/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3
                id="cta-title"
                className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent md:text-6xl dark:from-gray-50 dark:to-gray-300"
              >
                Split Bloom está donde vos estás
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg dark:text-gray-400">
                <Balancer>
                  No importa si sos #TeamiPhone, #TeamAndroid o usás tu compu,
                  Split Bloom funciona en todos lados.
                </Balancer>
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                className="!bg-white/30 p-0.5 !shadow-xl !shadow-white/10"
                asChild
              >
                <Link href="#" className="group">
                  <Image
                    src="/images/app-store.png"
                    alt="App Store"
                    width={150}
                    height={50}
                  />
                </Link>
              </Button>
              <Button
                className="!bg-white/30 px-0 py-0.5 !shadow-xl !shadow-white/10"
                asChild
              >
                <Link href="#" className="group">
                  <Image
                    src="/images/google-play.png"
                    alt="Google Play"
                    width={150}
                    height={50}
                  />
                </Link>
              </Button>
              <Button className="!shadow-xl !shadow-white/10" asChild>
                <Link href="#" className="group">
                  <RiComputerLine className="mr-2" /> Versión web
                  <ArrowAnimated />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              ¿Tenés dudas?{" "}
              <a
                href="#"
                className="font-semibold text-green-600 hover:text-green-500 dark:text-green-500 dark:hover:text-green-400"
              >
                Hablá con soporte
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
