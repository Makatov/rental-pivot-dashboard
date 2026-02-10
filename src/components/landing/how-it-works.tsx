import { ShoppingBag, Sparkles, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ShoppingBag,
    title: 'Browse & Choose',
    description: 'Explore our curated collection and pick your favorite pieces. New items added weekly.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Wear & Enjoy',
    description: 'Receive your pieces cleaned and ready to wear. Style them your way for as long as you like.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Swap & Repeat',
    description: 'Ready for something new? Return your items for free and choose fresh pieces. Endlessly.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-16 bg-muted">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="text-center relative">
                <div className="mx-auto w-20 h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center relative z-10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <span className="inline-block mt-3 text-xs font-bold text-primary tracking-wider">
                  STEP {step.number}
                </span>
                <h3 className="font-heading text-lg font-semibold mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
