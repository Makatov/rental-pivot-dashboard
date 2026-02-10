import { BudgetItem, MonthProjection } from '@/types'

export const totalBudget = 10000

// v3 — DHL-direct from KZ, multi-model testing, both brands US
export const budgetAllocation: BudgetItem[] = [
  { category: 'Meta Ads', amount: 4000, percentage: 40 },
  { category: 'DHL Shipping (KZ→US)', amount: 1500, percentage: 15 },
  { category: 'Customs & Duties', amount: 800, percentage: 8 },
  { category: 'Content & Photo', amount: 600, percentage: 6 },
  { category: 'Cleaning (US-side)', amount: 400, percentage: 4 },
  { category: 'Branded Packaging', amount: 400, percentage: 4 },
  { category: 'Insurance', amount: 400, percentage: 4 },
  { category: 'Returns Handling (US)', amount: 300, percentage: 3 },
  { category: 'Tech & Tools', amount: 200, percentage: 2 },
  { category: 'Buffer', amount: 400, percentage: 4 },
]

// v3 — blended across 7 models, conservative
// Assumes: avg $160 ARPU blended, 15% churn, Meta CAC $80-100
export const monthlyProjections: MonthProjection[] = [
  { month: 1, label: 'Month 1', subscribers: 7, revenue: 1120, costs: 1700, net: -580, cumulative: -580 },
  { month: 2, label: 'Month 2', subscribers: 15, revenue: 2400, costs: 2350, net: 50, cumulative: -530 },
  { month: 3, label: 'Month 3', subscribers: 24, revenue: 3840, costs: 3200, net: 640, cumulative: 110 },
  { month: 4, label: 'Month 4', subscribers: 32, revenue: 5120, costs: 4000, net: 1120, cumulative: 1230 },
  { month: 5, label: 'Month 5', subscribers: 38, revenue: 6080, costs: 4600, net: 1480, cumulative: 2710 },
  { month: 6, label: 'Month 6', subscribers: 45, revenue: 7200, costs: 5200, net: 2000, cumulative: 4710 },
]

// v3 — DHL-direct model, returns to US contact
export const breakEven = {
  combined: { fixedCosts: 1100, avgContributionMargin: 73, subscribers: 15, targetWeek: 10 },
  rotate: { fixedCosts: 600, contributionMargin: 59, subscribers: 10 },
  edit: { fixedCosts: 500, contributionMargin: 109, subscribers: 5 },
}

// v3 — DHL-direct shipping, blended across models
// Shipping: KZ→US $30/item (DHL -30%), US return $10 (domestic)
export const unitEconomics = {
  rotate: {
    arpu: 132, variableCost: 73, contributionMargin: 59, marginPercent: 45,
    cac: 80, ltv: 354, ltvCacRatio: '4:1',
    note: 'Blended R1+R2+R3. R2 (Rent-to-Own) skews margin up.',
  },
  edit: {
    arpu: 232, variableCost: 123, contributionMargin: 109, marginPercent: 47,
    cac: 100, ltv: 654, ltvCacRatio: '7:1',
    note: 'Blended E1+E2+E3+E4. E4 (Full Wardrobe) skews ARPU up.',
  },
  blended: {
    arpu: 173, variableCost: 93, contributionMargin: 80, marginPercent: 46,
    cac: 88, ltv: 480, ltvCacRatio: '5:1',
    note: 'All 7 models averaged. Target: identify top 2-3 by Week 12.',
  },
}

// DHL shipping reference
export const shippingEconomics = {
  dhlDiscount: 30, // percent
  kzToUs: 30,      // per item, after discount
  usReturn: 10,    // domestic return to US contact
  roundTrip: 40,   // per swap
  note: 'Returns to US-based contact, not KZ. Reduces return cost from $35 intl to $10 domestic.',
}
