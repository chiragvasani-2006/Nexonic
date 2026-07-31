import { Navbar } from '@/components/nexonic/navbar'
import { Hero } from '@/components/nexonic/hero'
import { StatsBar } from '@/components/nexonic/stats-bar'
import { About } from '@/components/nexonic/about'
import { Services } from '@/components/nexonic/services'
import { Benefits } from '@/components/nexonic/benefits'
import { HowItWorks } from '@/components/nexonic/how-it-works'
import { Industries } from '@/components/nexonic/industries'
import { Faq } from '@/components/nexonic/faq'
import { FinalCta } from '@/components/nexonic/final-cta'
import { Footer } from '@/components/nexonic/footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Benefits />
      <HowItWorks />
      <Industries />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
