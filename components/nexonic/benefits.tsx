import { Layers, Cpu, Target, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: Layers,
    title: 'One Agency, Full System',
    desc: 'No more piecing together a designer, a marketer, and a developer. We build your brand, website, and growth engine as one connected system.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Efficiency',
    desc: 'We use AI automation to cut campaign turnaround time and optimize performance faster than traditional agencies.',
  },
  {
    icon: Target,
    title: 'Built to Convert',
    desc: 'Every site and campaign we ship is designed around one goal: turning visitors into leads and leads into customers.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven, Always',
    desc: 'Every decision — from ad spend to page layout — is backed by real performance data, not guesswork.',
  },
]

export function Benefits() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why NEXONIC
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-dark text-balance sm:text-5xl">
            Built different, on purpose
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex flex-col rounded-2xl border border-dark/10 bg-secondary p-7 transition-all duration-200 hover:-translate-y-1 hover:border-dark/20 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-lime-foreground">
                <benefit.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-dark">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
