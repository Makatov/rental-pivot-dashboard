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

      {/* Vertical timeline grouped by phase */}
      <div className="space-y-4">
        {phases.map((phase) => {
          const phaseWeeks = timelineData.filter(w => w.phase === phase.name)
          return (
            <div key={phase.name}>
              {/* Phase header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: phase.color }} />
                <span className="text-xs font-bold text-gray-800">
                  {phase.name}
                </span>
                <span className="text-[10px] text-gray-400">
                  W{phase.weeks[0]}–W{phase.weeks[phase.weeks.length - 1]}
                </span>
              </div>

              {/* Weeks in this phase */}
              <div className="ml-3 border-l-2 pl-3 space-y-3" style={{ borderColor: phase.color }}>
                {phaseWeeks.map((week) => (
                  <div key={week.week}>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-bold text-white rounded px-1.5 py-0.5"
                        style={{ backgroundColor: phase.color }}
                      >
                        W{week.week}
                      </span>
                      {week.milestone && (
                        <Badge variant="secondary" className="text-[9px] px-1.5 py-0">
                          {week.milestone}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-1 gap-y-0.5">
                      {week.tasks.map((task, i) => (
                        <span key={i} className="text-[10px] text-gray-500 after:content-['·'] after:mx-1 after:text-gray-300 last:after:content-none">
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
