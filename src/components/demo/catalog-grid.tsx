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
      className="px-5 py-10"
      style={{ backgroundColor: theme.colors.bg, color: theme.colors.text, fontFamily: theme.fontBody }}
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-lg font-bold text-center mb-1">The Collection</h2>
        <p className="text-xs text-center opacity-60 mb-5">
          {items.length} pieces from the world&apos;s finest houses
        </p>

        {/* Brand chips - horizontal scroll */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide mb-5 -mx-1 px-1">
          {brands.map((brand) => (
            <span
              key={brand}
              className="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium border whitespace-nowrap"
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
        <div className="grid grid-cols-2 gap-2.5">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  )
}
