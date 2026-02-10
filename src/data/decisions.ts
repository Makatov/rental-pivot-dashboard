import { Decision } from '@/types'

// v4 — 3 models, content-first, DHL-direct
export const decisions: Decision[] = [
  {
    id: 'D1', status: 'decided', title: '3 Models, Not 7',
    description: 'Rent-to-Own (rotate), Membership+Rental (ÉDIT), Event Rental (ÉDIT). Killed 4 models with weak economics.',
    details: 'Killed: R1 (RTR-clone, they\'re not profitable after 15 years), R3 (shipping costs kill box model), E2 (quarterly = low touchpoint), E4 ($499/mo = no market for unknown brand).',
  },
  {
    id: 'D2', status: 'decided', title: 'Content-First, Ads-Second',
    description: 'Instagram organic + DM sales first (Weeks 1-4, $0). Then micro-influencers ($800). Meta Ads only on validated models ($1,200).',
    details: 'RTR got 80% of customers through word-of-mouth. 12 micro-influencers beat 2 macro by 340% engagement + 2.8x conversion. Each of our 2,347 items = content.',
  },
  {
    id: 'D3', status: 'decided', title: 'DHL Direct from KZ',
    description: 'Ship directly via DHL (-30%). No warehouse. Returns to US contact ($10 domestic).',
    details: 'At <50 subs, DHL-direct is cheaper than hub model. Pre-position 20-30 popular items at US contact for Event Rental.',
  },
  {
    id: 'D4', status: 'decided', title: 'Subscription + Buyout Core',
    description: 'Rent 12 months → own at 5% (R2: auto-own at 0%). Event Rental: buy at 60% off during rental.',
    details: 'Buyout eliminates return logistics. Customer invested in item care. Revenue from buyouts is pure margin.',
  },
  {
    id: 'D5', status: 'decided', title: 'Both Brands Target US',
    description: 'rotate (accessible, Rent-to-Own) and ÉDIT (premium, Membership + Event) both in US market.',
    details: 'No London. ÉDIT repositioned to US premium. Shipping from KZ → any US city costs the same.',
  },
  {
    id: 'D6', status: 'decided', title: '$2K Ads, $8K Operations',
    description: '$2,000 on acquisition (influencers + Meta). $8,000 on shipping, customs, cleaning, packaging, buffer.',
    details: 'Organic first = $0 CAC for first 5-10 customers. Influencers = $40-80 CAC. Meta only on winners = $100-170 CAC. Blended: $57.',
  },
  {
    id: 'D7', status: 'decided', title: 'Development via Claude',
    description: 'All development through Claude Code. Tech cost < $200 total.',
  },
  {
    id: 'D8', status: 'decided', title: 'US LLC Already Exists',
    description: 'No need to register new entity. Can operate immediately.',
  },
  {
    id: 'D9', status: 'decided', title: 'Saturday Weekly Syncs',
    description: 'Weekly planning on Saturdays via Claude Code. Review model metrics, kill/scale decisions.',
  },
  {
    id: 'D10', status: 'pending', title: 'Pre-position Items in US',
    description: 'Ship 20-30 popular items bulk to US contact. Enables 2-day domestic delivery for Event Rental.',
    details: 'Reduces E3 shipping from $40 round-trip to $20. Makes Event Rental viable (no 5-7 day DHL wait).',
  },
  {
    id: 'D11', status: 'pending', title: 'US Returns Address',
    description: 'Need US-based address for returns. Friend/family for first 10-20 customers.',
  },
  {
    id: 'D12', status: 'pending', title: 'Cleaning Partner (US)',
    description: 'Luxury dry cleaner in US for items between rentals.',
  },
]
