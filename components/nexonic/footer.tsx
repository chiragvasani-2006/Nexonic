import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, AtSign, Send, MessageCircle } from 'lucide-react'
import { Logo } from './logo'
import { CtaButton } from './cta-button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
]

const socials = [
  { label: 'LinkedIn', href: '#', icon: Globe },
  { label: 'Instagram', href: '#', icon: AtSign },
  { label: 'X', href: '#', icon: MessageCircle },
  { label: 'Telegram', href: '#', icon: Send },
]

export function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo onDark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              NEXONIC is an AI-powered digital growth agency building complete
              systems — branding, websites, performance marketing, and
              automation — designed to scale your business.
            </p>
            <div className="mt-6">
              <CtaButton />
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-lime" />
                <a href="mailto:nexonic.marketing@gmail.com" className="hover:text-lime">
                  nexonic.marketing@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-lime" />
                <a href="tel:+917265985766" className="hover:text-lime">
                  +91 72659 85766
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                <span>Rajkot, Gujrat, India </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-lime hover:bg-lime hover:text-lime-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} NEXONIC Marketing Agency. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
