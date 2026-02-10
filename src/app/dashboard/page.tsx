'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { StatusOverview } from '@/components/dashboard/status-overview'
import { DecisionsBoard } from '@/components/dashboard/decisions-board'
import { TimelineChart } from '@/components/dashboard/timeline-chart'
import { BudgetBurn } from '@/components/dashboard/budget-burn'
import { FinancialProjections } from '@/components/dashboard/financial-projections'
import { RiskHeatmap } from '@/components/dashboard/risk-heatmap'
import { InventoryCharts } from '@/components/dashboard/inventory-charts'
import { Milestones } from '@/components/dashboard/milestones'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link href="/" className="p-1 -ml-1">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-lg font-bold">Team Dashboard</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-4 py-6 space-y-10">
        <StatusOverview />
        <DecisionsBoard />
        <TimelineChart />
        <BudgetBurn />
        <FinancialProjections />
        <RiskHeatmap />
        <InventoryCharts />
        <Milestones />

        <div className="h-8" />
      </div>
    </main>
  )
}
