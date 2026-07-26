import Image from 'next/image'
import { CtaButton } from './cta-button'

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -right-4 -top-4 z-0 hidden h-20 w-20 rotate-45 bg-lime lg:block" />
          <div className="relative z-10 overflow-hidden rounded-2xl border border-dark/10 [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%,0_12%)]">
            <Image
              src="/about-team.png"
              alt="The NEXONIC team building digital growth systems"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Who we are
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-dark text-balance sm:text-5xl">
            We Don't Just Build Digital Presence.{' '}
            <span className="text-dark underline decoration-lime decoration-4 underline-offset-8">
              We Build Growth.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every business has a vision, but turning that vision into sustainable growth requires more than a website or a marketing campaign. It requires the right strategy, the right technology, and the right partner.

            At NOXONIC, we combine branding, high-performance websites, AI automation, and data-driven marketing to create digital experiences that attract customers, build trust, and drive measurable business growth. Every solution we deliver is tailored to your goals, ensuring every click, campaign, and customer interaction moves your business forward.

            We're not here to sell services we're here to build lasting partnerships and help ambitious businesses grow with confidence in a digital-first world.
          </p>

          <div className="mt-8">
            <CtaButton variant="outline" />
          </div>
        </div>
      </div>
    </section>
  )
}
