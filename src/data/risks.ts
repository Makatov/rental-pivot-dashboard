import { Risk } from '@/types'

// v3 — multi-model testing, DHL-direct, both brands US
export const risks: Risk[] = [
  { id: 'R1', risk: 'Meta CAC too high (>$150)', probability: 'HIGH', impact: 'HIGH', severity: 'CRITICAL', mitigation: 'Test 7 models simultaneously — kill losers fast, scale winners. UGC > polished ads.' },
  { id: 'R2', risk: 'DHL shipping time (5-7 days KZ→US)', probability: 'HIGH', impact: 'HIGH', severity: 'CRITICAL', mitigation: 'Pre-ship popular items. Event Rental model most at risk — needs 10-day lead time.' },
  { id: 'R3', risk: 'Spreading $4K ads across 7 models too thin', probability: 'HIGH', impact: 'MEDIUM', severity: 'HIGH', mitigation: '$80/model/week for 4 weeks → kill bottom 2 by Week 12 → reallocate.' },
  { id: 'R4', risk: 'Low demand / wrong product-market fit', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: '7 models = 7 bets. At least 1-2 should find PMF. Waitlist validates interest.' },
  { id: 'R5', risk: 'Returns logistics (US-side)', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'First 10 customers: friend/family address. Scale: returns processing service.' },
  { id: 'R6', risk: 'Customs issues on DHL shipments', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Test shipment Week 3. Proper documentation. Items are pre-owned = lower duty.' },
  { id: 'R7', risk: 'High churn (>25%/month)', probability: 'MEDIUM', impact: 'HIGH', severity: 'HIGH', mitigation: 'Rent-to-Own model has natural lock-in. Buyout incentive reduces churn.' },
  { id: 'R8', risk: 'Item damage during DHL transit', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Proper packaging. DHL insurance on high-value items. Damage reserve fund.' },
  { id: 'R9', risk: 'Operational complexity of 7 models', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Shared backend, different frontend flows. Kill models aggressively to simplify.' },
  { id: 'R10', risk: 'Try & Buy low keep rate (<30%)', probability: 'MEDIUM', impact: 'MEDIUM', severity: 'MEDIUM', mitigation: 'Better curation, AI styling, personal preferences survey before box.' },
]
