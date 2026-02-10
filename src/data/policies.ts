import { Policy, LegalItem } from '@/types'

export const policies: Policy[] = [
  {
    id: 'security-deposit',
    title: 'Security Deposit',
    items: [
      { label: '$200 auth hold', description: 'Stripe authorization hold on credit card — NOT a charge, customer sees "pending"' },
      { label: 'Released 5-7 days', description: 'After item return and inspection' },
      { label: 'Deductions', description: 'Unrepairable damage, lost item, late return (>3 days)' },
      { label: 'Rotate Sub', description: 'Deposit held while subscription active. Released on cancellation after items returned' },
    ],
  },
  {
    id: 'damage-loss',
    title: 'Damage & Loss',
    items: [
      { label: 'Minor wear', description: 'No charge — expected with normal use of luxury items' },
      { label: 'Repairable damage', description: 'Customer charged actual repair cost (deducted from deposit)' },
      { label: 'Unrepairable / Lost', description: 'Charged up to retail value minus total payments already made' },
      { label: 'Transit damage', description: 'DHL shipping insurance covers damage in transit' },
    ],
  },
  {
    id: 'late-returns',
    title: 'Late Returns',
    items: [
      { label: '1-3 days late', description: 'Friendly reminder, no charge' },
      { label: '4-7 days late', description: '$25/day late fee' },
      { label: '7+ days late', description: 'Treated as purchase at full rental-to-own price' },
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation',
    items: [
      { label: 'Rotate Sub', description: 'Cancel anytime. Return both items within 7 days. Deposit returned after inspection' },
      { label: 'Membership', description: 'Cancel anytime. Return all items within 7 days. Deposit returned' },
      { label: 'Event Rental', description: '48+ hrs before ship → full refund. <48 hrs → 50% refund. After delivery → no refund' },
    ],
  },
  {
    id: 'non-payment',
    title: 'Non-Payment',
    items: [
      { label: 'Auto-retry', description: 'Stripe handles automatic retries (3 attempts over 7 days)' },
      { label: 'After failed retries', description: 'Subscription paused, customer notified via email' },
      { label: 'After 14 days', description: 'Subscription cancelled, item treated as unreturned, deposit forfeited' },
    ],
  },
]

export const legalItems: LegalItem[] = [
  { id: 'tos', title: 'Terms of Service', description: 'Rental agreement, damage liability, cancellation, dispute resolution', done: false },
  { id: 'privacy', title: 'Privacy Policy', description: 'Required for website and Stripe checkout', done: false },
  { id: 'rental-agreement', title: 'Rental Agreement Template', description: 'Auto-sent via email on every checkout', done: false },
  { id: 'state-regs', title: 'State Regulations Check', description: 'Verify if rental/subscription requires specific licensing', done: false },
]
