import { Risk } from '@/types'

export const risks: Risk[] = [
  { id: 'R1', risk: 'Shipping costs eat margin', probability: 'HIGH', impact: 'HIGH', severity: 'CRITICAL', mitigation: 'Hub model, bulk shipping, negotiate rates' },
  { id: 'R2', risk: 'Logistics overwhelming for small team', probability: 'HIGH', impact: 'HIGH', severity: 'CRITICAL', mitigation: '3PL partner, automate tracking, limit initial scale' },
  { id: 'R3', risk: 'Low demand / no subscribers', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Waitlist validation, soft launch, Instagram marketing' },
  { id: 'R4', risk: 'High damage/loss rate', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Security deposits, clear policies, insurance' },
  { id: 'R5', risk: 'UK import costs too high', probability: 'HIGH', impact: 'MEDIUM', severity: 'HIGH', mitigation: 'Start NYC first, validate model before UK' },
  { id: 'R6', risk: 'Customs delays', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Start 4 weeks early, experienced broker' },
  { id: 'R7', risk: 'Wrong size/fit → high returns', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Detailed measurements, size guides, free swaps' },
  { id: 'R8', risk: 'Competitor reaction', probability: 'LOW', impact: 'HIGH', severity: 'MEDIUM', mitigation: 'Move fast, build community, niche positioning' },
  { id: 'R9', risk: 'Items stuck in cleaning cycle', probability: 'LOW', impact: 'MEDIUM', severity: 'LOW', mitigation: 'Multiple cleaning partners, fast turnaround SLA' },
  { id: 'R10', risk: 'Technology issues', probability: 'LOW', impact: 'MEDIUM', severity: 'LOW', mitigation: 'Battle-tested stack (Vercel + Stripe), monitoring' },
  { id: 'R11', risk: 'Regulatory changes (UK)', probability: 'LOW', impact: 'MEDIUM', severity: 'LOW', mitigation: 'Stay informed, UK legal advisor on retainer' },
  { id: 'R12', risk: 'Negative PR (damaged items)', probability: 'LOW', impact: 'HIGH', severity: 'MEDIUM', mitigation: 'Strict QC, proactive customer service, replacement policy' },
]
