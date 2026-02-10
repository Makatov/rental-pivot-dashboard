import { BudgetItem, MonthProjection } from '@/types'

export const totalBudget = 10000

export const budgetAllocation: BudgetItem[] = [
  { category: 'Development', amount: 3500, percentage: 35 },
  { category: 'Bulk Shipping', amount: 2000, percentage: 20 },
  { category: 'UK Import', amount: 1500, percentage: 15 },
  { category: 'Marketing', amount: 1500, percentage: 15 },
  { category: 'Cleaning', amount: 500, percentage: 5 },
  { category: 'Packaging', amount: 400, percentage: 4 },
  { category: 'Domains/SaaS', amount: 100, percentage: 1 },
  { category: 'Buffer', amount: 500, percentage: 5 },
]

export const monthlyProjections: MonthProjection[] = [
  { month: 1, label: 'Month 1', subscribers: 13, revenue: 2757, costs: 3408, net: -651, cumulative: -651 },
  { month: 2, label: 'Month 2', subscribers: 28, revenue: 6312, costs: 4738, net: 1574, cumulative: 923 },
  { month: 3, label: 'Month 3', subscribers: 50, revenue: 12280, costs: 6750, net: 5530, cumulative: 6453 },
  { month: 4, label: 'Month 4', subscribers: 65, revenue: 15400, costs: 8100, net: 7300, cumulative: 13753 },
  { month: 5, label: 'Month 5', subscribers: 80, revenue: 18200, costs: 9300, net: 8900, cumulative: 22653 },
  { month: 6, label: 'Month 6', subscribers: 100, revenue: 22500, costs: 11000, net: 11500, cumulative: 34153 },
]

export const breakEven = {
  combined: { fixedCosts: 2240, avgContributionMargin: 134, subscribers: 17, targetWeek: 8 },
  rotate: { fixedCosts: 1110, contributionMargin: 68, subscribers: 17 },
  edit: { fixedCosts: 1130, contributionMargin: 209, subscribers: 6 },
}

export const unitEconomics = {
  rotate: { arpu: 149, variableCost: 81, contributionMargin: 68, marginPercent: 46, cac: 30, ltv: 340, ltvCacRatio: '11:1' },
  edit: { arpu: 313, variableCost: 104, contributionMargin: 209, marginPercent: 67, cac: 50, ltv: 1045, ltvCacRatio: '21:1' },
  blended: { arpu: 231, variableCost: 93, contributionMargin: 138, marginPercent: 60, cac: 40, ltv: 693, ltvCacRatio: '17:1' },
}
