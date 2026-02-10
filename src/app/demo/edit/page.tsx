import { BrandLayout } from '@/components/landing/brand-layout'
import { HeroSection } from '@/components/landing/hero-section'
import { ValueProps } from '@/components/landing/value-props'
import { HowItWorks } from '@/components/landing/how-it-works'
import { PricingSection } from '@/components/landing/pricing-section'
import { CatalogPreview } from '@/components/landing/catalog-preview'
import { Testimonials } from '@/components/landing/testimonials'
import { FAQSection } from '@/components/landing/faq-section'
import { CTASection } from '@/components/landing/cta-section'
import { editTheme } from '@/data/brand-themes'
import { editPlans } from '@/data/plans'
import { demoCatalog, editBrands } from '@/data/demo-catalog'
import { editTestimonials } from '@/data/testimonials'
import { editFaq } from '@/data/faq'
import { editFeatures } from '@/data/features'

const editItems = demoCatalog.filter(item =>
  ['Dior', 'Louis Vuitton', 'Brunello Cucinelli', 'Prada', 'Christian Louboutin', 'Fendi'].includes(item.brand)
)

export default function EditDemoPage() {
  return (
    <BrandLayout brand="edit" theme={editTheme}>
      <HeroSection theme={editTheme} />
      <ValueProps features={editFeatures} />
      <HowItWorks />
      <PricingSection plans={editPlans} />
      <CatalogPreview items={editItems} theme={editTheme} brands={editBrands} />
      <Testimonials testimonials={editTestimonials} />
      <FAQSection faqs={editFaq} />
      <CTASection />
    </BrandLayout>
  )
}
