import { Decision } from '@/types'

// v3 — multi-model testing, DHL-direct, both brands US
export const decisions: Decision[] = [
  {
    id: 'D1', status: 'decided', title: 'Both Brands Target US',
    description: 'rotate (accessible) and ÉDIT (premium) both launch in the US. Different positioning, different business models.',
    details: 'No London. Both brands test different subscription/rental models across US cities. ÉDIT repositioned from London premium to US premium.',
  },
  {
    id: 'D2', status: 'decided', title: '7 Business Models to Test',
    description: 'rotate: Subscription+Swap, Rent-to-Own, Try&Buy. ÉDIT: Membership+Rental, Seasonal Capsule, Event Rental, Full Wardrobe.',
    details: 'Goal: identify top 2-3 models by Week 12. Kill underperformers fast. Each model tested with separate ad sets.',
  },
  {
    id: 'D3', status: 'decided', title: 'DHL Direct from KZ',
    description: 'Ship items directly from KZ to US customers via DHL (-30% discount). No NYC warehouse.',
    details: 'DHL contact with -30% rate. KZ→US ~$30/item. Returns go to US-based contact ($10 domestic) not back to KZ. Eliminates 3PL/warehouse cost entirely.',
  },
  {
    id: 'D4', status: 'decided', title: 'Subscription + Buyout Base Model',
    description: 'Core mechanic: rent items, after 12 months of renting same item pay 5% to own it.',
    details: 'Applied to R1, E2, E4. Variations: R2 (auto-own after 12 payments), R3/E3 (instant buy at discount), E1 (member discount buy).',
  },
  {
    id: 'D5', status: 'decided', title: 'Meta Ads as Primary Channel',
    description: '40% of budget ($4,000) to Instagram/Facebook. Separate ad sets per model.',
    details: 'Each model gets its own creative + landing variant. A/B test: which model converts best at lowest CAC?',
  },
  {
    id: 'D6', status: 'decided', title: 'Development via Claude',
    description: 'All development through Claude Code. Tech cost < $200 total.',
    details: 'Next.js on Vercel (free), Stripe for payments. 7 landing page variants from shared components.',
  },
  {
    id: 'D7', status: 'decided', title: '$10K Bootstrap Budget',
    description: 'Self-funded. Items already owned ($587K retail). US LLC exists. No external investment for MVP.',
  },
  {
    id: 'D8', status: 'decided', title: 'Saturday Weekly Syncs',
    description: 'Weekly planning meetings on Saturdays via Claude Code session.',
    details: 'Review model performance, kill/scale decisions, budget reallocation.',
  },
  {
    id: 'D9', status: 'decided', title: 'US LLC Already Exists',
    description: 'No need to register new entity. Can operate immediately.',
  },
  {
    id: 'D10', status: 'pending', title: 'Landing Page Variants per Model',
    description: 'Each of the 7 models needs a distinct landing page variant or section highlighting that specific model.',
    details: 'Could be: separate URLs (/rotate/subscription, /rotate/rent-to-own, etc.) or single page with tabs. TBD.',
  },
  {
    id: 'D11', status: 'pending', title: 'US Returns Address',
    description: 'Need a US-based address for domestic returns. Options: friend/family, PO box, or returns service.',
    details: 'First 10 customers: use personal contact in US. Scale: need a returns processing partner.',
  },
  {
    id: 'D12', status: 'pending', title: 'Cleaning Partner (US)',
    description: 'Items returned to US need cleaning before re-shipping. Need luxury dry cleaner partner.',
  },
  {
    id: 'D13', status: 'exploring', title: 'City-Specific Testing',
    description: 'Test different models in different cities via Meta Ads geo-targeting.',
    details: 'Idea: R1 in NYC/LA, R2 in Miami/Austin, E1 in DC, E3 nationwide. Shipping cost identical (all from KZ), so city = ad targeting only.',
  },
]
