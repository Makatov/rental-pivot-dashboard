import { SubscriptionPlan } from '@/types'

// v4 — 3 models only
export const rotatePlans: SubscriptionPlan[] = [
  { name: 'Rent-to-Own', price: 79, currency: '$', items: 1, swaps: 'Keep it', bestFor: 'Own your dream piece in 12 months', featured: true },
]

export const editPlans: SubscriptionPlan[] = [
  { name: 'Membership', price: 29, currency: '$', items: 0, swaps: 'Per rental', bestFor: 'Access luxury on your terms' },
  { name: 'Event Rental', price: 69, currency: '$', items: 1, swaps: '5-day rental', bestFor: 'Luxury for the occasion', featured: true },
]
