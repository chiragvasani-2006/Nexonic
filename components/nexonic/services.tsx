import { cn } from '@/lib/utils'

const services = [
  { title: 'Website Development', desc: 'Fast, conversion-focused sites built to turn visitors into customers.' },
  { title: 'Branding & Identity', desc: 'Distinct brand systems that make you unforgettable and trusted.' },
  { title: 'SEO', desc: 'Rank higher and capture high-intent organic traffic that converts.' },
  { title: 'Google Ads', desc: 'Search and display campaigns engineered for measurable ROI.' },
  { title: 'Meta Ads', desc: 'Facebook & Instagram funnels that reach and convert your audience.' },
  { title: 'Social Media Marketing', desc: 'Consistent, on-brand presence that builds community and demand.' },
  { title: 'Content Creation', desc: 'Scroll-stopping creative and copy tailored to each platform.' },
  { title: 'AI Automation', desc: 'Automated workflows that cut turnaround time and scale output.' },
  { title: 'Lead Generation', desc: 'Full-funnel systems that fill your pipeline with qualified leads.' },
  { title: 'Business Consulting', desc: 'Strategic guidance to align growth with your business goals.' },
  { title: 'E-commerce Solutions', desc: 'Storefronts and campaigns built to maximize online sales.' },
]

export function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What we do
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-dark text-balance sm:text-5xl">
            A complete stack of growth services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Everything you need to build, launch, and scale your digital
            presence — under one roof.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-dark/10 bg-dark/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const dark = i % 2 === 1
            return (
              <div
                key={service.title}
                className={cn(
                  'group flex flex-col gap-4 p-8 transition-colors duration-200',
                  dark
                    ? 'bg-dark hover:bg-dark-mid'
                    : 'bg-background hover:bg-secondary',
                )}
              >
                <span className="font-display text-2xl font-bold text-lime">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className={cn(
                    'font-display text-xl font-bold tracking-tight',
                    dark ? 'text-white' : 'text-dark',
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    dark ? 'text-white/60' : 'text-muted-foreground',
                  )}
                >
                  {service.desc}
                </p>
              </div>
            )
          })}
          {/* filler cell to complete the 12-slot grid on lg */}
          <div className="hidden bg-lime p-8 lg:flex lg:flex-col lg:justify-center">
            <p className="font-display text-2xl font-bold leading-tight text-lime-foreground text-balance">
              Need it all? We build it as one system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
