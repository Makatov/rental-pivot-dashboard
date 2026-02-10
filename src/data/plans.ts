import { SubscriptionPlan } from '@/types'

// v3 — plans now represent model variants, not just tiers
// These are simplified for the landing page pricing sections

export const rotatePlans: SubscriptionPlan[] = [
  { name: 'Rent-to-Own', price: 79, currency: '$', items: 1, swaps: 'Keep it', bestFor: 'Own your dream piece in 12 months' },
  { name: 'Subscription', price: 149, currency: '$', items: 3, swaps: '1/month', bestFor: 'Rotating wardrobe variety', featured: true },
  { name: 'Try & Buy', price: 49, currency: '$', items: 3, swaps: 'New box', bestFor: 'Discover + keep favorites at 40-60% off' },
]

export const editPlans: SubscriptionPlan[] = [
  { name: 'Membership', price: 29, currency: '$', items: 0, swaps: 'Per rental', bestFor: 'Access luxury on your terms' },
  { name: 'Capsule', price: 349, currency: '$', items: 5, swaps: 'Quarterly', bestFor: 'Curated seasonal wardrobe', featured: true },
  { name: 'Event Rental', price: 69, currency: '$', items: 1, swaps: '5-day rental', bestFor: 'Luxury for the occasion' },
  { name: 'Full Wardrobe', price: 499, currency: '$', items: 8, swaps: 'Unlimited', bestFor: 'Your complete luxury closet' },
]
