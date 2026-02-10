import { TimelineWeek } from '@/types'

// v4 — content-first, 3 models, organic → influencers → Meta
export const phases = [
  { name: 'Content + Organic', weeks: [1, 2, 3, 4], color: '#6366f1' },
  { name: 'Influencers + Build', weeks: [5, 6, 7, 8], color: '#8b5cf6' },
  { name: 'Launch + Meta Ads', weeks: [9, 10, 11, 12], color: '#10b981' },
  { name: 'Scale Winner', weeks: [13, 14, 15, 16], color: '#f59e0b' },
]

export const timelineData: TimelineWeek[] = [
  {
    week: 1, phase: 'Content + Organic', phaseColor: '#6366f1',
    tasks: ['Instagram accounts for both brands', 'First 20 reels (unboxing, styling)', 'DHL account setup (-30% rate)', 'Register domains'],
  },
  {
    week: 2, phase: 'Content + Organic', phaseColor: '#6366f1',
    tasks: ['Daily posting (3/day)', 'First DM conversations', 'Ship 20 items to US contact (pre-position)', 'Product photography batch'],
    milestone: 'IG live, first DMs',
  },
  {
    week: 3, phase: 'Content + Organic', phaseColor: '#6366f1',
    tasks: ['First DM sales (Stripe payment links)', 'Ship items to first 2-3 customers via DHL', 'Waitlist page live', 'Identify 10 micro-influencers'],
  },
  {
    week: 4, phase: 'Content + Organic', phaseColor: '#6366f1',
    tasks: ['5-10 organic customers', 'First customer UGC (unboxing)', 'Pre-positioned items arrive at US contact', 'Setup Stripe for 3 models'],
    milestone: '5-10 customers, $0 CAC',
  },
  {
    week: 5, phase: 'Influencers + Build', phaseColor: '#8b5cf6',
    tasks: ['Send items to 5 influencers', 'Build checkout flows (3 models)', 'First customer reviews/testimonials', 'Content from real customers'],
  },
  {
    week: 6, phase: 'Influencers + Build', phaseColor: '#8b5cf6',
    tasks: ['Influencer posts go live', 'Launch Rent-to-Own on site', 'Launch Membership on site', 'Email automation setup'],
    milestone: 'Site live, 15+ customers',
  },
  {
    week: 7, phase: 'Influencers + Build', phaseColor: '#8b5cf6',
    tasks: ['Send items to 5 more influencers', 'Launch Event Rental (pre-positioned items)', 'First returns processed', 'Cleaning partner confirmed'],
  },
  {
    week: 8, phase: 'Influencers + Build', phaseColor: '#8b5cf6',
    tasks: ['20+ customers across models', 'Model comparison data', 'Prepare Meta Ad creatives (UGC-based)', 'Referral program live'],
    milestone: '20+ customers, model data',
  },
  {
    week: 9, phase: 'Launch + Meta Ads', phaseColor: '#10b981',
    tasks: ['Meta Ads start: boost best organic posts', '$400/week on best-performing model', 'Scale winning model', 'Kill/reduce worst model if needed'],
  },
  {
    week: 10, phase: 'Launch + Meta Ads', phaseColor: '#10b981',
    tasks: ['CAC comparison across channels', 'Customer interviews (5+)', 'Double down on best CAC channel', 'Increase inventory for winning model'],
    milestone: '30+ customers',
  },
  {
    week: 11, phase: 'Launch + Meta Ads', phaseColor: '#10b981',
    tasks: ['Optimize ad creatives (UGC performs best)', 'Retention check: who stayed, who churned?', 'Buyout conversion tracking', 'Ship more inventory for demand'],
  },
  {
    week: 12, phase: 'Launch + Meta Ads', phaseColor: '#10b981',
    tasks: ['CHECKPOINT: model + channel performance', 'Unit economics validation', 'Best model identified', '38+ customers target'],
    milestone: '38+ customers, winner clear',
  },
  {
    week: 13, phase: 'Scale Winner', phaseColor: '#f59e0b',
    tasks: ['All budget → winning model', 'Scale Meta Ads if CAC holds', 'Influencer round 2 (proven ROI)', 'Pre-position more inventory in US'],
  },
  {
    week: 14, phase: 'Scale Winner', phaseColor: '#f59e0b',
    tasks: ['48+ customers', 'Test TikTok organic', 'Customer retention analysis', 'Plan P2P hybrid (Phase 2)'],
    milestone: '48+ customers, profitable',
  },
  {
    week: 15, phase: 'Scale Winner', phaseColor: '#f59e0b',
    tasks: ['Full financial review', 'Inventory utilization report', 'Prepare 6-month scale plan', 'Explore: let customers list their own items?'],
  },
  {
    week: 16, phase: 'Scale Winner', phaseColor: '#f59e0b',
    tasks: ['55+ customers target', 'MRR $5,800+', 'Winning model + channel confirmed', 'Scale plan or pivot decision'],
    milestone: '55+ customers, $5.8K MRR',
  },
]
