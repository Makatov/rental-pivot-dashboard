'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projections, cumulativeChartData, unitEconomics } from '@/data/financials'
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
    R2: m.r2 * 119,
    E1: m.e1 * 140,
    E3: m.e3 * 134,
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
                <Bar dataKey="R2" stackId="revenue" fill="#10b981" name="R2 rotate" />
                <Bar dataKey="E1" stackId="revenue" fill="#f59e0b" name="E1 membership" />
                <Bar dataKey="E3" stackId="revenue" fill="#8b5cf6" name="E3 event" />
              </BarChart>
            </ResponsiveContainer>
          </div>
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
                  <th className="text-center px-1">R2</th>
                  <th className="text-center px-1">E1</th>
                  <th className="text-center px-1">E3</th>
                  <th className="text-right px-1">Revenue</th>
                  <th className="text-right px-1">Costs</th>
                  <th className="text-right px-1">Net</th>
                  <th className="text-right pl-1">Cum.</th>
                </tr>
              </thead>
              <tbody>
                {data.map((m) => (
                  <tr key={m.month} className="border-b border-gray-50">
                    <td className="py-1 pr-2 text-gray-500">{m.month}</td>
                    <td className="text-center px-1">{m.r2}</td>
                    <td className="text-center px-1">{m.e1}</td>
                    <td className="text-center px-1">{m.e3}</td>
                    <td className="text-right px-1">${m.revenue.toLocaleString()}</td>
                    <td className="text-right px-1 text-gray-500">${m.costs.toLocaleString()}</td>
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
                  <p className="text-base font-bold">${ue.arpu}</p>
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
