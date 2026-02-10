import { DemoCatalogItem, BrandTheme } from '@/types'
import Image from 'next/image'

interface ItemCardProps {
  item: DemoCatalogItem
  theme: BrandTheme
}

export function ItemCard({ item, theme }: ItemCardProps) {
  return (
    <div className="group flex-shrink-0 w-44 sm:w-52">
      <div className="aspect-[3/4] rounded-lg overflow-hidden mb-2 relative bg-muted">
        <Image
          src={item.imageUrl}
          alt={`${item.brand} ${item.category}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 180px, 210px"
          unoptimized
        />
      </div>
      <p className="text-xs font-semibold truncate text-card-foreground">{item.brand}</p>
      <p className="text-[11px] text-muted-foreground">{item.category}</p>
      <p className="text-xs font-medium text-primary mt-0.5">
        {theme.currency === '$' ? `$${item.priceUsd}` : `£${Math.round(item.priceUsd * 0.79)}`} retail
      </p>
    </div>
  )
}
