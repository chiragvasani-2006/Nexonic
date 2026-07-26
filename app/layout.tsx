import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/hooks/useModal'
import ConsultationModal from '@/components/ConsultationModal'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NEXONIC — AI-Powered Digital Growth Agency',
  description:
    'NEXONIC is an AI-powered digital growth agency that builds complete systems — branding, websites, performance marketing, and automation — designed to generate leads, drive sales, and scale your business.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ModalProvider>
          {children}
          <ConsultationModal />
        </ModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
