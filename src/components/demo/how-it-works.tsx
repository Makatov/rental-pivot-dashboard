'use client'

import { BrandTheme } from '@/types'
import { ShoppingBag, Sparkles, RefreshCw } from 'lucide-react'

interface HowItWorksProps {
  theme: BrandTheme
}

const steps = [
  { icon: ShoppingBag, title: 'Choose', description: 'Browse our curated collection and pick your favorites' },
  { icon: Sparkles, title: 'Wear', description: 'Enjoy designer pieces delivered to your door, cleaned and ready' },
  { icon: RefreshCw, title: 'Swap', description: 'Return anytime and choose new pieces. Repeat endlessly' },
]

export function HowItWorks({ theme }: HowItWorksProps) {
  return (
    <section
      className="px-6 py-16"
      style={{ backgroundColor: theme.colors.muted, color: theme.colors.text, fontFamily: theme.fontBody }}
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>

        <div className="grid grid-cols-3 gap-4 text-center">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="space-y-3">
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.primary + '20' }}
                >
                  <Icon className="h-6 w-6" style={{ color: theme.colors.primary }} />
                </div>
                <h3 className="font-semibold text-sm">{step.title}</h3>
                <p className="text-xs opacity-70 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
