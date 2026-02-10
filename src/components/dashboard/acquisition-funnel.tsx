'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { acquisitionPhases, acquisitionSummary } from '@/data/acquisition'
import { Megaphone } from 'lucide-react'

export function AcquisitionFunnel() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold">Acquisition Funnel</h2>
        <Megaphone className="h-4 w-4 text-gray-400" />
      </div>

      <div className="flex gap-1.5">
        <Badge variant="secondary" className="text-[10px]">
          Budget: ${acquisitionSummary.totalBudget.toLocaleString()}
        </Badge>
        <Badge variant="secondary" className="text-[10px]">
          Target: {acquisitionSummary.totalCustomers} customers
        </Badge>
        <Badge variant="secondary" className="text-[10px]">
          CAC: {acquisitionSummary.blendedCac}
        </Badge>
      </div>

      {/* Phases */}
      <div className="space-y-0">
        {acquisitionPhases.map((phase, i) => {
          const isLast = i === acquisitionPhases.length - 1
          return (
            <div key={phase.id} className="flex gap-2.5">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: phase.color }}
                >
                  {i + 1}
                </div>
                {!isLast && <div className="w-px flex-1 bg-gray-200 my-0.5" />}
              </div>

              {/* Content */}
              <div className="pb-3 flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs font-medium">{phase.name}</span>
                  <span className="text-[9px] text-gray-400">{phase.weeks}</span>
                </div>

                <Card className="mt-1">
                  <CardContent className="py-2 px-2.5 space-y-1.5">
                    <p className="text-[10px] text-gray-500">{phase.description}</p>
                    <div className="flex gap-1.5">
                      <Badge
                        className="text-[9px] px-1.5 py-0 border-transparent text-white"
                        style={{ backgroundColor: phase.color }}
                      >
                        {phase.budget === 0 ? 'Free' : `$${phase.budget}`}
                      </Badge>
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0">
                        {phase.expectedCustomers} customers
                      </Badge>
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0">
                        CAC: {phase.cac}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        })}
      </div>

      {/* Funnel visualization */}
      <div className="space-y-1">
        {acquisitionPhases.map((phase) => {
          const maxCustomers = 20
          const avg = phase.expectedCustomers.split('–').map(Number)
          const mid = (avg[0] + avg[1]) / 2
          const widthPercent = Math.min((mid / maxCustomers) * 100, 100)
          return (
            <div key={phase.id} className="flex items-center gap-2">
              <span className="text-[9px] text-gray-400 w-14 text-right shrink-0">{phase.weeks}</span>
              <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-1.5"
                  style={{ width: `${widthPercent}%`, backgroundColor: phase.color }}
                >
                  <span className="text-[8px] font-bold text-white">{phase.expectedCustomers}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
