import { BudgetItem, MonthProjection, ScenarioKey } from '@/types'

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

// Per-model ARPU & variable costs (pre-positioned, from business-models.ts)
export const modelEconomics = {
  ro1: { arpu: 119, variable: 70.55 },  // Rotate subscription
  ed1: { arpu: 140, variable: 87.91 },  // Edit membership
  ed2: { arpu: 134, variable: 59.89 },  // Edit event rental
} as const

const FIXED_COSTS = 500 // $/mo: tech, content, packaging, insurance, misc

// v7 — 3 scenarios with per-model breakdown
// Costs = variable (per-sub) + CAC (marketing spend) + fixed $500/mo

export const projections: Record<ScenarioKey, MonthProjection[]> = {
  // 15% churn, organic → influencer → ads, CAC $60-70
  realist: [
    { month: 1, label: 'M1 Organic',       ro1: 2,  ed1: 1,  ed2: 2,  revenue: 646,   costs: 849,   net: -203, cumulative: -203 },
    { month: 2, label: 'M2 +Influencers',  ro1: 5,  ed1: 3,  ed2: 3,  revenue: 1417,  costs: 1596,  net: -179, cumulative: -382 },
    { month: 3, label: 'M3 +Meta Ads',     ro1: 9,  ed1: 6,  ed2: 5,  revenue: 2581,  costs: 2622,  net: -41,  cumulative: -423 },
    { month: 4, label: 'M4 Scale',         ro1: 14, ed1: 8,  ed2: 6,  revenue: 3590,  costs: 3390,  net: 200,  cumulative: -223 },
    { month: 5, label: 'M5 Grow',          ro1: 19, ed1: 11, ed2: 7,  revenue: 4739,  costs: 4247,  net: 492,  cumulative: 269 },
    { month: 6, label: 'M6 Optimize',      ro1: 24, ed1: 13, ed2: 8,  revenue: 5748,  costs: 4955,  net: 793,  cumulative: 1062 },
  ],
  // 20% churn, slow acquisition, higher CAC $80-100
  pessimist: [
    { month: 1, label: 'M1 Organic',       ro1: 1,  ed1: 0,  ed2: 1,  revenue: 253,   costs: 630,   net: -377, cumulative: -377 },
    { month: 2, label: 'M2 +Influencers',  ro1: 3,  ed1: 1,  ed2: 1,  revenue: 631,   costs: 1099,  net: -468, cumulative: -845 },
    { month: 3, label: 'M3 +Meta Ads',     ro1: 5,  ed1: 2,  ed2: 2,  revenue: 1143,  costs: 1468,  net: -325, cumulative: -1170 },
    { month: 4, label: 'M4 Scale',         ro1: 7,  ed1: 4,  ed2: 3,  revenue: 1795,  costs: 2025,  net: -230, cumulative: -1400 },
    { month: 5, label: 'M5 Grow',          ro1: 10, ed1: 5,  ed2: 3,  revenue: 2292,  costs: 2425,  net: -133, cumulative: -1533 },
    { month: 6, label: 'M6 Optimize',      ro1: 12, ed1: 6,  ed2: 4,  revenue: 2804,  costs: 2714,  net: 90,   cumulative: -1443 },
  ],
  // 10% churn, strong organic, lower CAC $40-60
  optimist: [
    { month: 1, label: 'M1 Organic',       ro1: 4,  ed1: 2,  ed2: 3,  revenue: 1158,  costs: 1138,  net: 20,   cumulative: 20 },
    { month: 2, label: 'M2 +Influencers',  ro1: 9,  ed1: 5,  ed2: 4,  revenue: 2307,  costs: 2214,  net: 93,   cumulative: 113 },
    { month: 3, label: 'M3 +Meta Ads',     ro1: 15, ed1: 9,  ed2: 6,  revenue: 3849,  costs: 3459,  net: 390,  cumulative: 503 },
    { month: 4, label: 'M4 Scale',         ro1: 21, ed1: 12, ed2: 7,  revenue: 5117,  costs: 4356,  net: 761,  cumulative: 1264 },
    { month: 5, label: 'M5 Grow',          ro1: 28, ed1: 16, ed2: 8,  revenue: 6644,  costs: 5361,  net: 1283, cumulative: 2547 },
    { month: 6, label: 'M6 Optimize',      ro1: 35, ed1: 19, ed2: 9,  revenue: 8031,  costs: 6279,  net: 1752, cumulative: 4299 },
  ],
}

// Pre-computed chart data: all 3 scenarios on one chart
export const cumulativeChartData = projections.realist.map((_, i) => ({
  month: `M${i + 1}`,
  pessimist: projections.pessimist[i].cumulative,
  realist: projections.realist[i].cumulative,
  optimist: projections.optimist[i].cumulative,
}))

// Helper: compute variable costs for a month row
export function getVariableCost(m: MonthProjection): number {
  return +(m.ro1 * modelEconomics.ro1.variable + m.ed1 * modelEconomics.ed1.variable + m.ed2 * modelEconomics.ed2.variable).toFixed(0)
}

// Helper: derive CAC/marketing spend = costs - variable - fixed
export function getCac(m: MonthProjection): number {
  return Math.round(m.costs - getVariableCost(m) - FIXED_COSTS)
}

// v7 — break-even by scenario
export const breakEven = {
  fixedCosts: FIXED_COSTS,
  scenarios: {
    pessimist: { label: 'Pessimist', breakEvenMonth: 'Month 10+', note: 'Not within 6 months' },
    realist: { label: 'Realist', breakEvenMonth: 'Month 5', note: 'Cumulative turns positive' },
    optimist: { label: 'Optimist', breakEvenMonth: 'Month 1', note: 'Barely positive from start' },
  },
  perModel: {
    ro1: { contributionMargin: 48.45, arpu: 119 },
    ed1: { contributionMargin: 52.09, arpu: 140 },
    ed2: { contributionMargin: 74.11, arpu: 134 },
  },
}

// v7 — per-model unit economics + weighted blended
// Weighted avg formula: Σ(weight_i × value_i) / Σ(weight_i), weights = realist M6 subscribers
const m6 = projections.realist[5]
const weights = { ro1: m6.ro1, ed1: m6.ed1, ed2: m6.ed2 }
const totalW = weights.ro1 + weights.ed1 + weights.ed2

function weightedAvg(getValue: (k: keyof typeof modelEconomics) => number): number {
  return (Object.keys(weights) as (keyof typeof weights)[])
    .reduce((sum, k) => sum + getValue(k) * weights[k], 0) / totalW
}

const modelCac = { ro1: 60, ed1: 70, ed2: 50 } as const

const blendedArpu = +weightedAvg((k) => modelEconomics[k].arpu).toFixed(0)
const blendedVariable = +weightedAvg((k) => modelEconomics[k].variable).toFixed(2)
const blendedContribution = +(blendedArpu - blendedVariable).toFixed(2)
const blendedMargin = Math.round((blendedContribution / blendedArpu) * 100)
const blendedCac = +weightedAvg((k) => modelCac[k]).toFixed(0)

export const unitEconomics = {
  ro1: {
    arpu: 119, variableCost: 70.55, contributionMargin: 48.45, marginPercent: 41,
    cac: 60, ltv: 581, ltvCacRatio: '10:1',
    note: 'Rotate subscription. 2 items + 1 swap/mo. Pre-positioned.',
  },
  ed1: {
    arpu: 140, variableCost: 87.91, contributionMargin: 52.09, marginPercent: 37,
    cac: 70, ltv: 347, ltvCacRatio: '5:1',
    note: 'Edit membership. Unlimited try-on. Pre-positioned.',
  },
  ed2: {
    arpu: 134, variableCost: 59.89, contributionMargin: 74.11, marginPercent: 55,
    cac: 50, ltv: 296, ltvCacRatio: '6:1',
    note: 'Edit event rental. 3-day rental. Pre-positioned.',
  },
  blended: {
    arpu: blendedArpu, variableCost: blendedVariable,
    contributionMargin: blendedContribution, marginPercent: blendedMargin,
    cac: blendedCac,
    note: `Weighted avg (realist M6 mix: ${weights.ro1}/${weights.ed1}/${weights.ed2}).`,
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
  note: 'Pre-position 20-30 popular items at US contact for ED1/ED2. Domestic $10 vs $30 DHL. Bulk from KZ also viable.',
}
