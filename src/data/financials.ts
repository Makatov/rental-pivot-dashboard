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

// v7 — 3 scenarios with per-model breakdown
// Unit economics: R2 ARPU $119, E1 ARPU $140, E3 ARPU $134/rental
// Fixed costs: $500/mo (tech, content, packaging, insurance, misc)

export const projections: Record<ScenarioKey, MonthProjection[]> = {
  // 15% churn, organic → influencer → ads, CAC $60-70
  realist: [
    { month: 1, label: 'M1 Organic',       r2: 2,  e1: 1,  e3: 2,  revenue: 646,   costs: 849,   net: -203, cumulative: -203 },
    { month: 2, label: 'M2 +Influencers',  r2: 5,  e1: 3,  e3: 3,  revenue: 1417,  costs: 1596,  net: -179, cumulative: -382 },
    { month: 3, label: 'M3 +Meta Ads',     r2: 9,  e1: 6,  e3: 5,  revenue: 2581,  costs: 2622,  net: -41,  cumulative: -423 },
    { month: 4, label: 'M4 Scale',         r2: 14, e1: 8,  e3: 6,  revenue: 3590,  costs: 3390,  net: 200,  cumulative: -223 },
    { month: 5, label: 'M5 Grow',          r2: 19, e1: 11, e3: 7,  revenue: 4739,  costs: 4247,  net: 492,  cumulative: 269 },
    { month: 6, label: 'M6 Optimize',      r2: 24, e1: 13, e3: 8,  revenue: 5748,  costs: 4955,  net: 793,  cumulative: 1062 },
  ],
  // 20% churn, slow acquisition, higher CAC $80-100
  pessimist: [
    { month: 1, label: 'M1 Organic',       r2: 1,  e1: 0,  e3: 1,  revenue: 253,   costs: 630,   net: -377, cumulative: -377 },
    { month: 2, label: 'M2 +Influencers',  r2: 3,  e1: 1,  e3: 1,  revenue: 631,   costs: 1099,  net: -468, cumulative: -845 },
    { month: 3, label: 'M3 +Meta Ads',     r2: 5,  e1: 2,  e3: 2,  revenue: 1143,  costs: 1468,  net: -325, cumulative: -1170 },
    { month: 4, label: 'M4 Scale',         r2: 7,  e1: 4,  e3: 3,  revenue: 1795,  costs: 2025,  net: -230, cumulative: -1400 },
    { month: 5, label: 'M5 Grow',          r2: 10, e1: 5,  e3: 3,  revenue: 2292,  costs: 2425,  net: -133, cumulative: -1533 },
    { month: 6, label: 'M6 Optimize',      r2: 12, e1: 6,  e3: 4,  revenue: 2804,  costs: 2714,  net: 90,   cumulative: -1443 },
  ],
  // 10% churn, strong organic, lower CAC $40-60
  optimist: [
    { month: 1, label: 'M1 Organic',       r2: 4,  e1: 2,  e3: 3,  revenue: 1158,  costs: 1138,  net: 20,   cumulative: 20 },
    { month: 2, label: 'M2 +Influencers',  r2: 9,  e1: 5,  e3: 4,  revenue: 2307,  costs: 2214,  net: 93,   cumulative: 113 },
    { month: 3, label: 'M3 +Meta Ads',     r2: 15, e1: 9,  e3: 6,  revenue: 3849,  costs: 3459,  net: 390,  cumulative: 503 },
    { month: 4, label: 'M4 Scale',         r2: 21, e1: 12, e3: 7,  revenue: 5117,  costs: 4356,  net: 761,  cumulative: 1264 },
    { month: 5, label: 'M5 Grow',          r2: 28, e1: 16, e3: 8,  revenue: 6644,  costs: 5361,  net: 1283, cumulative: 2547 },
    { month: 6, label: 'M6 Optimize',      r2: 35, e1: 19, e3: 9,  revenue: 8031,  costs: 6279,  net: 1752, cumulative: 4299 },
  ],
}

// Pre-computed chart data: all 3 scenarios on one chart
export const cumulativeChartData = projections.realist.map((_, i) => ({
  month: `M${i + 1}`,
  pessimist: projections.pessimist[i].cumulative,
  realist: projections.realist[i].cumulative,
  optimist: projections.optimist[i].cumulative,
}))

// v7 — break-even by scenario
export const breakEven = {
  fixedCosts: 500,
  scenarios: {
    pessimist: { label: 'Pessimist', breakEvenMonth: 'Month 10+', note: 'Not within 6 months' },
    realist: { label: 'Realist', breakEvenMonth: 'Month 5', note: 'Cumulative turns positive' },
    optimist: { label: 'Optimist', breakEvenMonth: 'Month 1', note: 'Barely positive from start' },
  },
  perModel: {
    r2: { contributionMargin: 48.45, arpu: 119 },
    e1: { contributionMargin: 52.09, arpu: 140 },
    e3: { contributionMargin: 74.11, arpu: 134 },
  },
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
