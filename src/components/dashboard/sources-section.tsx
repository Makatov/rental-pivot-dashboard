'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { industrySources, sourceCategories } from '@/data/sources'

const CATEGORY_COLORS: Record<string, string> = {
  competitor: '#3b82f6',
  market: '#8b5cf6',
  benchmark: '#f59e0b',
  research: '#10b981',
}

export function SourcesSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="space-y-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-baseline gap-2 w-full text-left"
      >
        <h2 className="text-base font-bold">Sources & References</h2>
        <span className="text-xs text-gray-400">{industrySources.length} sources</span>
        <span className="text-xs text-gray-400 ml-auto">{expanded ? '▼' : '▶'}</span>
      </button>

      {expanded && (
        <div className="space-y-2">
          {sourceCategories.map((cat) => {
            const sources = industrySources.filter((s) => s.category === cat.id)
            return (
              <Card key={cat.id}>
                <CardContent className="py-2.5 px-3 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: CATEGORY_COLORS[cat.id] }}
                    />
                    <span className="text-[11px] font-bold">{cat.label}</span>
                    <span className="text-[10px] text-gray-400">({sources.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {sources.map((source) => (
                      <div key={source.id} className="text-[10px]">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 hover:underline"
                        >
                          {source.name}
                        </a>
                        {source.date && (
                          <span className="text-gray-400 ml-1">({source.date})</span>
                        )}
                        <p className="text-gray-500 mt-0.5">{source.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </section>
  )
}
