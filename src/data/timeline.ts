import { TimelineWeek } from '@/types'

// v2 — 16-week NYC-first timeline
export const phases = [
  { name: 'Preparation', weeks: [1, 2, 3, 4], color: '#6366f1' },
  { name: 'Build & Waitlist', weeks: [5, 6, 7, 8], color: '#8b5cf6' },
  { name: 'Launch', weeks: [9, 10, 11, 12], color: '#10b981' },
  { name: 'Scale / Evaluate', weeks: [13, 14, 15, 16], color: '#f59e0b' },
]

export const timelineData: TimelineWeek[] = [
  {
    week: 1, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Research US luxury import rules', 'Contact customs brokers (3 quotes)', 'Research NYC micro-warehousing', 'Register domain'],
  },
  {
    week: 2, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Setup Instagram + business email', 'Start mood board content', 'Research 3PL options (Saltbox, Flexe)', 'Begin waitlist landing page'],
    milestone: 'Domain + Instagram live',
  },
  {
    week: 3, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Select 100 items from warehouse', 'Professional product photography', 'Start customs paperwork', 'Launch waitlist page'],
  },
  {
    week: 4, phase: 'Preparation', phaseColor: '#6366f1',
    tasks: ['Ship bulk to NYC (via freight)', 'Start Meta ads for waitlist ($300)', 'Finalize 3PL partner', 'Setup Stripe account'],
    milestone: '100+ waitlist, items shipped',
  },
  {
    week: 5, phase: 'Build & Waitlist', phaseColor: '#8b5cf6',
    tasks: ['Build catalog + subscription flow (Claude)', 'Stripe products & plans setup', 'Email automation (welcome, confirmation)', 'Continue waitlist growth ads'],
  },
  {
    week: 6, phase: 'Build & Waitlist', phaseColor: '#8b5cf6',
    tasks: ['Checkout flow + subscriber dashboard', 'Items arrive NYC, inventory check', 'Negotiate cleaning partner', 'Instagram content ramp-up'],
    milestone: 'MVP site ready, items at warehouse',
  },
  {
    week: 7, phase: 'Build & Waitlist', phaseColor: '#8b5cf6',
    tasks: ['Beta test with 3-5 waitlist users', 'Full rental cycle test', 'Fix logistics issues', 'Prepare launch content'],
  },
  {
    week: 8, phase: 'Build & Waitlist', phaseColor: '#8b5cf6',
    tasks: ['Final QA and polish', 'Setup analytics (Plausible/Mixpanel)', 'Prepare launch email sequence', 'Brief influencers/friends for launch day'],
    milestone: 'System tested e2e, 200+ waitlist',
  },
  {
    week: 9, phase: 'Launch', phaseColor: '#10b981',
    tasks: ['ROTATE soft launch (email waitlist)', 'First 5-10 paying subscribers', 'Ramp Meta ads ($600/mo)', 'Daily ops monitoring'],
  },
  {
    week: 10, phase: 'Launch', phaseColor: '#10b981',
    tasks: ['Customer interviews (5+ calls)', 'Fix top 3 issues', 'Launch referral program', 'A/B test ad creatives'],
    milestone: '10-15 active subscribers',
  },
  {
    week: 11, phase: 'Launch', phaseColor: '#10b981',
    tasks: ['Optimize shipping workflow', 'First returns processed', 'Cleaning cycle validated', 'Content from real customers (UGC)'],
  },
  {
    week: 12, phase: 'Launch', phaseColor: '#10b981',
    tasks: ['First checkpoint review', 'Unit economics validation', 'Churn analysis', 'Adjust pricing if needed'],
    milestone: '15-20 subs, ops validated',
  },
  {
    week: 13, phase: 'Scale / Evaluate', phaseColor: '#f59e0b',
    tasks: ['Optimize top ad sets', 'Add buy-out option for popular items', 'Test organic (TikTok, partnerships)', 'Replenish popular categories'],
  },
  {
    week: 14, phase: 'Scale / Evaluate', phaseColor: '#f59e0b',
    tasks: ['Scale Meta budget if CAC < $80', 'Customer satisfaction survey', 'Retention analysis', 'Consider adding EDIT if metrics strong'],
    milestone: '25-30 active subscribers',
  },
  {
    week: 15, phase: 'Scale / Evaluate', phaseColor: '#f59e0b',
    tasks: ['Full financial review', 'Inventory utilization report', 'Competitor analysis update', 'Prepare Phase 2 plan'],
  },
  {
    week: 16, phase: 'Scale / Evaluate', phaseColor: '#f59e0b',
    tasks: ['GO / NO-GO decision', 'If GO: plan London (EDIT) launch', 'If ADJUST: iterate model', 'Document all learnings'],
    milestone: '30+ subs → decide on London',
  },
]
