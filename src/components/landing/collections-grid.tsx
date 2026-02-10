import { DemoCatalogItem } from '@/types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const collections = [
  { title: 'Evening Edit', subtitle: 'Cocktails to galas', filter: 'Dresses' },
  { title: 'The Working Wardrobe', subtitle: 'Office to after-hours', filter: 'Tops' },
  { title: 'Weekend Luxe', subtitle: 'Effortless off-duty', filter: 'Shoes' },
]

interface CollectionsGridProps {
  items: DemoCatalogItem[]
}

export function CollectionsGrid({ items }: CollectionsGridProps) {
  return (
    <section id="collection" className="px-4 py-14 bg-background">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-center mb-2">
          Curated Collections
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Hand-picked edits for every occasion
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {collections.map((col) => {
            const item = items.find(i => i.category === col.filter) || items[0]
            return (
              <div key={col.title} className="group relative rounded-lg overflow-hidden cursor-pointer">
                <div className="aspect-[3/4] relative bg-muted">
                  <Image
                    src={item.imageUrl}
                    alt={col.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-heading text-lg font-bold">{col.title}</h3>
                  <p className="text-xs opacity-80">{col.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full gap-2">
            View All Collections <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
