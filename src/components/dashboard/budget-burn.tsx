'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Methodology } from '@/components/ui/methodology'
import { budgetAllocation, totalBudget, breakEven } from '@/data/financials'

const PieChart = dynamic(() => import('recharts').then(m => m.PieChart), { ssr: false })
const Pie = dynamic(() => import('recharts').then(m => m.Pie), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })

const COLORS = ['#6366f1', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#64748b', '#d946ef', '#0ea5e9', '#a3a3a3']

// Inject fill color directly into data so recharts picks it up without Cell
const chartData = budgetAllocation.map((item, i) => ({
  ...item,
  fill: COLORS[i % COLORS.length],
}))

export function BudgetBurn() {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">Budget: ${totalBudget.toLocaleString()}</h2>

      <div className="grid grid-cols-1 gap-3">
        {/* Donut chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[170px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="amount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={2}
                  />
                  <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="grid grid-cols-2 gap-1 mt-2">
              {budgetAllocation.map((item, i) => (
                <div key={item.category} className="flex items-center gap-1.5 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-gray-600 truncate">{item.category}</span>
                  <span className="font-medium ml-auto">${item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <Methodology>
              <p>Total seed budget: <strong>$10,000</strong>. Allocated across operational categories for the first 6 months of the pilot.</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>DHL Shipping KZ→US ($2,500, 25%)</strong> — Initial bulk shipment of inventory from Kazakhstan to US. ~4 items per DHL package = $7.50/item + $15 customs = $22.50/item. Covers ~110 items.</li>
                <li><strong>Customs & Duties ($1,800, 18%)</strong> — Import duties for luxury/pre-owned items. Even pre-owned designer items can attract higher duty rates (up to 12% + processing fees).</li>
                <li><strong>Meta Ads ($1,200, 12%)</strong> — Facebook/Instagram ads starting month 3. Targeting fashion-forward women 25-40 in US metros. Budget ramps: $0 M1 → $200-400/mo M3+.</li>
                <li><strong>Micro-influencers ($800, 8%)</strong> — 5-10 micro-influencers ($50-150 each) starting month 2. Fashion/lifestyle niche, 5K-50K followers. Product gifting + small fee.</li>
                <li><strong>Cleaning ($600, 6%)</strong> — Professional dry cleaning at US-based partner. $12-18 per item depending on garment type. Budget for ~35-50 cleanings.</li>
                <li><strong>Content & Photo ($500, 5%)</strong> — Product photography, social content creation. Initial shoot + ongoing content for new items. Done in-house with rented equipment.</li>
                <li><strong>Pre-position inventory ($500, 5%)</strong> — Storage and handling at US contact point. First 20-30 popular items positioned for fast domestic shipping.</li>
                <li><strong>Insurance ($400, 4%)</strong> — Garment insurance covering loss, damage, theft during transit and rental. ~$3-6/item/month depending on value.</li>
                <li><strong>Returns Handling ($400, 4%)</strong> — Processing returns at US location. Includes inspection, repackaging, quality check. ~$5-8 per return.</li>
                <li><strong>Branded Packaging ($400, 4%)</strong> — Custom garment bags, tissue paper, thank-you cards. First order of ~200 packaging sets at $2/set.</li>
                <li><strong>Tech & Tools ($200, 2%)</strong> — Shopify/Stripe fees, email marketing tools, analytics. Minimal because we use existing platforms.</li>
                <li><strong>Buffer ($700, 7%)</strong> — Contingency for unexpected costs, FX fluctuations, emergency repairs, or opportunity spending.</li>
              </ul>
              <p className="mt-1">Budget is front-loaded: most shipping/customs costs are in months 1-2 (inventory setup), while marketing spend ramps up from month 2+.</p>
            </Methodology>
          </CardContent>
        </Card>

        {/* Break-even card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Break-Even</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Fixed costs/mo</span>
              <span className="font-bold">${breakEven.fixedCosts}/mo</span>
            </div>

            {/* Scenario break-even */}
            <div className="border-t pt-3 space-y-2">
              <p className="text-xs font-medium text-gray-500 uppercase">Break-even by scenario</p>
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Pessimist
                </span>
                <span className="font-semibold text-red-600">{breakEven.scenarios.pessimist.breakEvenMonth}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Realist
                </span>
                <span className="font-semibold text-blue-600">{breakEven.scenarios.realist.breakEvenMonth}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Optimist
                </span>
                <span className="font-semibold text-emerald-600">{breakEven.scenarios.optimist.breakEvenMonth}</span>
              </div>
            </div>

            {/* Per-model contribution */}
            <div className="border-t pt-3 space-y-2">
              <p className="text-xs font-medium text-gray-500 uppercase">Contribution per model</p>
              <div className="flex justify-between text-xs">
                <span>RO1 rotate — $119 ARPU</span>
                <span className="font-semibold">${breakEven.perModel.ro1.contributionMargin}/sub</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>ED1 membership — $140 ARPU</span>
                <span className="font-semibold">${breakEven.perModel.ed1.contributionMargin}/sub</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>ED2 event — $134 ARPU</span>
                <span className="font-semibold">${breakEven.perModel.ed2.contributionMargin}/rental</span>
              </div>
            </div>

            <Methodology>
              <p><strong>Break-even</strong> = the month when cumulative P&L turns positive (total revenue earned to date exceeds total costs to date).</p>
              <p>For each month: <strong>Net = Revenue - (Variable + CAC + Fixed)</strong>. Cumulative = running sum. Break-even is when cumulative crosses $0.</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Pessimist (Month 10+)</strong> — with 20% churn and high CAC, subscriber growth is too slow. M6 cumulative is still -$1,443. At the M6 trajectory (+$90/mo net), it would take ~16 more months to recover.</li>
                <li><strong>Realist (Month 5)</strong> — at 15% churn and moderate CAC, cumulative crosses zero between M4 (-$223) and M5 (+$269). The business becomes self-sustaining.</li>
                <li><strong>Optimist (Month 1)</strong> — strong organic growth and low CAC means even M1 is barely positive (+$20). However, this assumes significant word-of-mouth from day 1, which is ambitious.</li>
              </ul>
              <p><strong>Contribution per model</strong> = ARPU - variable costs. This is the profit per subscriber before fixed costs and marketing. To cover $500/mo fixed costs, you need: $500 / $48.45 = ~10 RO1 subscribers, or $500 / $52.09 = ~10 ED1, or $500 / $74.11 = ~7 ED2 rentals. In practice it&apos;s a mix of all three.</p>
              <p>Fixed costs ($500/mo) include: tech/tools ~$100, content creation ~$150, packaging supplies ~$100, insurance overhead ~$80, miscellaneous ~$70.</p>
            </Methodology>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
