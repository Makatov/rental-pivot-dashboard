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
      className="px-5 py-10"
      style={{ backgroundColor: theme.colors.muted, color: theme.colors.text, fontFamily: theme.fontBody }}
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-lg font-bold text-center mb-8">How It Works</h2>

        <div className="grid grid-cols-3 gap-3 text-center">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="space-y-2">
                <div
                  className="w-11 h-11 rounded-full mx-auto flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.primary + '20' }}
                >
                  <Icon className="h-5 w-5" style={{ color: theme.colors.primary }} />
                </div>
                <h3 className="font-semibold text-xs">{step.title}</h3>
                <p className="text-[10px] opacity-70 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
