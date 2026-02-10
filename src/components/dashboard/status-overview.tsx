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
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Status Overview</h2>
        <Badge variant="info">Week 0 — Pre-launch</Badge>
      </div>

      {/* Phase tracker */}
      <div className="flex gap-1">
        {phases.map((phase) => (
          <div key={phase.name} className="flex-1">
            <div className={`h-2 rounded-full ${phase.done ? 'bg-emerald-500' : 'bg-gray-200'}`} />
            <p className={`text-xs mt-1 text-center ${phase.done ? 'font-semibold text-emerald-700' : 'text-gray-400'}`}>
              {phase.name}
            </p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={<Package className="h-4 w-4" />} label="Total Items" value={inventorySummary.totalItems.toLocaleString()} />
        <StatCard icon={<DollarSign className="h-4 w-4" />} label="Inventory Value" value={`$${(inventorySummary.totalValueUsd / 1000).toFixed(0)}K`} />
        <StatCard icon={<Target className="h-4 w-4" />} label="Rental-Ideal" value={inventorySummary.rentalIdealItems.toLocaleString()} />
        <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Avg Price" value={`$${inventorySummary.avgPriceUsd.toFixed(0)}`} />
      </div>
    </section>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          {icon}
          <span className="text-xs">{label}</span>
        </div>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}
