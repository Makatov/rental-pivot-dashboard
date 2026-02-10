import { BudgetItem, MonthProjection } from '@/types'

export const totalBudget = 10000

// v4 — content-first, 3 models, $2K ads, DHL-direct
// Customs increased to $1,800 (luxury items, even pre-owned, attract higher duties)
export const budgetAllocation: BudgetItem[] = [
  { category: 'DHL Shipping (KZ→US)', amount: 2500, percentage: 25 },
  { category: 'Customs & Duties', amount: 1800, percentage: 18 },
  { category: 'Meta Ads', amount: 1200, percentage: 12 },
  { category: 'Micro-influencers', amount: 800, percentage: 8 },
  { category: 'Cleaning (US-side)', amount: 600, percentage: 6 },
  { category: 'Content & Photo', amount: 500, percentage: 5 },
  { category: 'Pre-position inventory (US)', amount: 500, percentage: 5 },
  { category: 'Insurance', amount: 400, percentage: 4 },
  { category: 'Returns Handling (US)', amount: 400, percentage: 4 },
  { category: 'Branded Packaging', amount: 400, percentage: 4 },
  { category: 'Tech & Tools', amount: 200, percentage: 2 },
  { category: 'Buffer', amount: 700, percentage: 7 },
]

// v4 — content-first funnel, Scenario B ($2K ads)
// Weeks 1-4: organic only. Weeks 5+: influencers + Meta
export const monthlyProjections: MonthProjection[] = [
  { month: 1, label: 'W1-4 Organic', subscribers: 5, revenue: 475, costs: 550, net: -75, cumulative: -75 },
  { month: 2, label: 'W5-8 +Influencers', subscribers: 15, revenue: 1475, costs: 1350, net: 125, cumulative: 50 },
  { month: 3, label: 'W9-12 +Meta Ads', subscribers: 28, revenue: 2800, costs: 2100, net: 700, cumulative: 750 },
  { month: 4, label: 'Scale winner', subscribers: 38, revenue: 3900, costs: 2700, net: 1200, cumulative: 1950 },
  { month: 5, label: 'Grow', subscribers: 48, revenue: 5000, costs: 3300, net: 1700, cumulative: 3650 },
  { month: 6, label: 'Optimize', subscribers: 55, revenue: 5800, costs: 3700, net: 2100, cumulative: 5750 },
]

// v6 — R2 redesigned as Rotate Subscription (was Rent-to-Own)
export const breakEven = {
  combined: { fixedCosts: 800, avgContributionMargin: 58, subscribers: 14, targetWeek: 6 },
  rotate: { fixedCosts: 300, contributionMargin: 48.45, subscribers: 7 },
  edit: { fixedCosts: 500, contributionMargin: 63.10, subscribers: 8 },  // blended E1+E3 pre-positioned
}

// v6 — R2 = Rotate Subscription with swaps (Nuuly-inspired)
export const unitEconomics = {
  rotate: {
    arpu: 119, variableCost: 70.55, contributionMargin: 48.45, marginPercent: 41,
    cac: 60, ltv: 581, ltvCacRatio: '10:1',
    note: 'Rotate subscription. 2 items + 1 swap/mo. Pre-positioned. COGS=$0. Incl. shipping, cleaning, depreciation.',
  },
  edit: {
    arpu: 137, variableCost: 73.90, contributionMargin: 63.10, marginPercent: 46,
    cac: 70, ltv: 535, ltvCacRatio: '8:1',
    note: 'Blended E1+E3 pre-positioned. Incl. cleaning, depreciation, Stripe, damage. COGS=$0.',
  },
  blended: {
    arpu: 131, variableCost: 72.80, contributionMargin: 58.22, marginPercent: 44,
    cac: 67, ltv: 559, ltvCacRatio: '8:1',
    note: 'All 3 models blended. Pre-positioned scenarios. Incl. all granular costs. COGS=$0.',
  },
}

// Shipping economics (updated with bulk)
export const shippingEconomics = {
  dhlDiscount: 30,
  kzToUs: 30,
  kzToUsBulk: 7.50,       // 4 items per package
  customs: 15,              // per item KZ→US
  usReturn: 10,
  roundTrip: 40,
  prePositioned: { domestic: 10, roundTrip: 20 },
  bulkNote: 'Bulk shipping: 4 items per DHL package = $30/4 = $7.50/item + $15 customs = $22.50 total/item.',
  note: 'Pre-position 20-30 popular items at US contact for E1/E3. Domestic $10 vs $30 DHL. Bulk from KZ also viable.',
}
