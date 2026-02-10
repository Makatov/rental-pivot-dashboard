import { BusinessModel } from '@/types'

// v5 — Corrected unit economics with granular costs
// COGS = $0 (inventory already owned)
// Bulk shipping: 4 items per DHL package = $30/4 = $7.50/item
// Customs: ~$15/item (KZ→US, pre-owned luxury)
// Stripe: 2.9% + $0.30 per transaction
// Depreciation: ~4% per rental cycle ≈ $10/rental
// Damage reserve: $5/rental

// ── R2 Rent-to-Own (from KZ, bulk shipping) ────────────────────────
const r2: BusinessModel = {
  id: 'R2',
  brand: 'rotate',
  name: 'Rent-to-Own',
  subtitle: 'Every payment builds toward ownership',
  type: 'subscription',
  scenarioId: 'from-kz',
  pricing: {
    display: '$79/item/mo',
    monthlyEquivalent: 79,
    details: 'Pay monthly per item. After 12 months, it\'s yours — no buyout fee. Early buyout at 20% discount on remaining.',
  },
  mechanics: {
    items: '1-3 items (pick individually)',
    swaps: 'None — item stays with you',
    buyout: 'Automatic after 12 payments. Early buyout = remaining balance -20%.',
    commitment: '12-month plan per item, cancel anytime (forfeit payments)',
    securityDeposit: '$200 hold per item (Stripe auth, released after ownership or return)',
  },
  economics: {
    revenuePerCustomer: 79,
    costs: {
      shippingOut: 0.63,       // $30 bulk(4) / 4 = $7.50, amortized 12mo
      shippingReturn: 0,       // customer owns — no return
      customs: 1.25,           // $15 amortized 12mo
      cleaning: 0,             // customer owns — no cleaning
      damageReserve: 5.00,
      stripeFees: 2.59,        // 2.9% × $79 + $0.30
      depreciation: 0,         // customer owns at end
    },
    totalVariable: 9.47,
    contributionMargin: 69.53,
    marginPercent: 88,
    cac: 60,
    paybackMonths: 0.9,
    ltv: 834,                  // $69.53 × 12
    ltvCacRatio: '14:1',
  },
  testSegment: 'US nationwide — aspirational luxury buyers 22-35',
  keyAdvantage: 'Best margins (88%). No return logistics. Customer invested in item care. Simplest operations.',
  keyRisk: 'Low ARPU per item. Need 2+ items/customer for strong revenue. 12-month lock-up of inventory.',
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

// Primary models (default scenarios for backward compat)
export const businessModels: BusinessModel[] = [r2, e1PrePositioned, e3PrePositioned]

// All scenarios for toggle UI
export const businessModelScenarios: Record<string, { 'pre-positioned'?: BusinessModel; 'from-kz'?: BusinessModel }> = {
  R2: { 'from-kz': r2 },
  E1: { 'pre-positioned': e1PrePositioned, 'from-kz': e1FromKz },
  E3: { 'pre-positioned': e3PrePositioned, 'from-kz': e3FromKz },
}

// Summary stats (updated)
export const modelSummary = {
  totalModels: 3,
  rotateModels: 1,
  editModels: 2,
  priceRange: '$29–$199',
  marginRange: '25%–88%',
  bestMargin: { id: 'R2', name: 'Rent-to-Own', margin: 88 },
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
