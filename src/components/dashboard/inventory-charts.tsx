'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { brandData, categoryData, conditionData, priceDistribution } from '@/data/inventory'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const PieChart = dynamic(() => import('recharts').then(m => m.PieChart), { ssr: false })
const Pie = dynamic(() => import('recharts').then(m => m.Pie), { ssr: false })
const Cell = dynamic(() => import('recharts').then(m => m.Cell), { ssr: false })

const BRAND_COLORS = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe']
const CONDITION_COLORS = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5']
const PRICE_COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe']

export function InventoryCharts() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Inventory Analytics</h2>

      {/* Top brands */}
      <Card>
        <CardHeader><CardTitle className="text-sm">Top 15 Brands</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={brandData} layout="vertical" margin={{ left: 10, right: 5, top: 0, bottom: 0 }}>
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="brand" tick={{ fontSize: 9 }} width={100} />
                <Tooltip />
                <Bar dataKey="count" name="Items" radius={[0, 4, 4, 0]}>
                  {brandData.map((_, i) => <Cell key={i} fill={BRAND_COLORS[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader><CardTitle className="text-sm">Top Categories</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData.slice(0, 8)} layout="vertical" margin={{ left: 10, right: 5, top: 0, bottom: 0 }}>
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="subcategory" tick={{ fontSize: 10 }} width={70} />
                <Tooltip />
                <Bar dataKey="count" name="Items" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        {/* Condition donut */}
        <Card>
          <CardHeader><CardTitle className="text-sm">Condition</CardTitle></CardHeader>
          <CardContent>
            <div className="h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={conditionData} dataKey="count" nameKey="condition" cx="50%" cy="50%" innerRadius={30} outerRadius={55}>
                    {conditionData.map((_, i) => <Cell key={i} fill={CONDITION_COLORS[i]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1">
              {conditionData.map((c, i) => (
                <div key={c.condition} className="flex items-center gap-1.5 text-[10px]">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CONDITION_COLORS[i] }} />
                  <span className="text-gray-600">{c.condition}</span>
                  <span className="ml-auto font-medium">{c.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price distribution */}
        <Card>
          <CardHeader><CardTitle className="text-sm">Price Range</CardTitle></CardHeader>
          <CardContent>
            <div className="h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={priceDistribution} dataKey="count" nameKey="range" cx="50%" cy="50%" innerRadius={30} outerRadius={55}>
                    {priceDistribution.map((_, i) => <Cell key={i} fill={PRICE_COLORS[i]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1">
              {priceDistribution.map((p, i) => (
                <div key={p.range} className="flex items-center gap-1.5 text-[10px]">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PRICE_COLORS[i] }} />
                  <span className="text-gray-600">{p.range}</span>
                  <span className="ml-auto font-medium">{p.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
