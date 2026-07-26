import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What industries do you work with?',
    a: 'We work with startups, SMEs, e-commerce brands, healthcare providers, real estate companies, restaurants, retailers, manufacturers, and professional service firms — basically any business ready to grow online.',
  },
  {
    q: 'Do I need to already have a website or branding?',
    a: 'No. We can build your brand identity, website, and marketing strategy from the ground up — or work with what you already have.',
  },
  {
    q: 'What makes NEXONIC different from a typical marketing agency?',
    a: "We don't just run ads or design a website — we build your entire digital growth system, using AI automation to move faster and deliver measurable results.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-dark text-balance sm:text-5xl">
            Questions, answered
          </h2>
        </div>

        <Accordion className="mt-12 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="border-b border-dark/10"
            >
              <AccordionTrigger className="py-6 text-left font-display text-lg font-bold tracking-tight text-dark hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
