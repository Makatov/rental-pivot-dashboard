'use client'

import { DemoCatalogItem, BrandTheme } from '@/types'
import { ItemCard } from './item-card'

interface CatalogGridProps {
  items: DemoCatalogItem[]
  theme: BrandTheme
  brands: string[]
}

export function CatalogGrid({ items, theme, brands }: CatalogGridProps) {
  return (
    <section
      className="px-6 py-16"
      style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">The Collection</h2>
        <p className="text-sm text-center opacity-60 mb-6">
          {items.length} pieces from the world&apos;s finest houses
        </p>

        {/* Brand chips - horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 -mx-2 px-2">
          {brands.map((brand) => (
            <span
              key={brand}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap"
              style={{
                borderColor: theme.colors.primary + '40',
                color: theme.colors.text,
                backgroundColor: theme.colors.muted,
              }}
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  )
}
