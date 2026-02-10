import { Milestone } from '@/types'

// v7 — code-first milestones
export const milestones: Milestone[] = [
  { week: 2, title: 'Checkout Working End-to-End', criteria: 'Site deployed, all 3 checkout flows (RO1/ED1/ED2) functional with Stripe. Inventory system in code.', done: false },
  { week: 3, title: 'Site Ready for Real Orders', criteria: 'Legal pages live, email notifications working, full flow QA passed. DHL account set up.', done: false },
  { week: 5, title: 'First Paying Customers', criteria: 'Pre-positioned items live on site. First real orders processed and shipped domestically.', done: false },
  { week: 6, title: 'Site Validated (5-10 Customers)', criteria: '5-10 customers across models. Returns flow tested. Cleaning partner confirmed.', done: false },
  { week: 8, title: 'Influencers Onboard (15+ Customers)', criteria: '15+ customers. First 5 influencer collabs. Email automation + referral program live.', done: false },
  { week: 10, title: 'Model Data Clear (25+ Customers)', criteria: '25+ customers. Enough data to compare models. Winning model emerging. Ad creatives ready.', done: false },
  { week: 12, title: 'Winner Validated (35+ Customers)', criteria: '35+ customers. Best model + channel confirmed. Unit economics validated vs projections.', done: false },
  { week: 14, title: 'Scaling Profitably (45+ Customers)', criteria: '45+ customers on winning model. Net positive monthly cashflow. Retention data available.', done: false },
  { week: 16, title: '$5.8K MRR Target', criteria: '55+ customers. Winning model clear. 6-month scale plan ready or pivot decision made.', done: false },
]
