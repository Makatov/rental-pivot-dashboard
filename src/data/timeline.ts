import { TimelineWeek } from '@/types'

export const phases = [
  { name: 'Setup & Legal', weeks: [1, 2], color: '#6366f1' },
  { name: 'Development', weeks: [3, 4], color: '#8b5cf6' },
  { name: 'Logistics', weeks: [5, 6], color: '#f59e0b' },
  { name: 'Soft Launch', weeks: [7, 8], color: '#10b981' },
  { name: 'Iterate', weeks: [9, 10], color: '#3b82f6' },
  { name: 'Evaluate', weeks: [11, 12], color: '#ef4444' },
]

export const timelineData: TimelineWeek[] = [
  {
    week: 1, phase: 'Setup & Legal', phaseColor: '#6366f1',
    tasks: ['Register domains', 'Create Stripe accounts', 'Setup Instagram', 'Start waitlist pages', 'Contact customs brokers'],
  },
  {
    week: 2, phase: 'Setup & Legal', phaseColor: '#6366f1',
    tasks: ['Deploy waitlist pages', 'Register UK Ltd', 'Select 200 items', 'Begin customs paperwork'],
    milestone: 'Waitlist live, items selected',
  },
  {
    week: 3, phase: 'Development', phaseColor: '#8b5cf6',
    tasks: ['Next.js project setup', 'Catalog data export', 'Landing pages', 'Stripe products setup', 'Ship bulk to NYC'],
  },
  {
    week: 4, phase: 'Development', phaseColor: '#8b5cf6',
    tasks: ['Catalog with filters', 'Item detail pages', 'Stripe checkout', 'Subscriber dashboard'],
    milestone: 'MVP ready, items at hubs',
  },
  {
    week: 5, phase: 'Logistics', phaseColor: '#f59e0b',
    tasks: ['Rental flow', 'Return flow', 'Email notifications', 'Admin dashboard', 'Test NYC cycle'],
  },
  {
    week: 6, phase: 'Logistics', phaseColor: '#f59e0b',
    tasks: ['Mobile responsive', 'Test London cycle', 'Branded packaging', 'Coming soon campaign'],
    milestone: 'System tested end-to-end',
  },
  {
    week: 7, phase: 'Soft Launch', phaseColor: '#10b981',
    tasks: ['ROTATE launch (NYC)', 'Email waitlist', 'First 10 subscribers', 'First items shipped', 'Launch content'],
  },
  {
    week: 8, phase: 'Soft Launch', phaseColor: '#10b981',
    tasks: ['EDIT launch (London)', 'London subscribers', 'NYC first returns', 'Checkpoint 2 evaluation'],
    milestone: 'Both brands live, 15-20 subs',
  },
  {
    week: 9, phase: 'Iterate', phaseColor: '#3b82f6',
    tasks: ['Analyze returns', 'Customer interviews', 'Fix UX issues', 'Optimize cleaning', 'Referral program'],
  },
  {
    week: 10, phase: 'Iterate', phaseColor: '#3b82f6',
    tasks: ['Buy-out feature', 'Performance marketing test', 'Replenishment if needed', 'Retention check'],
    milestone: '25-30 subs, feedback integrated',
  },
  {
    week: 11, phase: 'Evaluate', phaseColor: '#ef4444',
    tasks: ['Financial review', 'Unit economics validation', 'Customer satisfaction survey', 'Inventory utilization report'],
  },
  {
    week: 12, phase: 'Evaluate', phaseColor: '#ef4444',
    tasks: ['GO / NO-GO decision', 'Plan Phase 2 or exit', 'Document learnings'],
    milestone: '30+ subs, positive unit economics',
  },
]
