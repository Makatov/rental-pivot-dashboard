'use client'

import { Badge } from '@/components/ui/badge'
import { progressItems } from '@/data/progress'
import { CheckCircle2, Circle } from 'lucide-react'

export function ProjectProgress() {
  const doneCount = progressItems.filter(p => p.done).length
  const totalCount = progressItems.length
  const percent = Math.round((doneCount / totalCount) * 100)

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold">Project Progress</h2>
        <Badge variant={percent >= 50 ? 'success' : 'warning'} className="text-[10px]">
          {doneCount}/{totalCount} ({percent}%)
        </Badge>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Items */}
      <div className="space-y-0.5">
        {progressItems.map((item, i) => (
          <div key={i} className="flex items-start gap-2 p-1 rounded-lg hover:bg-gray-50">
            {item.done ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
            ) : (
              <Circle className="h-3.5 w-3.5 text-gray-300 flex-shrink-0 mt-0.5" />
            )}
            <span className={`text-[11px] ${item.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
