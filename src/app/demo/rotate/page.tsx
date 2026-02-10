import { BrandLayout } from '@/components/landing/brand-layout'
import { HeroSection } from '@/components/landing/hero-section'
import { BrandTicker } from '@/components/landing/brand-ticker'
import { HowItWorks } from '@/components/landing/how-it-works'
import { TrendingGrid } from '@/components/landing/trending-grid'
import { Testimonials } from '@/components/landing/testimonials'
import { CTASection } from '@/components/landing/cta-section'
import { rotateTheme } from '@/data/brand-themes'
import { demoCatalog, rotateBrands } from '@/data/demo-catalog'
import { rotateTestimonials } from '@/data/testimonials'
import { rotateHeroImage } from '@/data/brand-images'

const rotateItems = demoCatalog.filter(item =>
  rotateBrands.includes(item.brand) || ['Fendi'].includes(item.brand)
)

export default function RotateDemoPage() {
  return (
    <BrandLayout brand="rotate" theme={rotateTheme}>
      <HeroSection theme={rotateTheme} variant="conversion" backgroundImage={rotateHeroImage} />
      <BrandTicker />
      <HowItWorks variant="detailed" />
      <TrendingGrid items={rotateItems} brands={rotateBrands} />
      <Testimonials testimonials={rotateTestimonials} variant="reviews" />
      <CTASection variant="conversion" />
    </BrandLayout>
  )
}
