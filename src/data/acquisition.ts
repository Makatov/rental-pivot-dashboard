import { AcquisitionPhase } from '@/types'

export const acquisitionPhases: AcquisitionPhase[] = [
  {
    id: 'organic',
    name: 'Organic + DM Sales',
    weeks: 'W1–4',
    budget: 0,
    expectedCustomers: '5–10',
    cac: '$0',
    description: '3 posts/day × 30 days = 90 posts. Each of 2,347 items = content. First customers via Instagram DMs.',
    color: '#10b981',
  },
  {
    id: 'influencers',
    name: 'Micro-Influencers',
    weeks: 'W3–8',
    budget: 800,
    expectedCustomers: '10–20',
    cac: '$40–80',
    description: '10 influencers × $80 avg. Combined reach 150K–500K. 340% more engagement than macro.',
    color: '#8b5cf6',
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads (Winners Only)',
    weeks: 'W7–12',
    budget: 1200,
    expectedCustomers: '7–12',
    cac: '$100–170',
    description: 'Only boost posts that already convert organically. UGC as ad creative. $400/week on best model.',
    color: '#f59e0b',
  },
]

export const acquisitionSummary = {
  totalBudget: 2000,
  totalCustomers: '25–42',
  blendedCac: '$48–80',
}
