import { BusinessModel } from '@/types'

// v5 — Corrected unit economics with granular costs
// COGS = $0 (inventory already owned)
// Bulk shipping: 4 items per DHL package = $30/4 = $7.50/item
// Customs: ~$15/item (KZ→US, pre-owned luxury)
// Stripe: 2.9% + $0.30 per transaction
// Depreciation: ~4% per rental cycle ≈ $10/rental
// Damage reserve: $5/rental

// ── R2 Rotate Subscription — Pre-positioned (US inventory) ─────────
// Inspired by Nuuly ($98/6 mid-range items, profitable).
// Adapted for luxury: 2 items ($555 retail each) + 1 swap/mo.
// $119/mo = ~11% of $1,110 retail value — within 10-20% industry norm.
const r2PrePositioned: BusinessModel = {
  id: 'R2',
  brand: 'rotate',
  name: 'Rotate Subscription',
  subtitle: '2 luxury items, refresh monthly',
  type: 'subscription',
  scenarioId: 'pre-positioned',
  pricing: {
    display: '$119/mo',
    monthlyEquivalent: 119,
    details: '$119/month for 2 luxury items. Swap 1 item/month. Buy any item at 50% off retail.',
  },
  mechanics: {
    items: '2 items at a time',
    swaps: '1 swap/month included',
    buyout: '50% off retail anytime during rental',
    commitment: 'Monthly — cancel anytime, return items',
    securityDeposit: '$200 hold (Stripe auth, released after return)',
  },
  economics: {
    revenuePerCustomer: 119,
    costs: {
      shippingOut: 10.00,      // 1 swap domestic out
      shippingReturn: 10.00,   // 1 swap domestic return
      customs: 1.80,           // pre-position amort: 2 × $22.50 / 25 lifetime
      cleaning: 20.00,         // 1 returned item (US dry clean)
      damageReserve: 5.00,
      stripeFees: 3.75,        // 2.9% × $119 + $0.30
      depreciation: 20.00,     // 2 items × $10/mo
    },
    totalVariable: 70.55,
    contributionMargin: 48.45,
    marginPercent: 41,
    cac: 60,
    paybackMonths: 1.2,
    ltv: 581,                  // $48.45 × 12
    ltvCacRatio: '10:1',
  },
  testSegment: 'US nationwide — fashion-forward women 22-35 who want variety',
  keyAdvantage: 'Recurring + swaps = high retention. Nuuly proved subscription works. $0 COGS makes margins strong.',
  keyRisk: 'Swap logistics add cost. Need US cleaning partner. Depreciation of 2 luxury items = $20/mo.',
}

// ── R2 Rotate Subscription — From KZ (all logistics via KZ) ────────
const r2FromKz: BusinessModel = {
  id: 'R2',
  brand: 'rotate',
  name: 'Rotate Subscription',
  subtitle: '2 luxury items, refresh monthly',
  type: 'subscription',
  scenarioId: 'from-kz',
  pricing: {
    display: '$119/mo',
    monthlyEquivalent: 119,
    details: '$119/month for 2 luxury items. Swap 1 item/month. Buy any item at 50% off retail.',
  },
  mechanics: {
    items: '2 items at a time',
    swaps: '1 swap/month included',
    buyout: '50% off retail anytime during rental',
    commitment: 'Monthly — cancel anytime, return items',
    securityDeposit: '$200 hold (Stripe auth, released after return)',
  },
  economics: {
    revenuePerCustomer: 119,
    costs: {
      shippingOut: 7.50,       // swap item from KZ (batch 4)
      shippingReturn: 10.00,   // domestic return only — item stays in US
      customs: 18.75,          // $15 swap customs + $3.75 initial set amort
      cleaning: 20.00,         // US dry clean (item stays in US)
      damageReserve: 5.00,
      stripeFees: 3.75,        // 2.9% × $119 + $0.30
      depreciation: 20.00,     // 2 items × $10/mo
    },
    totalVariable: 85.00,
    contributionMargin: 34.00,
    marginPercent: 29,
    cac: 60,
    paybackMonths: 1.8,
    ltv: 408,                  // $34.00 × 12
    ltvCacRatio: '7:1',
  },
  testSegment: 'US nationwide — fashion-forward women 22-35 who want variety',
  keyAdvantage: 'No US inventory needed initially. Ship from KZ, items stay in US after delivery. Builds US inventory over time.',
  keyRisk: 'Higher variable cost (29% margin) vs pre-positioned (41%). 7-10 day initial delivery from KZ.',
}

// ── E1 Membership — Pre-positioned (US inventory) ──────────────────
const e1PrePositioned: BusinessModel = {
  id: 'E1',
  brand: 'edit',
  name: 'Membership + Rental',
  subtitle: 'Members-only access to luxury',
  type: 'membership',
  scenarioId: 'pre-positioned',
  pricing: {
    display: '$29/mo + $49-99/item/wk',
    monthlyEquivalent: 140,
    details: '$29/month membership. Rent individual items at member pricing. Buy anytime at 50% off retail.',
  },
  mechanics: {
    items: 'Unlimited catalog access',
    swaps: 'Rent as many as you want, 1 at a time or stack',
    buyout: 'Member price = 50% off retail, anytime during rental',
    commitment: 'Monthly membership, rentals per-use',
    securityDeposit: '$200 hold (Stripe auth, released 5-7 days after item return)',
  },
  economics: {
    revenuePerCustomer: 140,  // $29 membership + avg 1.5 rentals at $74
    costs: {
      shippingOut: 30.00,      // 1.5 × $20 domestic
      shippingReturn: 0,       // included in shippingOut (round-trip)
      customs: 1.05,           // pre-position amort: 1.5 × $0.70
      cleaning: 30.00,         // 1.5 × $20
      damageReserve: 7.50,     // 1.5 × $5
      stripeFees: 4.36,        // 2.9% × $140 + $0.30
      depreciation: 15.00,     // 1.5 × $10
    },
    totalVariable: 87.91,
    contributionMargin: 52.09,
    marginPercent: 37,
    cac: 70,
    paybackMonths: 1.3,
    ltv: 625,                  // $52.09 × 12
    ltvCacRatio: '9:1',
  },
  testSegment: 'US nationwide — event-heavy professionals & fashion lovers 28-45',
  keyAdvantage: 'Recurring base ($29) + variable upside. Low commitment = easy acquisition. Vivrelle proved this at $62M Series C.',
  keyRisk: 'Membership churn if not renting enough. Needs 1.5+ rentals/mo to justify.',
}

// ── E1 Membership — From KZ (bulk 4 items) ────────────────────────
const e1FromKz: BusinessModel = {
  id: 'E1',
  brand: 'edit',
  name: 'Membership + Rental',
  subtitle: 'Members-only access to luxury',
  type: 'membership',
  scenarioId: 'from-kz',
  pricing: {
    display: '$29/mo + $49-99/item/wk',
    monthlyEquivalent: 140,
    details: '$29/month membership. Rent individual items at member pricing. Buy anytime at 50% off retail.',
  },
  mechanics: {
    items: 'Unlimited catalog access',
    swaps: 'Rent as many as you want, 1 at a time or stack',
    buyout: 'Member price = 50% off retail, anytime during rental',
    commitment: 'Monthly membership, rentals per-use',
    securityDeposit: '$200 hold (Stripe auth, released 5-7 days after item return)',
  },
  economics: {
    revenuePerCustomer: 140,
    costs: {
      shippingOut: 11.25,      // 1.5 × $7.50 (bulk 4 items)
      shippingReturn: 15.00,   // 1.5 × $10 domestic return
      customs: 22.50,          // 1.5 × $15
      cleaning: 30.00,         // 1.5 × $20
      damageReserve: 7.50,     // 1.5 × $5
      stripeFees: 4.36,        // 2.9% × $140 + $0.30
      depreciation: 15.00,     // 1.5 × $10
    },
    totalVariable: 105.61,
    contributionMargin: 34.39,
    marginPercent: 25,
    cac: 70,
    paybackMonths: 2.0,
    ltv: 413,                  // $34.39 × 12
    ltvCacRatio: '6:1',
  },
  testSegment: 'US nationwide — event-heavy professionals & fashion lovers 28-45',
  keyAdvantage: 'No US inventory needed. Ship directly from KZ in bulk. Recurring base ($29) + variable upside.',
  keyRisk: 'Higher variable costs (25% margin). Longer shipping times. Needs bulk batching.',
}

// ── E3 Event Rental — Pre-positioned ───────────────────────────────
const e3PrePositioned: BusinessModel = {
  id: 'E3',
  brand: 'edit',
  name: 'Event Rental',
  subtitle: 'Luxury for the occasion',
  type: 'rental',
  scenarioId: 'pre-positioned',
  pricing: {
    display: '$69-199/item for 5 days',
    monthlyEquivalent: 134,
    details: 'One-off rental. Pick item, wear for 5 days, return. No subscription. Buy at 60% off during rental.',
  },
  mechanics: {
    items: '1-3 per rental',
    swaps: 'N/A — per-occasion',
    buyout: '60% off retail during rental period',
    commitment: 'None — pay per rental',
    securityDeposit: '$200 hold per item (Stripe auth, released 5-7 days after return)',
  },
  economics: {
    revenuePerCustomer: 134,
    costs: {
      shippingOut: 10.00,      // domestic $10
      shippingReturn: 10.00,   // domestic $10 return
      customs: 0,              // already in US
      cleaning: 20.00,
      damageReserve: 5.00,
      stripeFees: 4.19,        // 2.9% × $134 + $0.30
      depreciation: 10.70,
    },
    totalVariable: 59.89,
    contributionMargin: 74.11,
    marginPercent: 55,
    cac: 70,
    paybackMonths: 0.9,        // instant for one-off, <1 rental
    ltv: 445,                  // ~6 events/year × $74.11
    ltvCacRatio: '6:1',
  },
  testSegment: 'US nationwide — event-driven renters, weddings, galas 25-50',
  keyAdvantage: 'High margin per transaction (55%). Zero commitment = widest audience. Pre-positioned = 2-day delivery.',
  keyRisk: 'No recurring revenue. Unpredictable demand. Needs pre-positioned US inventory.',
}

// ── E3 Event Rental — From KZ (bulk) ──────────────────────────────
const e3FromKz: BusinessModel = {
  id: 'E3',
  brand: 'edit',
  name: 'Event Rental',
  subtitle: 'Luxury for the occasion',
  type: 'rental',
  scenarioId: 'from-kz',
  pricing: {
    display: '$69-199/item for 5 days',
    monthlyEquivalent: 134,
    details: 'One-off rental. Pick item, wear for 5 days, return. No subscription. Buy at 60% off during rental.',
  },
  mechanics: {
    items: '1-3 per rental',
    swaps: 'N/A — per-occasion',
    buyout: '60% off retail during rental period',
    commitment: 'None — pay per rental',
    securityDeposit: '$200 hold per item (Stripe auth, released 5-7 days after return)',
  },
  economics: {
    revenuePerCustomer: 134,
    costs: {
      shippingOut: 7.50,       // bulk 4 items
      shippingReturn: 10.00,   // domestic $10 return
      customs: 15.00,
      cleaning: 20.00,
      damageReserve: 5.00,
      stripeFees: 4.19,        // 2.9% × $134 + $0.30
      depreciation: 10.00,
    },
    totalVariable: 71.69,
    contributionMargin: 62.31,
    marginPercent: 47,
    cac: 70,
    paybackMonths: 1.1,
    ltv: 374,                  // ~6 events/year × $62.31
    ltvCacRatio: '5:1',
  },
  testSegment: 'US nationwide — event-driven renters, weddings, galas 25-50',
  keyAdvantage: 'No US inventory needed. Solid margin (47%) even shipping from KZ. Bulk batching reduces costs.',
  keyRisk: 'Longer lead times (7-10 days vs 2). Needs advance booking. Customs variability.',
}

// Primary models (default scenarios — pre-positioned for all)
export const businessModels: BusinessModel[] = [r2PrePositioned, e1PrePositioned, e3PrePositioned]

// All scenarios for toggle UI
export const businessModelScenarios: Record<string, { 'pre-positioned'?: BusinessModel; 'from-kz'?: BusinessModel }> = {
  R2: { 'pre-positioned': r2PrePositioned, 'from-kz': r2FromKz },
  E1: { 'pre-positioned': e1PrePositioned, 'from-kz': e1FromKz },
  E3: { 'pre-positioned': e3PrePositioned, 'from-kz': e3FromKz },
}

// Summary stats (updated — R2 redesigned as subscription with swaps)
export const modelSummary = {
  totalModels: 3,
  rotateModels: 1,
  editModels: 2,
  priceRange: '$29–$199',
  marginRange: '25%–55%',
  bestMargin: { id: 'E3', name: 'Event Rental', margin: 55 },
  bestRevenue: { id: 'E1', name: 'Membership + Rental', revenue: 140 },
  lowestRisk: { id: 'E3', name: 'Event Rental', reason: 'No commitment, widest audience, pre-positioned items' },
}

// Item Lifetime ROI (key metric — $0 COGS)
export const itemLifetimeROI = {
  avgContributionPerRental: 50,
  itemLifetimeRentals: 25,
  totalLifetimeRevenue: 1250,
  sellPrice: 300,
  rentalVsSellMultiplier: 4.2,
  cogs: 0,
  note: 'COGS = $0 (inventory already owned). Opportunity cost: ~$300 resale on eBay/Poshmark.',
}

// Acquisition funnel
export const acquisitionFunnel = {
  phase1: { name: 'Organic + DM', weeks: '1-4', budget: 0, expectedCustomers: '5-10', cac: 0 },
  phase2: { name: 'Micro-influencers', weeks: '3-8', budget: 800, expectedCustomers: '10-20', cac: '40-80' },
  phase3: { name: 'Meta Ads (winners only)', weeks: '7-12', budget: 1200, expectedCustomers: '7-12', cac: '100-170' },
  total: { budget: 2000, expectedCustomers: '25-42', blendedCac: '48-80' },
}
