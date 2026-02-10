const editPress = ['Vogue', 'Tatler', 'Harper\'s Bazaar', 'Evening Standard', 'The Telegraph']
const rotatePress = ['Vogue', 'Forbes', 'New York Times', 'Refinery29', 'Who What Wear']

interface PressBarProps {
  brand: 'edit' | 'rotate'
}

export function PressBar({ brand }: PressBarProps) {
  const names = brand === 'edit' ? editPress : rotatePress

  return (
    <section className="py-6 border-y border-border bg-card">
      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground text-center mb-4">
        As seen in
      </p>
      <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap px-4">
        {names.map((name) => (
          <span
            key={name}
            className="text-sm sm:text-base font-semibold text-muted-foreground/50 tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
