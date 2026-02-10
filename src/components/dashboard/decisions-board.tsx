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
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Key Decisions</h2>

      <div className="flex gap-2 text-sm">
        <Badge variant="success">{decided.length} decided</Badge>
        <Badge variant="warning">{pending.length} pending</Badge>
        <Badge variant="info">{exploring.length} exploring</Badge>
      </div>

      <div className="space-y-2">
        {decisions.map((d) => {
          const config = statusConfig[d.status]
          const Icon = config.icon
          const isOpen = expanded === d.id
          return (
            <Card key={d.id} className="overflow-hidden">
              <button
                className="w-full text-left p-3 flex items-start gap-3"
                onClick={() => setExpanded(isOpen ? null : d.id)}
              >
                <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                  d.status === 'decided' ? 'text-emerald-600' :
                  d.status === 'pending' ? 'text-amber-600' : 'text-blue-600'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{d.title}</span>
                    <Badge variant={config.variant} className="text-[10px] px-1.5 py-0">{config.label}</Badge>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1">{d.description}</p>
                </div>
                {d.details && (
                  isOpen ? <ChevronUp className="h-4 w-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {isOpen && d.details && (
                <div className="px-3 pb-3 pt-0 ml-8">
                  <p className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2">{d.details}</p>
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
