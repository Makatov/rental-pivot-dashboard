import { Decision } from '@/types'

// v2 — updated decisions, NYC-first strategy
export const decisions: Decision[] = [
  {
    id: 'D1', status: 'decided', title: 'NYC First, London Later',
    description: 'Launch rotate (NYC) first. Add EDIT (London) only after 30+ NYC subscribers with positive unit economics.',
    details: 'Reduces initial complexity by 50%. NYC has simpler import, larger rental TAM, no VAT/Ltd overhead. London launch planned for Week 16+ if metrics are strong.',
  },
  {
    id: 'D2', status: 'decided', title: 'Meta Ads as Primary Channel',
    description: '40% of budget ($4,000) allocated to Instagram/Facebook ads. Main growth driver.',
    details: 'Target: NYC women 25-45, luxury fashion interests. Instagram Reels + Stories. CAC target < $80.',
  },
  {
    id: 'D3', status: 'decided', title: 'Development via Claude',
    description: 'All development done through Claude Code. Tech cost < $200 total (Claude API + domains).',
    details: 'Next.js on Vercel (free tier), Stripe for payments. No traditional dev team needed.',
  },
  {
    id: 'D4', status: 'decided', title: 'Hub Model for Shipping',
    description: 'Bulk ship to NYC warehouse, local delivery to customers. Never ship individual items from KZ.',
    details: 'Reduces per-item shipping from $40-80 to $10-16 via bulk. Local last-mile $8-12.',
  },
  {
    id: 'D5', status: 'decided', title: 'Subscription-First Revenue',
    description: '70% from subscriptions, 20% buy-outs, 5% late/damage fees, 5% one-time rentals.',
  },
  {
    id: 'D6', status: 'decided', title: '$10K Bootstrap Budget',
    description: 'Self-funded with $10K. Items already owned ($587K retail value). No external investment for MVP.',
  },
  {
    id: 'D7', status: 'decided', title: 'Shoes/Bags/Accessories First',
    description: 'Start with categories that have no sizing issues. Clothing (with sizes) added later.',
    details: 'Reduces return rate from wrong fit. Bags and shoes are most requested luxury rental items.',
  },
  {
    id: 'D8', status: 'decided', title: 'Saturday Weekly Syncs',
    description: 'Weekly planning meetings on Saturdays via Claude Code session.',
    details: 'Agenda: KPIs review, priorities, decisions, action items. Notes saved in claude-context/meetings/.',
  },
  {
    id: 'D9', status: 'pending', title: '3PL Partner Selection (NYC)',
    description: 'Need to select warehousing/fulfillment partner in NYC.',
    details: 'Options: Saltbox, Flexe, local micro-warehouse. Requirements: receive bulk, store 100+ items, pick/pack/ship.',
  },
  {
    id: 'D10', status: 'pending', title: 'Customs Broker',
    description: 'Need experienced customs broker for KZ → US luxury goods import.',
  },
  {
    id: 'D11', status: 'pending', title: 'Brand Domain',
    description: 'Need to purchase domain for rotate brand (rotatenow.co, getrotate.com, etc.).',
  },
  {
    id: 'D12', status: 'exploring', title: 'Insurance Model',
    description: 'How to insure $20K+ of luxury items during transit and rental.',
    details: 'Options: per-item insurance, blanket policy, self-insure with damage reserve fund.',
  },
]
