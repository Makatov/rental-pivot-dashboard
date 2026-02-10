'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { customerJourneys } from '@/data/customer-journeys'

const BRAND_COLORS = { rotate: '#00B463', edit: '#D4A017' }

const actorConfig: Record<string, { label: string; color: string; bg: string }> = {
  customer: { label: 'Customer', color: 'text-blue-700', bg: 'bg-blue-100' },
  us: { label: 'Us', color: 'text-emerald-700', bg: 'bg-emerald-100' },
  stripe: { label: 'Stripe', color: 'text-purple-700', bg: 'bg-purple-100' },
  dhl: { label: 'DHL', color: 'text-amber-700', bg: 'bg-amber-100' },
  'us-contact': { label: 'US Contact', color: 'text-orange-700', bg: 'bg-orange-100' },
  cleaner: { label: 'Cleaner', color: 'text-pink-700', bg: 'bg-pink-100' },
}

export function CustomerJourneys() {
  const [activeTab, setActiveTab] = useState(0)
  const journey = customerJourneys[activeTab]

  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">Customer Journeys</h2>

      {/* Tabs */}
      <div className="flex gap-1.5">
        {customerJourneys.map((j, i) => (
          <button
            key={j.modelId}
            onClick={() => setActiveTab(i)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors ${
              activeTab === i
                ? 'text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            style={activeTab === i ? { backgroundColor: BRAND_COLORS[j.brand] } : undefined}
          >
            {j.modelId} — {j.modelName}
          </button>
        ))}
      </div>

      {/* Steps */}
      <div className="space-y-0">
        {journey.steps.map((s, i) => {
          const actor = actorConfig[s.actor]
          const isLast = i === journey.steps.length - 1
          return (
            <div key={s.step} className="flex gap-2.5">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: BRAND_COLORS[journey.brand] }}
                >
                  {s.step}
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-gray-200 my-0.5" />
                )}
              </div>

              {/* Content */}
              <div className="pb-3 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs font-medium">{s.title}</span>
                  <span className={`text-[9px] font-semibold px-1.5 py-0 rounded-full ${actor.bg} ${actor.color}`}>
                    {actor.label}
                  </span>
                </div>
                <p className="text-[10px] text-gray-500">{s.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-1.5">
        {Object.entries(actorConfig).map(([key, cfg]) => (
          <Badge key={key} className={`text-[9px] px-1.5 py-0 ${cfg.bg} ${cfg.color} border-transparent`}>
            {cfg.label}
          </Badge>
        ))}
      </div>
    </section>
  )
}
