import { DemoCatalogItem } from '@/types'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface TrendingGridProps {
  items: DemoCatalogItem[]
  brands: string[]
}

export function TrendingGrid({ items, brands }: TrendingGridProps) {
  return (
    <section id="collection" className="px-4 py-14 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-center mb-2">
          Trending Now
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Most-rented pieces this week
        </p>

        {/* Brand filter chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
          <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground whitespace-nowrap">
            All
          </span>
          {brands.slice(0, 6).map((brand) => (
            <span
              key={brand}
              className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Horizontal scroll products */}
        <ScrollArea className="w-full">
          <div className="flex gap-3 pb-4">
            {items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-40 sm:w-48 group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-2 relative bg-[#F6F6F6]">
                  <Image
                    src={item.imageUrl}
                    alt={`${item.brand} ${item.category}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 160px, 192px"
                    unoptimized
                  />
                </div>
                <p className="text-xs font-semibold truncate">{item.brand}</p>
                <p className="text-[11px] text-muted-foreground">{item.category}</p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-xs font-bold text-primary">
                    ${Math.round(item.priceUsd * 0.1)}/day
                  </span>
                  <span className="text-[10px] text-muted-foreground line-through">
                    ${item.priceUsd}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="text-center mt-6">
          <Button variant="outline" className="rounded-full gap-2">
            Browse All Pieces <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
