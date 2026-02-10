import { BusinessModel } from '@/types'

// v4 — 3 models only, content-first, DHL-direct
// Shipping: KZ→US $30 (DHL -30%), US return $10 domestic
// Acquisition: organic → influencers → Meta (in that order)
// Stripe: 2.9% + $0.30 per transaction included in otherVariable

export const businessModels: BusinessModel[] = [
  {
    id: 'R2',
    brand: 'rotate',
    name: 'Rent-to-Own',
    subtitle: 'Every payment builds toward ownership',
    type: 'subscription',
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
      shippingPerMonth: 2.5,   // $30 initial / 12 months
      otherVariable: 7.5,      // damage reserve $5 + Stripe ~$2.50
      contributionMargin: 69,
      marginPercent: 87,
    },
    testSegment: 'US nationwide — aspirational luxury buyers 22-35',
    keyAdvantage: 'Best margins (87%). No return logistics. Customer invested in item care. Simplest operations.',
    keyRisk: 'Low ARPU per item. Need 2+ items/customer for strong revenue. 12-month lock-up of inventory.',
  },

  {
    id: 'E1',
    brand: 'edit',
    name: 'Membership + Rental',
    subtitle: 'Members-only access to luxury',
    type: 'membership',
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
      shippingPerMonth: 45,     // 1.5 rentals: 1.5×$30 KZ→US
      otherVariable: 35,        // cleaning $23 + damage $8 + Stripe ~$4
      contributionMargin: 60,
      marginPercent: 43,
    },
    testSegment: 'US nationwide — event-heavy professionals & fashion lovers 28-45',
    keyAdvantage: 'Recurring base ($29) + variable upside. Low commitment = easy acquisition. Vivrelle proved this at $62M Series C.',
    keyRisk: 'Membership churn if not renting enough. Needs 1.5+ rentals/mo to justify.',
  },

  {
    id: 'E3',
    brand: 'edit',
    name: 'Event Rental',
    subtitle: 'Luxury for the occasion',
    type: 'rental',
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
      shippingPerMonth: 10,     // pre-positioned items: $10 domestic round-trip
      otherVariable: 29,        // cleaning $15 + depreciation $5 + damage $5 + Stripe ~$4
      contributionMargin: 95,
      marginPercent: 71,
    },
    testSegment: 'US nationwide — event-driven renters, weddings, galas 25-50',
    keyAdvantage: 'Highest margin per transaction (71%). Zero commitment = widest audience. Pre-positioned items = 2-day delivery.',
    keyRisk: 'No recurring revenue. Unpredictable demand. Needs pre-positioned US inventory.',
  },
]

// Summary stats
export const modelSummary = {
  totalModels: 3,
  rotateModels: 1,
  editModels: 2,
  priceRange: '$29–$199',
  marginRange: '43%–87%',
  bestMargin: { id: 'R2', name: 'Rent-to-Own', margin: 87 },
  bestRevenue: { id: 'E1', name: 'Membership + Rental', revenue: 140 },
  lowestRisk: { id: 'E3', name: 'Event Rental', reason: 'No commitment, widest audience, pre-positioned items' },
}

// Acquisition funnel
export const acquisitionFunnel = {
  phase1: { name: 'Organic + DM', weeks: '1-4', budget: 0, expectedCustomers: '5-10', cac: 0 },
  phase2: { name: 'Micro-influencers', weeks: '3-8', budget: 800, expectedCustomers: '10-20', cac: '40-80' },
  phase3: { name: 'Meta Ads (winners only)', weeks: '7-12', budget: 1200, expectedCustomers: '7-12', cac: '100-170' },
  total: { budget: 2000, expectedCustomers: '25-42', blendedCac: '48-80' },
}
