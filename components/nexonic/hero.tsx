import Image from 'next/image'
import { CtaButton } from './cta-button'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-dark/15 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-dark/70">
            <span className="h-2 w-2 rounded-full bg-lime" />
                 Digital Growth Agency
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-dark text-balance sm:text-6xl lg:text-7xl">
            Digital Growth.{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Engineered.</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-lime sm:h-5" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            NEXONIC is an AI-powered digital growth agency that builds complete
            systems branding, websites, performance marketing, and automation
            designed to generate leads, drive sales, and scale your business
            long-term.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton className="px-8 py-3.5 text-base" />
            <a
              href="#services"
              className="text-sm font-semibold text-dark underline-offset-4 hover:underline"
            >
              Explore our services
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Angular accent motif echoing the infinity mark */}
          <div className="absolute -left-6 -top-6 z-0 hidden h-24 w-24 rotate-45 border-4 border-lime sm:block" />
          <div className="absolute -bottom-6 -right-6 z-0 hidden h-20 w-20 bg-lime sm:block [clip-path:polygon(0_0,100%_0,100%_100%)]" />

          <div className="relative z-10 overflow-hidden rounded-2xl border border-dark/10 [clip-path:polygon(0_0,100%_0,100%_88%,88%_100%,0_100%)]">
            <Image
              src="/hero-growth.png"
              alt="NEXONIC team analyzing digital growth analytics"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 z-20 rounded-xl bg-dark px-5 py-4 shadow-xl">
            <p className="font-display text-3xl font-bold text-lime">+247%</p>
            <p className="text-xs font-medium text-white/70">
              Avg. lead growth
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
