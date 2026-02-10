import { SubscriptionPlan } from '@/types'

export const rotatePlans: SubscriptionPlan[] = [
  { name: 'Starter', price: 89, currency: '$', items: 3, swaps: '1/month', bestFor: 'Trying the service' },
  { name: 'Standard', price: 149, currency: '$', items: 5, swaps: '2/month', bestFor: 'Working professionals', featured: true },
  { name: 'Unlimited', price: 229, currency: '$', items: 8, swaps: 'Unlimited', bestFor: 'Wardrobe variety seekers' },
]

export const editPlans: SubscriptionPlan[] = [
  { name: 'Capsule', price: 149, currency: '£', items: 3, swaps: '1/month', bestFor: 'Occasional events' },
  { name: 'Wardrobe', price: 249, currency: '£', items: 5, swaps: '2/month', bestFor: 'Regular social life', featured: true },
  { name: 'Atelier', price: 399, currency: '£', items: 8, swaps: 'Unlimited', bestFor: 'Fashion enthusiasts' },
]
