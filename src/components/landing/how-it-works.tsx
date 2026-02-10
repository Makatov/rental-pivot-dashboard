import { ShoppingBag, Sparkles, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ShoppingBag,
    title: 'Choose',
    description: 'Browse our curated collection and pick your favourites.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Wear',
    description: 'Delivered cleaned and ready. Style them your way.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Return & Repeat',
    description: 'Send back for free. Choose new pieces. Endlessly.',
  },
]

interface HowItWorksProps {
  variant?: 'minimal' | 'detailed'
}

export function HowItWorks({ variant = 'minimal' }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="px-4 py-14 bg-muted">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="space-y-3">
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-semibold">{step.title}</h3>
                {variant === 'detailed' && (
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
