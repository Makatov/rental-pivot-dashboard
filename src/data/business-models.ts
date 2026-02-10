import { BusinessModel } from '@/types'

// DHL shipping baseline (-30% discount):
// KZ → US: ~$30/item | US domestic return: ~$10/item | Round trip: ~$40/item
// Returns go to US-based contact, not back to KZ

export const businessModels: BusinessModel[] = [
  // ── rotate (accessible luxury, US multi-city) ──────────────────

  {
    id: 'R1',
    brand: 'rotate',
    name: 'Subscription + Swap',
    subtitle: 'The classic rental model',
    type: 'subscription',
    pricing: {
      display: '$149/mo',
      monthlyEquivalent: 149,
      details: '3 items at home, 1 swap/month included. Extra swaps $25 each.',
    },
    mechanics: {
      items: '3 items',
      swaps: '1/month',
      buyout: 'After 12 months renting same item → buy at 5% of retail',
      commitment: 'Monthly, cancel anytime',
    },
    economics: {
      revenuePerCustomer: 149,
      shippingPerMonth: 40, // 1 swap: $30 KZ→US + $10 US return
      otherVariable: 48,    // depreciation $20 + cleaning $15 + damage $8 + packaging $5
      contributionMargin: 61,
      marginPercent: 41,
    },
    testSegment: 'NYC, LA — working women 25-35',
    keyAdvantage: 'Predictable MRR, familiar model (Rent the Runway validated)',
    keyRisk: 'High churn if swap experience is slow (KZ shipping = 5-7 days)',
  },

  {
    id: 'R2',
    brand: 'rotate',
    name: 'Rent-to-Own',
    subtitle: 'Every payment builds toward ownership',
    type: 'subscription',
    pricing: {
      display: '$59–99/item/mo',
      monthlyEquivalent: 79,
      details: 'Pay monthly per item. After 12 months, it\'s yours — no buyout fee.',
    },
    mechanics: {
      items: '1-3 items (pick individually)',
      swaps: 'None — item stays with you',
      buyout: 'Automatic after 12 payments. Early buyout = remaining balance at 20% discount.',
      commitment: '12-month plan per item',
    },
    economics: {
      revenuePerCustomer: 79,  // avg 1 item
      shippingPerMonth: 2.5,   // $30 initial amortized over 12mo
      otherVariable: 5,        // damage reserve only, no cleaning/swaps
      contributionMargin: 71.5,
      marginPercent: 90,
    },
    testSegment: 'Miami, Austin — aspirational buyers 22-30',
    keyAdvantage: 'Best margins (90%). No return logistics. Customer invested in item care.',
    keyRisk: 'Low ARPU per item. Need multiple items per customer for viable revenue.',
  },

  {
    id: 'R3',
    brand: 'rotate',
    name: 'Try & Buy',
    subtitle: 'Try at home, keep your favorites',
    type: 'box',
    pricing: {
      display: '$49/box + buy price',
      monthlyEquivalent: 169,
      details: '$49 styling fee. 3 items shipped. Keep favorites at 40-60% off retail. Return rest free.',
    },
    mechanics: {
      items: '3 items per box',
      swaps: 'N/A — new box each month',
      buyout: 'Instant — keep price shown per item (40-60% off retail)',
      commitment: 'None — order boxes on demand',
    },
    economics: {
      revenuePerCustomer: 169, // $49 fee + avg 1 item purchased at $120
      shippingPerMonth: 110,   // 3 items out ($90) + avg 2 returns ($20)
      otherVariable: 15,       // packaging $10 + styling labor $5
      contributionMargin: 44,
      marginPercent: 26,
    },
    testSegment: 'SF, Chicago — discovery shoppers 28-40',
    keyAdvantage: 'No commitment. Drives purchases. Amazon/Stitch Fix model validated.',
    keyRisk: 'Low margin if keep rate < 40%. Heavy shipping costs per box.',
  },

  // ── ÉDIT (premium luxury, US multi-city) ───────────────────────

  {
    id: 'E1',
    brand: 'edit',
    name: 'Membership + Rental',
    subtitle: 'Members-only access to luxury',
    type: 'membership',
    pricing: {
      display: '$29/mo + $49-99/item/week',
      monthlyEquivalent: 178,
      details: '$29/month membership. Rent individual items at member pricing ($49-99/week vs $89-149 retail).',
    },
    mechanics: {
      items: 'Unlimited catalog access',
      swaps: 'Rent as many as you want (1 at a time, or stack)',
      buyout: 'Member price = 50% off retail anytime',
      commitment: 'Monthly membership, rentals per-use',
    },
    economics: {
      revenuePerCustomer: 178,  // $29 membership + avg 2 rentals at $74.5
      shippingPerMonth: 80,     // avg 2 rentals: 2×($30+$10)
      otherVariable: 45,        // cleaning $30 + depreciation $10 + damage $5
      contributionMargin: 53,
      marginPercent: 30,
    },
    testSegment: 'NYC, DC — event-heavy professionals 30-45',
    keyAdvantage: 'Recurring base + variable upside. Low commitment = easy acquisition.',
    keyRisk: 'Complex pricing. Membership churn if not renting enough.',
  },

  {
    id: 'E2',
    brand: 'edit',
    name: 'Seasonal Capsule',
    subtitle: 'Your wardrobe, curated quarterly',
    type: 'subscription',
    pricing: {
      display: '$349/quarter',
      monthlyEquivalent: 116,
      details: '5 premium items hand-picked by stylist. Swap entire capsule each quarter.',
    },
    mechanics: {
      items: '5 items per capsule',
      swaps: 'Quarterly (4x/year)',
      buyout: 'Keep any item at 30% off retail. After 4 seasons with same item → 5% buyout.',
      commitment: 'Quarterly, cancel before renewal',
    },
    economics: {
      revenuePerCustomer: 116,  // $349/3 months
      shippingPerMonth: 50,     // $150 quarterly ($30×5 items) / 3 months
      otherVariable: 25,        // depreciation $15 + damage $5 + styling $5
      contributionMargin: 41,
      marginPercent: 35,
    },
    testSegment: 'Boston, Seattle — minimalists 30-45',
    keyAdvantage: 'Low shipping frequency. Stylist adds perceived value. Seasonal = natural retention.',
    keyRisk: 'Lower monthly revenue. Quarterly churn windows.',
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
      details: 'One-off rental. Pick item, wear for 5 days, return. No subscription needed.',
    },
    mechanics: {
      items: '1-3 per rental',
      swaps: 'N/A — per-occasion',
      buyout: 'Love it? Buy at 60% of retail during rental period.',
      commitment: 'None — pay per rental',
    },
    economics: {
      revenuePerCustomer: 134,  // avg 1 rental/month at $134
      shippingPerMonth: 40,     // $30 KZ→US + $10 return
      otherVariable: 35,        // cleaning $20 + depreciation $10 + damage $5
      contributionMargin: 59,
      marginPercent: 44,
    },
    testSegment: 'All US cities — event-driven renters 25-50',
    keyAdvantage: 'Highest margin per transaction. Zero commitment = widest audience.',
    keyRisk: 'No recurring revenue. Unpredictable demand. 5-7 day shipping may miss events.',
  },

  {
    id: 'E4',
    brand: 'edit',
    name: 'Full Wardrobe',
    subtitle: 'Your personal luxury closet',
    type: 'subscription',
    pricing: {
      display: '$499/mo',
      monthlyEquivalent: 499,
      details: '8 items, unlimited swaps, personal stylist, priority shipping. The ultimate.',
    },
    mechanics: {
      items: '8 items',
      swaps: 'Unlimited',
      buyout: 'Any item at 5% after 12 months. Early buyout at 40% off retail.',
      commitment: '3-month minimum',
    },
    economics: {
      revenuePerCustomer: 499,
      shippingPerMonth: 120,    // avg 3 swaps/mo: 3×($30+$10)
      otherVariable: 95,        // depreciation $40 + cleaning $30 + damage $15 + stylist $10
      contributionMargin: 284,
      marginPercent: 57,
    },
    testSegment: 'NYC, LA — high-income fashion enthusiasts 30-50',
    keyAdvantage: 'Highest ARPU. Small customer base needed for profitability.',
    keyRisk: 'Tiny addressable market. Needs flawless logistics for unlimited swaps.',
  },
]

// Summary stats
export const modelSummary = {
  totalModels: 7,
  rotateModels: 3,
  editModels: 4,
  priceRange: '$49–$499/mo',
  marginRange: '26%–90%',
  bestMargin: { id: 'R2', name: 'Rent-to-Own', margin: 90 },
  bestRevenue: { id: 'E4', name: 'Full Wardrobe', revenue: 499 },
  lowestRisk: { id: 'E3', name: 'Event Rental', reason: 'No commitment, widest audience' },
}
