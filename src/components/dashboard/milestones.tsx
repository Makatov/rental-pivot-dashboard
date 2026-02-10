'use client'

import { milestones } from '@/data/milestones'
import { CheckCircle2, Circle } from 'lucide-react'

export function Milestones() {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">Milestones</h2>

      <div className="space-y-0.5">
        {milestones.map((m) => (
          <div key={m.week} className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-gray-50">
            {m.done ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            ) : (
              <Circle className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium">{m.title}</span>
                <span className="text-[10px] text-gray-400">Week {m.week}</span>
              </div>
              <p className="text-[10px] text-gray-500">{m.criteria}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
