import { ArrowUpRight, Sparkles } from 'lucide-react'
import { CtaButton } from './cta-button'

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-lime">
      {/* subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-dark px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-lime">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Transform Your Digital Trajectory
          </span>

          <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-lime-foreground text-balance sm:text-5xl lg:text-6xl">
            Ready to build a digital presence that actually grows your business?
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-lime-foreground/70 text-pretty sm:text-lg">
            Get your custom AI-powered growth roadmap. No fluff, no hard sell —
            just a clear strategy tailored to your exact industry.
          </p>

          <CtaButton className="shrink-0 px-8 py-4 font-display text-base font-bold" showIcon>
            Book a Free Consultation
          </CtaButton>

          <p className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-lime-foreground/60">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            30-Minute Strategy Session • Zero Obligation
          </p>
        </div>
      </div>
    </section>
  )
}
