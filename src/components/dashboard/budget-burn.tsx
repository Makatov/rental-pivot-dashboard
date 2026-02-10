'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { budgetAllocation, totalBudget, breakEven } from '@/data/financials'

const PieChart = dynamic(() => import('recharts').then(m => m.PieChart), { ssr: false })
const Pie = dynamic(() => import('recharts').then(m => m.Pie), { ssr: false })
const Cell = dynamic(() => import('recharts').then(m => m.Cell), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })

const COLORS = ['#6366f1', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#64748b', '#d946ef']

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
                    data={budgetAllocation}
                    dataKey="amount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    label={({ name, payload }: { name?: string; payload?: { percentage?: number } }) => `${name || ''} ${payload?.percentage || ''}%`}
                    labelLine={false}
                  >
                    {budgetAllocation.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
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
              <span className="text-gray-500">Combined target</span>
              <span className="font-bold">{breakEven.combined.subscribers} subscribers</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Target week</span>
              <span className="font-bold">Week {breakEven.combined.targetWeek}</span>
            </div>
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span>ROTATE break-even</span>
                <span className="font-semibold">{breakEven.rotate.subscribers} subs</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>EDIT break-even</span>
                <span className="font-semibold">{breakEven.edit.subscribers} subs</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
