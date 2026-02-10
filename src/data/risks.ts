import { Risk } from '@/types'

// v2 — updated risk matrix, NYC-first focus
export const risks: Risk[] = [
  { id: 'R1', risk: 'Meta CAC too high (>$150)', probability: 'HIGH', impact: 'HIGH', severity: 'CRITICAL', mitigation: 'Test 5+ creatives, try Reels/UGC format, build organic Instagram first' },
  { id: 'R2', risk: 'Shipping costs eat margin', probability: 'HIGH', impact: 'HIGH', severity: 'CRITICAL', mitigation: 'Hub model, bulk shipping via freight, negotiate 3PL rates' },
  { id: 'R3', risk: 'Low demand / no subscribers', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Waitlist validation before launch, beta test, iterate pricing' },
  { id: 'R4', risk: 'High damage/loss rate', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Security deposits, insurance policy, clear damage policies' },
  { id: 'R5', risk: 'Customs delays (KZ→US)', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Start shipping 4 weeks early, experienced broker, buffer time' },
  { id: 'R6', risk: '3PL partner unreliable', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Have backup options, start with manual fulfillment if needed' },
  { id: 'R7', risk: 'High churn (>25%/month)', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Customer interviews, improve curation, add perks for retention' },
  { id: 'R8', risk: 'Wrong size/fit → returns', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Start with shoes/bags/accessories (no sizing issues)' },
  { id: 'R9', risk: 'Cleaning turnaround too slow', probability: 'LOW', impact: 'MEDIUM', severity: 'LOW', mitigation: 'Multiple cleaning partners, SLA agreements, buffer inventory' },
  { id: 'R10', risk: 'Competitor reaction', probability: 'LOW', impact: 'LOW', severity: 'LOW', mitigation: 'Niche positioning (European luxury in NYC), community building' },
]
