'use client'

import { timelineData, phases } from '@/data/timeline'
import { Badge } from '@/components/ui/badge'

export function TimelineChart() {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">{timelineData.length}-Week Timeline</h2>

      {/* Phase legend */}
      <div className="flex flex-wrap gap-2">
        {phases.map((phase) => (
          <div key={phase.name} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phase.color }} />
            <span className="text-xs text-gray-600">{phase.name}</span>
          </div>
        ))}
      </div>

      {/* Scrollable timeline */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-3" style={{ minWidth: '900px' }}>
          {timelineData.map((week) => (
            <div key={week.week} className="flex-1 min-w-[65px]">
              {/* Week header */}
              <div
                className="text-center text-xs font-bold text-white rounded-t-lg py-1"
                style={{ backgroundColor: week.phaseColor }}
              >
                W{week.week}
              </div>

              {/* Tasks */}
              <div className="border border-t-0 rounded-b-lg p-1.5 min-h-[100px] bg-white">
                {week.tasks.slice(0, 3).map((task, i) => (
                  <p key={i} className="text-[10px] text-gray-600 leading-tight mb-1">
                    {task}
                  </p>
                ))}
                {week.tasks.length > 3 && (
                  <p className="text-[10px] text-gray-400">+{week.tasks.length - 3} more</p>
                )}
              </div>

              {/* Milestone */}
              {week.milestone && (
                <div className="mt-1">
                  <Badge variant="secondary" className="text-[9px] px-1 py-0 w-full justify-center text-center">
                    {week.milestone}
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
