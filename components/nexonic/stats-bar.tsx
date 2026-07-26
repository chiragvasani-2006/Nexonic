const stats = [
  { value: '11+', label: 'Industries Served' },
  { value: '100%', label: 'AI-Powered Strategy' },
  { value: 'Full-Funnel', label: 'Growth System' },
  { value: '24/7', label: 'Automation & Optimization' },
]

export function StatsBar() {
  return (
    <section className="bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-lime/30 pl-4"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-lime sm:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm font-medium text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
