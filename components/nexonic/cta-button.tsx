"use client"
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useModal } from '@/hooks/useModal'

type Variant = 'lime' | 'dark' | 'outline'

const variants: Record<Variant, string> = {
  lime: 'bg-lime text-lime-foreground hover:bg-lime/90',
  dark: 'bg-dark text-white hover:bg-dark-mid',
  outline:
    'border border-dark/20 text-dark hover:border-dark hover:bg-dark hover:text-white',
}

export function CtaButton({
  variant = 'lime',
  className,
  children = 'Book a Free Consultation',
  showIcon = true,
  href = '#contact',
}: {
  variant?: Variant
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
  href?: string
}) {
  const { openModal } = useModal()

  const shouldOpenModal = typeof children === 'string' && String(children).trim() === 'Book a Free Consultation' || href === '#contact'

  if (shouldOpenModal) {
    return (
      <button
        type="button"
        onClick={openModal}
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200',
          variants[variant],
          className,
        )}
      >
        {children}
        {showIcon && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200',
        variants[variant],
        className,
      )}
    >
      {children}
      {showIcon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  )
}
