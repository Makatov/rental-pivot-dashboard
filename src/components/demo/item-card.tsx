'use client'

import { DemoCatalogItem, BrandTheme } from '@/types'
import Image from 'next/image'

interface ItemCardProps {
  item: DemoCatalogItem
  theme: BrandTheme
}

export function ItemCard({ item, theme }: ItemCardProps) {
  return (
    <div className="group">
      <div
        className="aspect-[3/4] rounded-xl overflow-hidden mb-2 relative"
        style={{ backgroundColor: theme.colors.muted }}
      >
        <Image
          src={item.imageUrl}
          alt={`${item.brand} ${item.category}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 25vw"
          unoptimized
        />
      </div>
      <p className="text-xs font-semibold truncate" style={{ color: theme.colors.text }}>
        {item.brand}
      </p>
      <p className="text-xs opacity-60" style={{ color: theme.colors.text }}>
        {item.category}
      </p>
      <p className="text-xs font-medium mt-0.5" style={{ color: theme.colors.primary }}>
        {theme.currency === '$' ? `$${item.priceUsd}` : `£${Math.round(item.priceUsd * 0.79)}`} retail
      </p>
    </div>
  )
}
