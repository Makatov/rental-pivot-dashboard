'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { StatusOverview } from '@/components/dashboard/status-overview'
import { DecisionsBoard } from '@/components/dashboard/decisions-board'
import { ModelComparison } from '@/components/dashboard/model-comparison'
import { TimelineChart } from '@/components/dashboard/timeline-chart'
import { BudgetBurn } from '@/components/dashboard/budget-burn'
import { FinancialProjections } from '@/components/dashboard/financial-projections'
import { RiskHeatmap } from '@/components/dashboard/risk-heatmap'
import { InventoryCharts } from '@/components/dashboard/inventory-charts'
import { CustomerJourneys } from '@/components/dashboard/customer-journeys'
import { PoliciesSection } from '@/components/dashboard/policies-section'
import { OperationsChecklist } from '@/components/dashboard/operations-checklist'
import { Milestones } from '@/components/dashboard/milestones'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 py-2.5">
        <div className="flex items-center gap-2.5 max-w-lg mx-auto">
          <Link href="/" className="p-0.5 -ml-1">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <h1 className="text-sm font-bold">Team Dashboard</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-4 py-4 space-y-7">
        <StatusOverview />
        <ModelComparison />
        <CustomerJourneys />
        <PoliciesSection />
        <DecisionsBoard />
        <TimelineChart />
        <BudgetBurn />
        <FinancialProjections />
        <RiskHeatmap />
        <InventoryCharts />
        <OperationsChecklist />
        <Milestones />

        <div className="h-4" />
      </div>
    </main>
  )
}
