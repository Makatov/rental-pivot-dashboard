import { BrandLayout } from '@/components/landing/brand-layout'
import { HeroSection } from '@/components/landing/hero-section'
import { ValueProps } from '@/components/landing/value-props'
import { HowItWorks } from '@/components/landing/how-it-works'
import { PricingSection } from '@/components/landing/pricing-section'
import { CatalogPreview } from '@/components/landing/catalog-preview'
import { Testimonials } from '@/components/landing/testimonials'
import { FAQSection } from '@/components/landing/faq-section'
import { CTASection } from '@/components/landing/cta-section'
import { rotateTheme } from '@/data/brand-themes'
import { rotatePlans } from '@/data/plans'
import { demoCatalog, rotateBrands } from '@/data/demo-catalog'
import { rotateTestimonials } from '@/data/testimonials'
import { rotateFaq } from '@/data/faq'
import { rotateFeatures } from '@/data/features'

const rotateItems = demoCatalog.filter(item =>
  ['Dolce Gabbana', 'Gucci', 'Burberry', 'Max Mara', 'Stella McCartney', 'Valentino', 'Fendi'].includes(item.brand)
)

export default function RotateDemoPage() {
  return (
    <BrandLayout brand="rotate" theme={rotateTheme}>
      <HeroSection theme={rotateTheme} />
      <ValueProps features={rotateFeatures} />
      <HowItWorks />
      <PricingSection plans={rotatePlans} />
      <CatalogPreview items={rotateItems} theme={rotateTheme} brands={rotateBrands} />
      <Testimonials testimonials={rotateTestimonials} />
      <FAQSection faqs={rotateFaq} />
      <CTASection />
    </BrandLayout>
  )
}
