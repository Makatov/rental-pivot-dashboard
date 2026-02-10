'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Methodology } from '@/components/ui/methodology'
import { projections, cumulativeChartData, unitEconomics, modelEconomics, getCac } from '@/data/financials'
import type { ScenarioKey } from '@/types'

const LineChart = dynamic(() => import('recharts').then(m => m.LineChart), { ssr: false })
const Line = dynamic(() => import('recharts').then(m => m.Line), { ssr: false })
const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const CartesianGrid = dynamic(() => import('recharts').then(m => m.CartesianGrid), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const Legend = dynamic(() => import('recharts').then(m => m.Legend), { ssr: false })
const ReferenceLine = dynamic(() => import('recharts').then(m => m.ReferenceLine), { ssr: false })

const scenarioConfig: Record<ScenarioKey, { label: string; color: string; bg: string }> = {
  pessimist: { label: 'Pessimist', color: '#ef4444', bg: 'bg-red-100 text-red-700 border-red-300' },
  realist: { label: 'Realist', color: '#3b82f6', bg: 'bg-blue-100 text-blue-700 border-blue-300' },
  optimist: { label: 'Optimist', color: '#10b981', bg: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
}

export function FinancialProjections() {
  const [scenario, setScenario] = useState<ScenarioKey>('realist')
  const data = projections[scenario]

  const revenueByModel = data.map((m) => ({
    month: `M${m.month}`,
    RO1: m.ro1 * modelEconomics.ro1.arpu,
    ED1: m.ed1 * modelEconomics.ed1.arpu,
    ED2: m.ed2 * modelEconomics.ed2.arpu,
  }))

  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">Financial Projections</h2>

      {/* Scenario toggle */}
      <div className="flex gap-2">
        {(Object.keys(scenarioConfig) as ScenarioKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setScenario(key)}
            className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
              scenario === key
                ? scenarioConfig[key].bg
                : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
            }`}
          >
            {scenarioConfig[key].label}
          </button>
        ))}
      </div>

      {/* Cumulative P&L — all 3 scenarios */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Cumulative P&L — All Scenarios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cumulativeChartData} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v >= 1000 || v <= -1000 ? `${(v/1000).toFixed(1)}K` : v}`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="4 4" />
                <Line
                  type="monotone"
                  dataKey="pessimist"
                  stroke="#ef4444"
                  strokeWidth={scenario === 'pessimist' ? 3 : 1}
                  strokeOpacity={scenario === 'pessimist' ? 1 : 0.4}
                  dot={scenario === 'pessimist'}
                  name="Pessimist"
                />
                <Line
                  type="monotone"
                  dataKey="realist"
                  stroke="#3b82f6"
                  strokeWidth={scenario === 'realist' ? 3 : 1}
                  strokeOpacity={scenario === 'realist' ? 1 : 0.4}
                  dot={scenario === 'realist'}
                  name="Realist"
                />
                <Line
                  type="monotone"
                  dataKey="optimist"
                  stroke="#10b981"
                  strokeWidth={scenario === 'optimist' ? 3 : 1}
                  strokeOpacity={scenario === 'optimist' ? 1 : 0.4}
                  dot={scenario === 'optimist'}
                  name="Optimist"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <Methodology>
            <p>Each line shows the running total of all monthly profits/losses (cumulative net). The dashed zero-line marks break-even.</p>
            <p><strong>Cumulative = sum of Net for months 1..N</strong>, where Net = Revenue - Costs.</p>
            <p>Three scenarios differ by churn rate, customer acquisition speed, and CAC:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Pessimist</strong> — 20% monthly churn, slow organic growth, higher CAC ($80-100/customer). Ads start later, conversions are lower. Break-even not reached in 6 months.</li>
              <li><strong>Realist</strong> — 15% monthly churn, organic M1 then influencers M2+, Meta ads M3+. CAC $60-70. Break-even cumulative at month 5.</li>
              <li><strong>Optimist</strong> — 10% monthly churn, strong organic/word-of-mouth, lower CAC ($40-60). Barely positive from month 1.</li>
            </ul>
            <p>Churn is applied each month: <strong>retained = previous × (1 - churn) + new acquisitions</strong>. Subscriber counts in the table are net active after churn.</p>
          </Methodology>
        </CardContent>
      </Card>

      {/* Revenue by Model — stacked bar */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Revenue by Model — {scenarioConfig[scenario].label}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueByModel} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${(v/1000).toFixed(1)}K`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="RO1" stackId="revenue" fill="#10b981" name="RO1 rotate" />
                <Bar dataKey="ED1" stackId="revenue" fill="#f59e0b" name="ED1 membership" />
                <Bar dataKey="ED2" stackId="revenue" fill="#8b5cf6" name="ED2 event" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <Methodology>
            <p>Revenue per model = active subscribers/rentals that month x ARPU (average revenue per user).</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>RO1 (Rotate)</strong> — subscription: 2 items + 1 swap/month. ARPU = ${modelEconomics.ro1.arpu}/mo. Revenue = RO1 subscribers x ${modelEconomics.ro1.arpu}.</li>
              <li><strong>ED1 (Edit Membership)</strong> — monthly membership with unlimited try-on. ARPU = ${modelEconomics.ed1.arpu}/mo. Revenue = ED1 subscribers x ${modelEconomics.ed1.arpu}.</li>
              <li><strong>ED2 (Edit Event)</strong> — per-event 3-day rental, no subscription. ARPU = ${modelEconomics.ed2.arpu}/rental. Revenue = ED2 rentals that month x ${modelEconomics.ed2.arpu}.</li>
            </ul>
            <p>All prices are for pre-positioned inventory (already in the US). No international shipping cost per transaction. COGS = $0 (inventory already owned).</p>
            <p>Stacked bars show the total revenue composition. RO1 is the largest revenue driver because it has the most subscribers in all scenarios.</p>
          </Methodology>
        </CardContent>
      </Card>

      {/* Monthly Breakdown table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Monthly Breakdown — {scenarioConfig[scenario].label}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="text-left py-1 pr-2">Mo</th>
                  <th className="text-center px-1">RO1</th>
                  <th className="text-center px-1">ED1</th>
                  <th className="text-center px-1">ED2</th>
                  <th className="text-right px-1">Revenue</th>
                  <th className="text-right px-1">Costs</th>
                  <th className="text-right px-1 text-amber-600">CAC</th>
                  <th className="text-right px-1">Net</th>
                  <th className="text-right pl-1">Cum.</th>
                </tr>
              </thead>
              <tbody>
                {data.map((m) => (
                  <tr key={m.month} className="border-b border-gray-50">
                    <td className="py-1 pr-2 text-gray-500">{m.month}</td>
                    <td className="text-center px-1">{m.ro1}</td>
                    <td className="text-center px-1">{m.ed1}</td>
                    <td className="text-center px-1">{m.ed2}</td>
                    <td className="text-right px-1">${m.revenue.toLocaleString()}</td>
                    <td className="text-right px-1 text-gray-500">${m.costs.toLocaleString()}</td>
                    <td className="text-right px-1 text-amber-600">${getCac(m).toLocaleString()}</td>
                    <td className={`text-right px-1 font-medium ${m.net >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {m.net >= 0 ? '+' : ''}${m.net.toLocaleString()}
                    </td>
                    <td className={`text-right pl-1 font-bold ${m.cumulative >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      ${m.cumulative.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Methodology>
            <p><strong>Revenue</strong> = (RO1 x $119) + (ED1 x $140) + (ED2 x $134). Each column (RO1/ED1/ED2) shows active subscribers or rentals that month.</p>
            <p><strong>Costs</strong> = Variable + CAC + Fixed, where:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Variable</strong> = sum of per-subscriber costs: RO1 x ${modelEconomics.ro1.variable} + ED1 x ${modelEconomics.ed1.variable} + ED2 x ${modelEconomics.ed2.variable}. Includes domestic shipping, cleaning, depreciation, Stripe fees, damage reserve per subscriber.</li>
              <li><strong>CAC (marketing)</strong> = total marketing/acquisition spend that month. Derived as Costs - Variable - Fixed. M1 is $0 (organic only), then ramps with influencer partnerships (M2) and Meta ads (M3+).</li>
              <li><strong>Fixed</strong> = $500/mo (tech/tools, content creation, packaging supplies, insurance, misc overhead). Stays constant regardless of subscriber count.</li>
            </ul>
            <p><strong>Net</strong> = Revenue - Costs. <strong>Cumulative</strong> = running sum of Net from M1.</p>
            <p>CAC per new customer varies by scenario: ~$60-70 (realist), ~$80-100 (pessimist), ~$40-60 (optimist). Total CAC spend depends on how many new customers acquired that month.</p>
          </Methodology>
        </CardContent>
      </Card>

      {/* Unit Economics — 4 models */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Unit Economics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-2 text-center">
            {(['ro1', 'ed1', 'ed2', 'blended'] as const).map((key) => {
              const ue = unitEconomics[key]
              return (
                <div key={key} className="space-y-1">
                  <p className="text-xs font-medium text-gray-500 uppercase">{key}</p>
                  <p className="text-base font-bold">${ue.arpu}</p>
                  <p className="text-[10px] text-gray-400">ARPU</p>
                  <p className="text-sm font-semibold text-emerald-600">{ue.marginPercent}%</p>
                  <p className="text-[10px] text-gray-400">Margin</p>
                  <p className="text-xs text-amber-600">${ue.cac}</p>
                  <p className="text-[10px] text-gray-400">CAC</p>
                </div>
              )
            })}
          </div>
          <Methodology>
            <p>Unit economics per model, all assuming <strong>pre-positioned inventory</strong> (items already in the US, no international shipping per transaction).</p>

            <p className="font-medium mt-2">RO1 — Rotate Subscription ($119/mo)</p>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>Customer gets 2 items + 1 swap per month</li>
              <li>Variable costs: $70.55/mo (domestic shipping $20 round-trip, cleaning $15, depreciation $20, Stripe 2.9%+30c = $3.75, damage reserve $5, packaging $3, insurance $3.80)</li>
              <li>Contribution margin: $119 - $70.55 = <strong>$48.45 (41%)</strong></li>
              <li>CAC: $60 (blended organic + paid). LTV at 15% churn (avg 6.7 months): $48.45 x ~12 months retention = $581. LTV:CAC = 10:1</li>
            </ul>

            <p className="font-medium mt-2">ED1 — Edit Membership ($140/mo)</p>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>Monthly membership with unlimited try-on, keep what you love</li>
              <li>Variable costs: $87.91/mo (domestic shipping $20, cleaning $18, depreciation $25, Stripe $4.36, damage reserve $8, packaging $3, insurance $5.55, higher handling due to try-on returns)</li>
              <li>Contribution margin: $140 - $87.91 = <strong>$52.09 (37%)</strong></li>
              <li>CAC: $70. LTV at 15% churn: $52.09 x ~6.7 months = $347. LTV:CAC = 5:1</li>
            </ul>

            <p className="font-medium mt-2">ED2 — Edit Event Rental ($134/rental)</p>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>One-time 3-day rental for events (weddings, galas, photoshoots)</li>
              <li>Variable costs: $59.89/rental (domestic shipping $20, cleaning $12, depreciation $10, Stripe $4.19, damage reserve $6, packaging $3, insurance $4.70)</li>
              <li>Contribution margin: $134 - $59.89 = <strong>$74.11 (55%)</strong> — highest margin because no ongoing commitment overhead</li>
              <li>CAC: $50 (event rentals often come via organic/referral). LTV based on ~4 rentals/year avg = $296. LTV:CAC = 6:1</li>
            </ul>

            <p className="font-medium mt-2">Blended — Weighted Average</p>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>Formula: <strong>{'\u03A3'}(weight_i x value_i) / {'\u03A3'}(weight_i)</strong></li>
              <li>Weights from realist M6 subscriber mix: RO1={unitEconomics.blended.note.match(/\d+\/\d+\/\d+/)?.[0]}</li>
              <li>Blended ARPU: ${unitEconomics.blended.arpu}, variable: ${unitEconomics.blended.variableCost}, margin: {unitEconomics.blended.marginPercent}%, CAC: ${unitEconomics.blended.cac}</li>
              <li>This represents the steady-state economics when all 3 models are running at scale</li>
            </ul>

            <p className="mt-2"><strong>Key assumptions:</strong> All inventory is pre-positioned in US (COGS = $0 per transaction). Variable costs are granular (shipping, cleaning, depreciation, Stripe fees, damage reserve, packaging, insurance). No international DHL costs per order.</p>
          </Methodology>
        </CardContent>
      </Card>
    </section>
  )
}
