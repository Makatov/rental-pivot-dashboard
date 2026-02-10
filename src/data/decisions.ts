import { Decision } from '@/types'

export const decisions: Decision[] = [
  {
    id: 'D1', status: 'decided', title: 'Dual-Brand Strategy',
    description: 'Launch two separate brands: EDIT (London, premium) and ROTATE (NYC, accessible luxury)',
    details: 'Different positioning allows A/B testing which model works, wider audience coverage, and quick pivot if one underperforms.',
  },
  {
    id: 'D2', status: 'decided', title: 'Hub Model for Shipping',
    description: 'Bulk ship to NYC/London hubs, local delivery to customers. Never ship individual items from KZ.',
    details: 'Reduces per-item shipping from $40-80 to $10-16 via bulk. Local shipping $8-12.',
  },
  {
    id: 'D3', status: 'decided', title: 'Subscription-First Revenue',
    description: '70% revenue from subscriptions, 20% buy-outs, 5% late/damage fees, 5% one-time rentals.',
  },
  {
    id: 'D4', status: 'decided', title: '$10K Bootstrap Budget',
    description: 'Self-funded with $10K. No external investment needed for MVP. Items already owned ($587K value).',
  },
  {
    id: 'D5', status: 'decided', title: 'NYC First, London Second',
    description: 'Launch ROTATE (NYC) Week 7, EDIT (London) Week 8. Validate in easier market first.',
    details: 'NYC has simpler import, larger rental market, lower regulatory burden than UK.',
  },
  {
    id: 'D6', status: 'decided', title: 'Vercel + Stripe Stack',
    description: 'Next.js on Vercel (free tier), Stripe for payments. Minimal tech cost.',
  },
  {
    id: 'D7', status: 'pending', title: '3PL Partner Selection',
    description: 'Need to select warehousing/fulfillment partners in NYC and London.',
    details: 'Requirements: receive bulk shipments, store 100+ items, pick/pack/ship to customers, process returns.',
  },
  {
    id: 'D8', status: 'pending', title: 'Customs Broker',
    description: 'Need experienced customs broker for US and UK luxury goods import.',
  },
  {
    id: 'D9', status: 'exploring', title: 'Insurance Model',
    description: 'How to insure $40K+ of luxury items across two countries during transit and rental.',
    details: 'Options: per-item insurance, blanket policy, self-insure with damage reserve fund.',
  },
  {
    id: 'D10', status: 'exploring', title: 'UK VAT Reclaim',
    description: 'Temporary import regime for rental goods could reduce UK import costs by 20%.',
    details: 'Need UK tax advisor to confirm feasibility for rental business model.',
  },
  {
    id: 'D11', status: 'decided', title: 'Initial Collection: 200 Items',
    description: '100 items per brand, selected from 2,347 rental-ideal items in warehouse.',
    details: 'Focus on $75-$500 price range, Excellent/New/Perfect condition. Mix of categories.',
  },
  {
    id: 'D12', status: 'pending', title: 'Dry Cleaning Partners',
    description: 'Need reliable luxury garment care partners in both cities.',
    details: 'Requirements: handle luxury fabrics, 24-48hr turnaround, pickup/delivery.',
  },
]
