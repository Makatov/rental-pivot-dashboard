'use client'

import { BrandTheme, SubscriptionPlan } from '@/types'
import { Check } from 'lucide-react'

interface PricingCardsProps {
  theme: BrandTheme
  plans: SubscriptionPlan[]
}

export function PricingCards({ theme, plans }: PricingCardsProps) {
  return (
    <section
      className="px-5 py-10"
      style={{ backgroundColor: theme.colors.bg, color: theme.colors.text, fontFamily: theme.fontBody }}
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-lg font-bold text-center mb-1">Choose Your Plan</h2>
        <p className="text-xs text-center opacity-60 mb-6">Cancel anytime. 15% off annual plans.</p>

        <div className="space-y-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-4 border-2 transition-all ${plan.featured ? 'scale-[1.01]' : ''}`}
              style={{
                backgroundColor: plan.featured ? theme.colors.primary + '10' : theme.colors.card,
                borderColor: plan.featured ? theme.colors.primary : theme.colors.accent,
                color: theme.colors.cardText,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-bold text-sm">{plan.name}</h3>
                  <p className="text-[10px] opacity-60">{plan.bestFor}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
                    {plan.currency}{plan.price}
                  </span>
                  <span className="text-[10px] opacity-50">/mo</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <Feature text={`${plan.items} items at home`} color={theme.colors.primary} />
                <Feature text={`${plan.swaps} swaps`} color={theme.colors.primary} />
                <Feature text="Free shipping & returns" color={theme.colors.primary} />
                <Feature text="Professional cleaning included" color={theme.colors.primary} />
              </div>

              <button
                className="w-full mt-3 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: plan.featured ? theme.colors.primary : 'transparent',
                  color: plan.featured ? '#FFFFFF' : theme.colors.primary,
                  border: plan.featured ? 'none' : `1px solid ${theme.colors.primary}`,
                }}
              >
                {plan.featured ? 'Start Free Trial' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Feature({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color }} />
      <span className="opacity-80">{text}</span>
    </div>
  )
}
