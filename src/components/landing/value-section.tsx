import { DemoCatalogItem, BrandTheme } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface ValueSectionProps {
  items: DemoCatalogItem[]
  theme: BrandTheme
}

export function ValueSection({ items, theme }: ValueSectionProps) {
  const isEdit = theme.name === 'EDIT'
  const displayItems = items.slice(0, 4)

  return (
    <section className="px-4 py-14 bg-background">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-center mb-2">
          {isEdit ? 'Designer Pieces, Fraction of the Price' : 'Rent, Don\'t Buy'}
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-8 max-w-md mx-auto">
          {isEdit
            ? 'Why buy one piece when you can wear them all? See how much our members save.'
            : 'Access designer wardrobes from $8/day. No commitment, free returns.'
          }
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {displayItems.map((item) => {
            const retailPrice = isEdit
              ? `£${Math.round(item.priceUsd * 0.79)}`
              : `$${item.priceUsd}`
            const rentalPrice = isEdit
              ? `£${Math.round(item.priceUsd * 0.79 * 0.12)}`
              : `$${Math.round(item.priceUsd * 0.1)}`

            return (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-[3/4] relative bg-[#F6F6F6]">
                  <Image
                    src={item.imageUrl}
                    alt={`${item.brand} ${item.category}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
                <CardContent className="p-3 space-y-1">
                  <p className="text-xs font-semibold truncate">{item.brand}</p>
                  <p className="text-[11px] text-muted-foreground">{item.category}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold text-primary">
                      {rentalPrice}<span className="font-normal text-muted-foreground">/day</span>
                    </span>
                    <span className="text-[10px] text-muted-foreground line-through">
                      {retailPrice} RRP
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
