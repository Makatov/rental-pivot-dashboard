import { SubscriptionPlan } from '@/types'

// v4 — 3 models only
export const rotatePlans: SubscriptionPlan[] = [
  { name: 'Rotate', price: 119, currency: '$', items: 2, swaps: '1/month', bestFor: 'Refresh your luxury wardrobe monthly', featured: true },
]

export const editPlans: SubscriptionPlan[] = [
  { name: 'Membership', price: 29, currency: '$', items: 0, swaps: 'Per rental', bestFor: 'Access luxury on your terms' },
  { name: 'Event Rental', price: 69, currency: '$', items: 1, swaps: '5-day rental', bestFor: 'Luxury for the occasion', featured: true },
]
