import { BudgetItem, MonthProjection } from '@/types'

export const totalBudget = 10000

// v4 — content-first, 3 models, $2K ads, DHL-direct
export const budgetAllocation: BudgetItem[] = [
  { category: 'DHL Shipping (KZ→US)', amount: 2500, percentage: 25 },
  { category: 'Meta Ads', amount: 1200, percentage: 12 },
  { category: 'Micro-influencers', amount: 800, percentage: 8 },
  { category: 'Customs & Duties', amount: 1200, percentage: 12 },
  { category: 'Content & Photo', amount: 500, percentage: 5 },
  { category: 'Cleaning (US-side)', amount: 600, percentage: 6 },
  { category: 'Branded Packaging', amount: 400, percentage: 4 },
  { category: 'Insurance', amount: 400, percentage: 4 },
  { category: 'Returns Handling (US)', amount: 400, percentage: 4 },
  { category: 'Tech & Tools', amount: 200, percentage: 2 },
  { category: 'Pre-position inventory (US)', amount: 500, percentage: 5 },
  { category: 'Buffer', amount: 300, percentage: 3 },
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

// v4 — 3 models, content-first acquisition
export const breakEven = {
  combined: { fixedCosts: 800, avgContributionMargin: 78, subscribers: 11, targetWeek: 6 },
  rotate: { fixedCosts: 300, contributionMargin: 71.5, subscribers: 5 },
  edit: { fixedCosts: 500, contributionMargin: 82, subscribers: 6 },
}

// v4 — DHL-direct, 3 models blended
export const unitEconomics = {
  rotate: {
    arpu: 79, variableCost: 7.5, contributionMargin: 71.5, marginPercent: 90,
    cac: 50, ltv: 858, ltvCacRatio: '17:1',
    note: 'Rent-to-Own only. Best margin, no returns. LTV = 12 months.',
  },
  edit: {
    arpu: 137, variableCost: 55.5, contributionMargin: 81.5, marginPercent: 60,
    cac: 70, ltv: 489, ltvCacRatio: '7:1',
    note: 'Blended E1 Membership + E3 Event. E3 pre-positioned = 74% margin.',
  },
  blended: {
    arpu: 118, variableCost: 40, contributionMargin: 78, marginPercent: 66,
    cac: 57, ltv: 612, ltvCacRatio: '11:1',
    note: 'Content-first CAC ($0 organic, $50 influencer, $167 Meta). Blended $57.',
  },
}

// DHL shipping reference
export const shippingEconomics = {
  dhlDiscount: 30,
  kzToUs: 30,
  usReturn: 10,
  roundTrip: 40,
  prePositioned: { domestic: 10, roundTrip: 20 },
  note: 'Pre-position 20-30 popular items at US contact for Event Rental (E3). Domestic shipping $10 vs $30 DHL.',
}
