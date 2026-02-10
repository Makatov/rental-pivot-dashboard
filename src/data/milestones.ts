import { Milestone } from '@/types'

// v2 — 16-week NYC-first milestones
export const milestones: Milestone[] = [
  { week: 2, title: 'Domain + Instagram Live', criteria: 'Brand presence online', done: false },
  { week: 4, title: 'Waitlist + Items Shipped', criteria: '100+ signups, items in transit', done: false },
  { week: 6, title: 'MVP Ready', criteria: 'Site functional, items at NYC warehouse', done: false },
  { week: 8, title: 'System Tested', criteria: 'Full cycle validated, 200+ waitlist', done: false },
  { week: 9, title: 'ROTATE Launch (NYC)', criteria: '5-10 paying subscribers', done: false },
  { week: 10, title: 'First Returns', criteria: '10-15 subs, ops running', done: false },
  { week: 12, title: 'Checkpoint 1', criteria: '15-20 subs, unit economics validated', done: false },
  { week: 14, title: 'Scale Check', criteria: '25-30 subs, CAC < $80', done: false },
  { week: 16, title: 'GO / NO-GO', criteria: '30+ subs, positive unit economics → London?', done: false },
]
