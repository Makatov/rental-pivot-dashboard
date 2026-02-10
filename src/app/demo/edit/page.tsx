import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { HeroSection } from '@/components/demo/hero-section'
import { HowItWorks } from '@/components/demo/how-it-works'
import { PricingCards } from '@/components/demo/pricing-cards'
import { CatalogGrid } from '@/components/demo/catalog-grid'
import { editTheme } from '@/data/brand-themes'
import { editPlans } from '@/data/plans'
import { demoCatalog, editBrands } from '@/data/demo-catalog'

const editItems = demoCatalog.filter(item =>
  ['Dior', 'Louis Vuitton', 'Brunello Cucinelli', 'Prada', 'Christian Louboutin', 'Fendi'].includes(item.brand)
)

export default function EditDemoPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: editTheme.colors.bg }}>
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/demo" className="flex items-center gap-1 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full shadow-sm text-sm text-[#F5F5DC] border border-[#2D2D2D]">
          <ArrowLeft className="h-4 w-4" />
          Brands
        </Link>
      </div>

      <HeroSection theme={editTheme} />
      <HowItWorks theme={editTheme} />
      <PricingCards theme={editTheme} plans={editPlans} />
      <CatalogGrid items={editItems} theme={editTheme} brands={editBrands} />

      {/* Footer */}
      <footer className="px-6 py-8 text-center" style={{ backgroundColor: editTheme.colors.muted }}>
        <p className="text-xs opacity-40" style={{ color: editTheme.colors.text }}>
          EDIT London — Demo Prototype &middot; Not a real service (yet)
        </p>
      </footer>
    </main>
  )
}
