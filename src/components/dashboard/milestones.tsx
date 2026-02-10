'use client'

import { milestones } from '@/data/milestones'
import { CheckCircle2, Circle } from 'lucide-react'

export function Milestones() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Milestones</h2>

      <div className="space-y-1">
        {milestones.map((m) => (
          <div key={m.week} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
            {m.done ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            ) : (
              <Circle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{m.title}</span>
                <span className="text-xs text-gray-400">Week {m.week}</span>
              </div>
              <p className="text-xs text-gray-500">{m.criteria}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
