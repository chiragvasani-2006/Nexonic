'use client'

import { useAnimate } from 'motion/react'
import {
  Briefcase,
  Rocket,
  Building2,
  ShoppingCart,
  HeartPulse,
  Home,
  GraduationCap,
  UtensilsCrossed,
  Store,
  Factory,
  Users,
  type LucideIcon,
} from 'lucide-react'

const industries = [
  { label: 'Business Owners', icon: Briefcase },
  { label: 'Startups', icon: Rocket },
  { label: 'SMEs', icon: Building2 },
  { label: 'E-commerce Brands', icon: ShoppingCart },
  { label: 'Healthcare & Clinics', icon: HeartPulse },
  { label: 'Real Estate', icon: Home },
  { label: 'Educational Institutes', icon: GraduationCap },
  { label: 'Restaurants & Cafés', icon: UtensilsCrossed },
  { label: 'Retail', icon: Store },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Professional Services', icon: Users },
]

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)'
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)'
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)'
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)'

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
}

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
}

type Side = 'left' | 'right' | 'top' | 'bottom'

function IndustryBox({ Icon, label }: { Icon: LucideIcon; label: string }) {
  const [scope, animate] = useAnimate()

  const getNearestSide = (e: React.MouseEvent<HTMLDivElement>): Side => {
    const box = e.currentTarget.getBoundingClientRect()

    const proximity = [
      { proximity: Math.abs(box.left - e.clientX), side: 'left' as const },
      { proximity: Math.abs(box.right - e.clientX), side: 'right' as const },
      { proximity: Math.abs(box.top - e.clientY), side: 'top' as const },
      { proximity: Math.abs(box.bottom - e.clientY), side: 'bottom' as const },
    ].sort((a, b) => a.proximity - b.proximity)

    return proximity[0].side
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const side = getNearestSide(e)
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const side = getNearestSide(e)
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] })
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-28 w-full place-content-center bg-background text-dark sm:h-32 md:h-36"
    >
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
        <span className="font-display text-sm font-bold leading-tight tracking-tight sm:text-base">
          {label}
        </span>
      </div>

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-dark text-lime"
      >
        <div className="flex flex-col items-center gap-3 px-4 text-center">
          <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
          <span className="font-display text-sm font-bold leading-tight tracking-tight text-background sm:text-base">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Industries() {
  return (
    <section id="industries" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Industries we serve
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-dark text-balance sm:text-5xl">
            Growth systems for every kind of business
          </h2>
        </div>

        <div className="mt-12 divide-y divide-dark border border-dark">
          <div className="grid grid-cols-2 divide-x divide-dark md:grid-cols-3">
            {industries.slice(0, 3).map((industry) => (
              <IndustryBox key={industry.label} Icon={industry.icon} label={industry.label} />
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-dark md:grid-cols-4">
            {industries.slice(3, 7).map((industry) => (
              <IndustryBox key={industry.label} Icon={industry.icon} label={industry.label} />
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-dark md:grid-cols-4">
            {industries.slice(7, 11).map((industry) => (
              <IndustryBox key={industry.label} Icon={industry.icon} label={industry.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
