import { BudgetItem, MonthProjection } from '@/types'

export const totalBudget = 10000

// v2 — realistic budget, NYC-first, Meta ads as primary spend
export const budgetAllocation: BudgetItem[] = [
  { category: 'Meta Ads', amount: 4000, percentage: 40 },
  { category: 'Bulk Shipping', amount: 1200, percentage: 12 },
  { category: 'Customs & Duties', amount: 800, percentage: 8 },
  { category: '3PL / Storage', amount: 800, percentage: 8 },
  { category: 'Content & Photo', amount: 500, percentage: 5 },
  { category: 'Cleaning', amount: 400, percentage: 4 },
  { category: 'Insurance', amount: 400, percentage: 4 },
  { category: 'Packaging', amount: 300, percentage: 3 },
  { category: 'Tech & Tools', amount: 200, percentage: 2 },
  { category: 'Buffer', amount: 400, percentage: 4 },
]

// v2 — conservative, rotate-only (NYC), 15% churn, realistic CAC
export const monthlyProjections: MonthProjection[] = [
  { month: 1, label: 'Month 1', subscribers: 5, revenue: 745, costs: 1560, net: -815, cumulative: -815 },
  { month: 2, label: 'Month 2', subscribers: 12, revenue: 1788, costs: 2204, net: -416, cumulative: -1231 },
  { month: 3, label: 'Month 3', subscribers: 20, revenue: 2980, costs: 2940, net: 40, cumulative: -1191 },
  { month: 4, label: 'Month 4', subscribers: 29, revenue: 4321, costs: 3868, net: 453, cumulative: -738 },
  { month: 5, label: 'Month 5', subscribers: 35, revenue: 5215, costs: 4420, net: 795, cumulative: 57 },
  { month: 6, label: 'Month 6', subscribers: 40, revenue: 5960, costs: 4880, net: 1080, cumulative: 1137 },
]

// v2 — rotate-only for now, realistic variable costs
export const breakEven = {
  combined: { fixedCosts: 1100, avgContributionMargin: 57, subscribers: 20, targetWeek: 12 },
  rotate: { fixedCosts: 1100, contributionMargin: 57, subscribers: 20 },
  edit: { fixedCosts: 1130, contributionMargin: 180, subscribers: 7 },
}

// v2 — corrected: includes depreciation, damage reserve, handling
export const unitEconomics = {
  rotate: { arpu: 149, variableCost: 92, contributionMargin: 57, marginPercent: 38, cac: 80, ltv: 342, ltvCacRatio: '4:1' },
  edit: { arpu: 313, variableCost: 133, contributionMargin: 180, marginPercent: 58, cac: 100, ltv: 1080, ltvCacRatio: '11:1' },
  blended: { arpu: 231, variableCost: 113, contributionMargin: 118, marginPercent: 51, cac: 80, ltv: 711, ltvCacRatio: '9:1' },
}
