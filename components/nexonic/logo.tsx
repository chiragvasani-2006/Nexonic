import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md',
        onDark && 'bg-white px-2 py-1',
        className,
      )}
    >
      <Image
        src="/nexonic-logo.png"
        alt="NEXONIC logo"
        width={132}
        height={44}
        priority
        className="h-8 w-auto"
      />
    </div>
  )
}
