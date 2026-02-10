const brands = [
  'Gucci', 'Dolce & Gabbana', 'Burberry', 'Max Mara', 'Valentino',
  'Fendi', 'Stella McCartney', 'Moschino', 'Kenzo', 'Emporio Armani',
  'Versace', 'Prada', 'Dior', 'Balenciaga', 'Givenchy',
]

export function BrandTicker() {
  return (
    <section className="py-5 border-y border-border bg-card overflow-hidden">
      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground text-center mb-4">
        Choose from 200+ designers
      </p>
      <div className="relative">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-sm font-medium text-muted-foreground/60 flex-shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
