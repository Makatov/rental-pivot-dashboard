import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { HeroSection } from '@/components/demo/hero-section'
import { HowItWorks } from '@/components/demo/how-it-works'
import { PricingCards } from '@/components/demo/pricing-cards'
import { CatalogGrid } from '@/components/demo/catalog-grid'
import { rotateTheme } from '@/data/brand-themes'
import { rotatePlans } from '@/data/plans'
import { demoCatalog, rotateBrands } from '@/data/demo-catalog'

const rotateItems = demoCatalog.filter(item =>
  ['Dolce Gabbana', 'Gucci', 'Burberry', 'Max Mara', 'Stella McCartney', 'Valentino', 'Fendi'].includes(item.brand)
)

export default function RotateDemoPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: rotateTheme.colors.bg }}>
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/demo" className="flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-sm text-[#3A3530]">
          <ArrowLeft className="h-4 w-4" />
          Brands
        </Link>
      </div>

      <HeroSection theme={rotateTheme} />
      <HowItWorks theme={rotateTheme} />
      <PricingCards theme={rotateTheme} plans={rotatePlans} />
      <CatalogGrid items={rotateItems} theme={rotateTheme} brands={rotateBrands} />

      {/* Footer */}
      <footer className="px-6 py-8 text-center" style={{ backgroundColor: rotateTheme.colors.muted }}>
        <p className="text-xs opacity-40" style={{ color: rotateTheme.colors.text }}>
          rotate NYC — Demo Prototype &middot; Not a real service (yet)
        </p>
      </footer>
    </main>
  )
}
