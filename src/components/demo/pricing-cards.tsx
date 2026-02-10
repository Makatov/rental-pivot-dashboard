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
      className="px-6 py-16"
      style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Choose Your Plan</h2>
        <p className="text-sm text-center opacity-60 mb-8">Cancel anytime. 15% off annual plans.</p>

        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-5 border-2 transition-all ${plan.featured ? 'scale-[1.02]' : ''}`}
              style={{
                backgroundColor: plan.featured ? theme.colors.primary + '10' : theme.colors.card,
                borderColor: plan.featured ? theme.colors.primary : theme.colors.accent,
                color: theme.colors.cardText,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <p className="text-xs opacity-60">{plan.bestFor}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold" style={{ color: theme.colors.primary }}>
                    {plan.currency}{plan.price}
                  </span>
                  <span className="text-xs opacity-50">/mo</span>
                </div>
              </div>

              <div className="space-y-2">
                <Feature text={`${plan.items} items at home`} color={theme.colors.primary} />
                <Feature text={`${plan.swaps} swaps`} color={theme.colors.primary} />
                <Feature text="Free shipping & returns" color={theme.colors.primary} />
                <Feature text="Professional cleaning included" color={theme.colors.primary} />
              </div>

              <button
                className="w-full mt-4 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: plan.featured ? theme.colors.primary : 'transparent',
                  color: plan.featured ? (theme.name === 'EDIT' ? '#0A0A0A' : '#FFFFFF') : theme.colors.primary,
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
    <div className="flex items-center gap-2 text-sm">
      <Check className="h-4 w-4 flex-shrink-0" style={{ color }} />
      <span className="opacity-80">{text}</span>
    </div>
  )
}
