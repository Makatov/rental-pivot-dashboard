import { BrandLayout } from '@/components/landing/brand-layout'
import { HeroSection } from '@/components/landing/hero-section'
import { PressBar } from '@/components/landing/press-bar'
import { HowItWorks } from '@/components/landing/how-it-works'
import { CollectionsGrid } from '@/components/landing/collections-grid'
import { ValueSection } from '@/components/landing/value-section'
import { Testimonials } from '@/components/landing/testimonials'
import { CTASection } from '@/components/landing/cta-section'
import { editTheme } from '@/data/brand-themes'
import { demoCatalog } from '@/data/demo-catalog'
import { editTestimonials } from '@/data/testimonials'
import { editHeroImage } from '@/data/brand-images'

const editItems = demoCatalog.filter(item =>
  ['Dior', 'Brunello Cucinelli', 'Prada', 'Christian Louboutin', 'Fendi'].includes(item.brand)
)

export default function EditDemoPage() {
  return (
    <BrandLayout brand="edit" theme={editTheme}>
      <HeroSection theme={editTheme} variant="editorial" backgroundImage={editHeroImage} />
      <PressBar brand="edit" />
      <HowItWorks variant="minimal" />
      <CollectionsGrid items={editItems} />
      <ValueSection items={editItems} theme={editTheme} />
      <Testimonials testimonials={editTestimonials} variant="editorial" />
      <CTASection variant="editorial" />
    </BrandLayout>
  )
}
