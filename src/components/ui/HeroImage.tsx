"use client"

import Image from "next/image"

export default function HeroImage() {
  return (
    <section aria-label="Hero Image of the website" className="flow-root">
      <div className="rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
        <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src="/images/screenshot.png"
              alt="Vista previa de la aplicación Split Bloom"
              width={2400}
              height={1600}
              className="h-auto w-full rounded-xl shadow-2xl dark:shadow-green-600/10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
