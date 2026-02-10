'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
