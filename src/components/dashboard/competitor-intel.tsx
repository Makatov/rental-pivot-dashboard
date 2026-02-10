'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { competitors } from '@/data/competitors'
import { ChevronDown, ChevronUp, Eye } from 'lucide-react'

const verdictConfig = {
  blueprint: { label: 'Blueprint', variant: 'success' as const },
  warning: { label: 'Warning', variant: 'destructive' as const },
  evolution: { label: 'Phase 2', variant: 'info' as const },
  neutral: { label: 'Reference', variant: 'secondary' as const },
}

export function CompetitorIntel() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold">Competitor Intelligence</h2>
        <Eye className="h-4 w-4 text-gray-400" />
      </div>

      <p className="text-[10px] text-gray-500">
        Luxury niche {'>'} mass market. Vivrelle {'>'} RTR in profitability. Our edge: 2,347 items already owned, $0 COGS.
      </p>

      <div className="space-y-1.5">
        {competitors.map((c) => {
          const config = verdictConfig[c.verdict]
          const isOpen = expanded === c.id
          return (
            <Card key={c.id} className="overflow-hidden">
              <button
                className="w-full text-left p-2.5 flex items-start gap-2.5"
                onClick={() => setExpanded(isOpen ? null : c.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-medium text-xs">{c.name}</span>
                    <Badge variant={config.variant} className="text-[9px] px-1 py-0">{config.label}</Badge>
                  </div>
                  <p className="text-[10px] text-gray-500 line-clamp-2">{c.lesson}</p>
                </div>
                {isOpen
                  ? <ChevronUp className="h-3.5 w-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                  : <ChevronDown className="h-3.5 w-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                }
              </button>
              {isOpen && (
                <div className="px-2.5 pb-2.5 pt-0">
                  <p className="text-[10px] text-gray-600 bg-gray-50 rounded-lg p-2">{c.detail}</p>
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
