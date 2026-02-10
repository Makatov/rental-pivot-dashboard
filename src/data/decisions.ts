import { Decision } from '@/types'

// v4 — 3 models, content-first, DHL-direct
export const decisions: Decision[] = [
  {
    id: 'D1', status: 'decided', title: '3 Models, Not 7',
    description: 'Rotate Subscription (rotate), Membership+Rental (ÉDIT), Event Rental (ÉDIT). Killed 4 models with weak economics.',
    details: 'Killed: R1 (RTR-clone, they\'re not profitable after 15 years), R3 (shipping costs kill box model), E2 (quarterly = low touchpoint), E4 ($499/mo = no market for unknown brand). R2 redesigned from Rent-to-Own → Subscription with swaps (Nuuly-inspired).',
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
    description: 'R2: $119/mo subscription + swap + buy at 50% off. E1: membership + rental + buy at 50% off. E3: event rental + buy at 60% off.',
    details: 'Buyout at every model = extra revenue stream. Nuuly proved subscription retention > rent-to-own. Swaps keep customers engaged.',
  },
  {
    id: 'D5', status: 'decided', title: 'Both Brands Target US',
    description: 'rotate (subscription with swaps) and ÉDIT (premium, Membership + Event) both in US market.',
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
    id: 'D10', status: 'decided', title: '$200 Security Deposit (Stripe Hold)',
    description: '$200 authorization hold on card for every rental/subscription. Not a charge — released after return or ownership.',
    details: 'Covers damage, loss, late returns. Stripe auth hold = no cash impact to customer. Released 5-7 days after item return. Rotate Sub: held while active, released on cancel.',
  },
  {
    id: 'D11', status: 'pending', title: 'Pre-position Items in US',
    description: 'Ship 20-30 popular items bulk to US contact. Enables 2-day domestic delivery for Event Rental.',
    details: 'Reduces E3 shipping from $40 round-trip to $20. Makes Event Rental viable (no 5-7 day DHL wait).',
  },
  {
    id: 'D12', status: 'pending', title: 'US Returns Address',
    description: 'Need US-based address for returns. Friend/family for first 10-20 customers.',
  },
  {
    id: 'D13', status: 'pending', title: 'Cleaning Partner (US)',
    description: 'Luxury dry cleaner in US for items between rentals.',
  },
  {
    id: 'D14', status: 'pending', title: 'Terms of Service & Rental Agreement',
    description: 'Legal docs required before first customer: ToS, privacy policy, rental agreement template.',
    details: 'Cover: rental terms, damage liability, cancellation policy, dispute resolution. Auto-sent via email on checkout.',
  },
]
