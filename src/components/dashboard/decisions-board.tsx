'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { decisions } from '@/data/decisions'
import { ChevronDown, ChevronUp, CheckCircle2, Clock, Compass } from 'lucide-react'

const statusConfig = {
  decided: { variant: 'success' as const, icon: CheckCircle2, label: 'Decided' },
  pending: { variant: 'warning' as const, icon: Clock, label: 'Pending' },
  exploring: { variant: 'info' as const, icon: Compass, label: 'Exploring' },
}

export function DecisionsBoard() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const decided = decisions.filter(d => d.status === 'decided')
  const pending = decisions.filter(d => d.status === 'pending')
  const exploring = decisions.filter(d => d.status === 'exploring')

  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">Key Decisions</h2>

      <div className="flex gap-1.5 text-xs">
        <Badge variant="success" className="text-[10px]">{decided.length} decided</Badge>
        <Badge variant="warning" className="text-[10px]">{pending.length} pending</Badge>
        <Badge variant="info" className="text-[10px]">{exploring.length} exploring</Badge>
      </div>

      <div className="space-y-1.5">
        {decisions.map((d) => {
          const config = statusConfig[d.status]
          const Icon = config.icon
          const isOpen = expanded === d.id
          return (
            <Card key={d.id} className="overflow-hidden">
              <button
                className="w-full text-left p-2.5 flex items-start gap-2.5"
                onClick={() => setExpanded(isOpen ? null : d.id)}
              >
                <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                  d.status === 'decided' ? 'text-emerald-600' :
                  d.status === 'pending' ? 'text-amber-600' : 'text-blue-600'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-medium text-xs">{d.title}</span>
                    <Badge variant={config.variant} className="text-[9px] px-1 py-0">{config.label}</Badge>
                  </div>
                  <p className="text-[10px] text-gray-500 line-clamp-1">{d.description}</p>
                </div>
                {d.details && (
                  isOpen ? <ChevronUp className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {isOpen && d.details && (
                <div className="px-2.5 pb-2.5 pt-0 ml-7">
                  <p className="text-[10px] text-gray-600 bg-gray-50 rounded-lg p-2">{d.details}</p>
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
