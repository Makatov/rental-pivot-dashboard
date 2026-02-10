import { Risk } from '@/types'

// v4 — 3 models, content-first, DHL-direct
export const risks: Risk[] = [
  { id: 'R1', risk: 'Instagram organic gets zero traction', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Test 5 content formats (unboxing, GRWM, styling, price reveal, comparison). 2,347 items = content. Pivot to paid if 0 DMs after 2 weeks.' },
  { id: 'R2', risk: 'DHL shipping time (5-7 days)', probability: 'HIGH', impact: 'HIGH', severity: 'CRITICAL', mitigation: 'Pre-position 20-30 items at US contact. Event Rental only uses pre-positioned items. Rotate Sub initial set = plan ahead, swaps = scheduled.' },
  { id: 'R3', risk: 'Meta CAC > $150 (when we start ads)', probability: 'HIGH', impact: 'MEDIUM', severity: 'HIGH', mitigation: 'Only $1,200 at risk. Use UGC from organic phase as ad creative (proven to convert). Kill ads if CAC > $200 after $400 spent.' },
  { id: 'R4', risk: 'Returns logistics fail (US-side)', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Rotate Sub: 1 swap/mo = manageable volume. Event Rental returns to pre-positioned contact. Batch returns to KZ for cleaning.' },
  { id: 'R5', risk: 'Customs issues on DHL shipments', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Test shipment Week 2-3. Pre-owned luxury = lower duty than new. Proper documentation.' },
  { id: 'R6', risk: 'High churn on Membership model', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Track rental frequency. If avg < 1 rental/month, model is broken → kill and focus on R2 + E3.' },
  { id: 'R7', risk: 'Item damage during transit or rental', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'DHL insurance on items > $500. Damage reserve $5-8/mo per customer. Clear damage policy + security deposit.' },
  { id: 'R8', risk: 'Micro-influencers don\'t convert', probability: 'MEDIUM', impact: 'LOW', severity: 'LOW', mitigation: 'Only $800 at risk. Send free item (cost: $50 ship+depreciation). If 0 conversions after 5 influencers, stop and go to Meta.' },
  { id: 'R9', risk: 'Cleaning turnaround too slow (US)', probability: 'LOW', impact: 'MEDIUM', severity: 'LOW', mitigation: 'KZ cleaning = $8 (vs $20 US). Event Rental: build 3-day buffer. Membership & Rotate: 2+ cleaning partner options.' },
  { id: 'R10', risk: 'Competitor copies model', probability: 'LOW', impact: 'LOW', severity: 'LOW', mitigation: 'Speed is the moat. Content + community > features. Inventory is unique (European luxury from KZ).' },
]
