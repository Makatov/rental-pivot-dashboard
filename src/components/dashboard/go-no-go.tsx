'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  scaleModelCriteria,
  killModelCriteria,
  continueOverallCriteria,
  pauseOverallCriteria,
} from '@/data/go-no-go'
import { Target } from 'lucide-react'
import { GoNoGoCriteria } from '@/types'

function CriteriaCard({ criteria, color, bgColor }: { criteria: GoNoGoCriteria; color: string; bgColor: string }) {
  return (
    <div className="rounded-lg p-2 space-y-1" style={{ backgroundColor: bgColor }}>
      <span className="text-[11px] font-bold" style={{ color }}>{criteria.label}</span>
      <ul className="space-y-0.5">
        {criteria.conditions.map((c, i) => (
          <li key={i} className="text-[10px] text-gray-600 flex items-start gap-1">
            <span className="mt-0.5" style={{ color }}>•</span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function GoNoGo() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold">GO / NO-GO</h2>
        <Badge variant="warning" className="text-[10px]">Week 12</Badge>
        <Target className="h-4 w-4 text-gray-400" />
      </div>

      {/* Per model */}
      <Card>
        <CardContent className="py-2.5 px-3 space-y-2">
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Per Model</span>
          <div className="grid grid-cols-2 gap-2">
            <CriteriaCard criteria={scaleModelCriteria} color="#059669" bgColor="#ecfdf5" />
            <CriteriaCard criteria={killModelCriteria} color="#dc2626" bgColor="#fef2f2" />
          </div>
        </CardContent>
      </Card>

      {/* Overall */}
      <Card>
        <CardContent className="py-2.5 px-3 space-y-2">
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Overall</span>
          <div className="grid grid-cols-2 gap-2">
            <CriteriaCard criteria={continueOverallCriteria} color="#2563eb" bgColor="#eff6ff" />
            <CriteriaCard criteria={pauseOverallCriteria} color="#d97706" bgColor="#fffbeb" />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
