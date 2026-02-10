'use client'

import { useState } from 'react'
import { risks } from '@/data/risks'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

const probLevels = ['LOW', 'MEDIUM', 'HIGH'] as const
const impactLevels = ['LOW', 'MEDIUM', 'HIGH'] as const

const severityColors: Record<string, string> = {
  LOW: 'bg-green-100 text-green-800 border-green-200',
  MEDIUM: 'bg-amber-100 text-amber-800 border-amber-200',
  HIGH: 'bg-orange-100 text-orange-800 border-orange-200',
  CRITICAL: 'bg-red-100 text-red-800 border-red-200',
}

const cellColors: Record<string, string> = {
  'LOW-LOW': 'bg-green-50',
  'LOW-MEDIUM': 'bg-green-100',
  'LOW-HIGH': 'bg-amber-50',
  'MEDIUM-LOW': 'bg-green-100',
  'MEDIUM-MEDIUM': 'bg-amber-100',
  'MEDIUM-HIGH': 'bg-orange-100',
  'HIGH-LOW': 'bg-amber-50',
  'HIGH-MEDIUM': 'bg-orange-100',
  'HIGH-HIGH': 'bg-red-100',
}

export function RiskHeatmap() {
  const [selected, setSelected] = useState<string | null>(null)
  const selectedRisk = risks.find(r => r.id === selected)

  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">Risk Matrix</h2>

      {/* Heatmap grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="w-20"></th>
              {impactLevels.map(impact => (
                <th key={impact} className="text-center pb-1 text-gray-500 font-medium">{impact}</th>
              ))}
            </tr>
            <tr>
              <th></th>
              <th colSpan={3} className="text-center text-[10px] text-gray-400 pb-2">Impact &rarr;</th>
            </tr>
          </thead>
          <tbody>
            {[...probLevels].reverse().map((prob) => (
              <tr key={prob}>
                <td className="text-right pr-2 text-gray-500 font-medium text-[10px] align-middle">{prob}</td>
                {impactLevels.map((impact) => {
                  const cellRisks = risks.filter(r => r.probability === prob && r.impact === impact)
                  return (
                    <td
                      key={`${prob}-${impact}`}
                      className={`border p-1.5 min-h-[48px] align-top ${cellColors[`${prob}-${impact}`]}`}
                    >
                      <div className="flex flex-wrap gap-1">
                        {cellRisks.map(r => (
                          <button
                            key={r.id}
                            onClick={() => setSelected(r.id)}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${severityColors[r.severity]} hover:ring-2 ring-gray-300 transition-all`}
                          >
                            {r.id}
                          </button>
                        ))}
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[10px] text-gray-400 mt-1">Probability &uarr;</p>
      </div>

      {/* Selected risk detail */}
      {selectedRisk && (
        <div className={`rounded-xl border p-3 ${severityColors[selectedRisk.severity]} relative`}>
          <button onClick={() => setSelected(null)} className="absolute top-2 right-2">
            <X className="h-4 w-4" />
          </button>
          <p className="font-bold text-sm mb-1">{selectedRisk.id}: {selectedRisk.risk}</p>
          <div className="flex gap-2 mb-2">
            <Badge variant="outline" className="text-[10px]">P: {selectedRisk.probability}</Badge>
            <Badge variant="outline" className="text-[10px]">I: {selectedRisk.impact}</Badge>
            <Badge variant="outline" className="text-[10px]">S: {selectedRisk.severity}</Badge>
          </div>
          <p className="text-xs"><strong>Mitigation:</strong> {selectedRisk.mitigation}</p>
        </div>
      )}

      {/* Risk list summary */}
      <div className="space-y-1">
        {risks.map(r => (
          <button
            key={r.id}
            onClick={() => setSelected(r.id)}
            className="w-full flex items-center gap-2 text-xs p-2 rounded-lg hover:bg-gray-50 text-left"
          >
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${severityColors[r.severity]}`}>
              {r.id}
            </span>
            <span className="flex-1 truncate text-gray-700">{r.risk}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
