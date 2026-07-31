import { CtaButton } from './cta-button'

const steps = [
  {
    title: 'Book a Free Consultation',
    desc: "Tell us about your business, your goals, and where you're stuck.",
  },
  {
    title: 'Get a Growth Roadmap',
    desc: 'We map out branding, website, and marketing strategy tailored to your industry.',
  },
  {
    title: 'We Build & Launch',
    desc: 'Our team executes — design, development, campaigns, automation — while you focus on running your business.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-lime">
              How it works
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white text-balance sm:text-5xl">
              From first call to full launch
            </h2>
          </div>
          <CtaButton className="shrink-0" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl font-bold text-lime">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="hidden h-px flex-1 bg-white/15 md:block" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
