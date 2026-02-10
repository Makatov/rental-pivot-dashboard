import { DemoCatalogItem, BrandTheme } from '@/types'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { ItemCard } from './item-card'
import { ArrowRight } from 'lucide-react'

interface CatalogPreviewProps {
  items: DemoCatalogItem[]
  theme: BrandTheme
  brands: string[]
}

export function CatalogPreview({ items, theme, brands }: CatalogPreviewProps) {
  return (
    <section id="collection" className="px-4 py-16 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-2">
          The Collection
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          {items.length} pieces from the world&apos;s finest houses
        </p>

        {/* Brand chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
          {brands.map((brand) => (
            <span
              key={brand}
              className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border border-border bg-muted text-foreground whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Horizontal scroll items */}
        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-4">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} theme={theme} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full gap-2">
            View All Collection <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
