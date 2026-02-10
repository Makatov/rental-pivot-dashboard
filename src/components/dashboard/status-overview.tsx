'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { inventorySummary } from '@/data/inventory'
import { Target, Package, DollarSign, TrendingUp } from 'lucide-react'

const phases = [
  { name: 'Research', done: true },
  { name: 'Build', done: false },
  { name: 'Launch', done: false },
  { name: 'Evaluate', done: false },
]

export function StatusOverview() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold">Status Overview</h2>
        <Badge variant="info" className="text-[10px]">Week 0 — Pre-launch</Badge>
      </div>

      {/* Phase tracker */}
      <div className="flex gap-1">
        {phases.map((phase) => (
          <div key={phase.name} className="flex-1">
            <div className={`h-1.5 rounded-full ${phase.done ? 'bg-emerald-500' : 'bg-gray-200'}`} />
            <p className={`text-[10px] mt-0.5 text-center ${phase.done ? 'font-semibold text-emerald-700' : 'text-gray-400'}`}>
              {phase.name}
            </p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <StatCard icon={<Package className="h-3.5 w-3.5" />} label="Total Items" value={inventorySummary.totalItems.toLocaleString()} />
        <StatCard icon={<DollarSign className="h-3.5 w-3.5" />} label="Inventory Value" value={`$${(inventorySummary.totalValueUsd / 1000).toFixed(0)}K`} />
        <StatCard icon={<Target className="h-3.5 w-3.5" />} label="Rental-Ideal" value={inventorySummary.rentalIdealItems.toLocaleString()} />
        <StatCard icon={<TrendingUp className="h-3.5 w-3.5" />} label="Avg Price" value={`$${inventorySummary.avgPriceUsd.toFixed(0)}`} />
      </div>
    </section>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-2.5">
        <div className="flex items-center gap-1.5 text-gray-500 mb-0.5">
          {icon}
          <span className="text-[10px]">{label}</span>
        </div>
        <p className="text-xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}
