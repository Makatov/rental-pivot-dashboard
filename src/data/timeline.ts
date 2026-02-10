import { TimelineWeek } from '@/types'

// v3 — 16-week multi-model testing, DHL-direct, both brands US
export const phases = [
  { name: 'Preparation', weeks: [1, 2, 3, 4], color: '#6366f1' },
  { name: 'Build & Test', weeks: [5, 6, 7, 8], color: '#8b5cf6' },
  { name: 'Launch 7 Models', weeks: [9, 10, 11, 12], color: '#10b981' },
  { name: 'Kill / Scale', weeks: [13, 14, 15, 16], color: '#f59e0b' },
]

export const timelineData: TimelineWeek[] = [
  {
    week: 1, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Finalize 7 model specs', 'DHL account setup (-30% rate)', 'Select 50 items for first batch', 'Register domains for both brands'],
  },
  {
    week: 2, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Product photography (50 items)', 'Setup Instagram for both brands', 'US returns address sorted', 'Start waitlist pages (rotate + ÉDIT)'],
    milestone: 'Domains + IG live',
  },
  {
    week: 3, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Ship first 20 items via DHL (test)', 'Setup Stripe (7 product configs)', 'Start Meta ads for waitlist ($200)', 'Customs paperwork for test shipment'],
  },
  {
    week: 4, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Test shipment arrives, validate DHL flow', 'US cleaning partner confirmed', 'Landing page variants for all 7 models', 'Waitlist: 100+ combined signups'],
    milestone: 'DHL tested, 100+ waitlist',
  },
  {
    week: 5, phase: 'Build & Test', phaseColor: '#8b5cf6',
    tasks: ['Build checkout flows (7 variants)', 'Email automation per model', 'Ship 30 more items via DHL', 'Ad creatives for each model'],
  },
  {
    week: 6, phase: 'Build & Test', phaseColor: '#8b5cf6',
    tasks: ['Beta: 2-3 testers per model (free)', 'Full rental cycle test per model', 'Fix DHL logistics issues', 'Content: unboxing videos, lifestyle shots'],
    milestone: 'All 7 models testable',
  },
  {
    week: 7, phase: 'Build & Test', phaseColor: '#8b5cf6',
    tasks: ['Iterate based on beta feedback', 'Return flow tested', 'Analytics setup per model', 'Waitlist growth: target 200+'],
  },
  {
    week: 8, phase: 'Build & Test', phaseColor: '#8b5cf6',
    tasks: ['Final QA all checkout flows', 'Meta Ads structure: 7 ad sets ready', 'Launch email sequences prepared', 'Packaging + branded inserts ready'],
    milestone: '200+ waitlist, all flows ready',
  },
  {
    week: 9, phase: 'Launch 7 Models', phaseColor: '#10b981',
    tasks: ['LAUNCH all 7 models simultaneously', 'Meta Ads: $80/model/week (7 ad sets)', 'Waitlist emails sent per model', 'Daily monitoring: orders, shipping, issues'],
  },
  {
    week: 10, phase: 'Launch 7 Models', phaseColor: '#10b981',
    tasks: ['First model performance data', 'Customer interviews (2 per model)', 'Fix top issues per model', 'Shipping time tracking'],
    milestone: '15+ customers across models',
  },
  {
    week: 11, phase: 'Launch 7 Models', phaseColor: '#10b981',
    tasks: ['First returns processed', 'Model CAC comparison', 'Identify top 3 and bottom 2 models', 'Increase spend on winners'],
  },
  {
    week: 12, phase: 'Launch 7 Models', phaseColor: '#10b981',
    tasks: ['CHECKPOINT: model performance review', 'Kill bottom 2 models', 'Reallocate budget to top 3', 'Unit economics validation per model'],
    milestone: 'Kill/Scale decision, 25+ customers',
  },
  {
    week: 13, phase: 'Kill / Scale', phaseColor: '#f59e0b',
    tasks: ['Double down on top 3 models', 'Scale Meta spend for winners', 'Ship more inventory for winning models', 'Launch referral program'],
  },
  {
    week: 14, phase: 'Kill / Scale', phaseColor: '#f59e0b',
    tasks: ['City expansion for top model', 'Customer retention analysis', 'Buyout conversion tracking', 'UGC content campaign'],
    milestone: '40+ customers, 3 validated models',
  },
  {
    week: 15, phase: 'Kill / Scale', phaseColor: '#f59e0b',
    tasks: ['Full financial review all models', 'Inventory utilization by model', 'Prepare scale plan for top 1-2', 'Test organic channels (TikTok)'],
  },
  {
    week: 16, phase: 'Kill / Scale', phaseColor: '#f59e0b',
    tasks: ['Final GO/NO-GO per model', 'Top 1-2 models → scale plan', 'Budget projection for next 6 months', 'Document all learnings'],
    milestone: 'Top models identified → scale',
  },
]
