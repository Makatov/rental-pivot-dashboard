'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { monthlyProjections, unitEconomics } from '@/data/financials'

const AreaChart = dynamic(() => import('recharts').then(m => m.AreaChart), { ssr: false })
const Area = dynamic(() => import('recharts').then(m => m.Area), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const CartesianGrid = dynamic(() => import('recharts').then(m => m.CartesianGrid), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const Legend = dynamic(() => import('recharts').then(m => m.Legend), { ssr: false })

export function FinancialProjections() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Financial Projections</h2>

      {/* Revenue vs Costs chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">6-Month Revenue vs Costs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyProjections} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${(v/1000).toFixed(0)}K`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b98133" name="Revenue" />
                <Area type="monotone" dataKey="costs" stroke="#ef4444" fill="#ef444433" name="Costs" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Subscriber growth */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Monthly Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {monthlyProjections.map((m) => (
              <div key={m.month} className="flex items-center gap-3 text-xs">
                <span className="w-14 text-gray-500 flex-shrink-0">{m.label}</span>
                <span className="w-12 text-center font-medium">{m.subscribers} subs</span>
                <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full" style={{ width: `${(m.revenue / 22500) * 100}%` }} />
                </div>
                <span className={`w-16 text-right font-bold ${m.net >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {m.net >= 0 ? '+' : ''}{`$${(m.net/1000).toFixed(1)}K`}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Unit Economics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Unit Economics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3 text-center">
            {(['rotate', 'edit', 'blended'] as const).map((key) => {
              const ue = unitEconomics[key]
              return (
                <div key={key} className="space-y-1">
                  <p className="text-xs font-medium text-gray-500 uppercase">{key}</p>
                  <p className="text-lg font-bold">${ue.arpu}</p>
                  <p className="text-[10px] text-gray-400">ARPU</p>
                  <p className="text-sm font-semibold text-emerald-600">{ue.marginPercent}%</p>
                  <p className="text-[10px] text-gray-400">Margin</p>
                  <p className="text-sm font-semibold">{ue.ltvCacRatio}</p>
                  <p className="text-[10px] text-gray-400">LTV:CAC</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
