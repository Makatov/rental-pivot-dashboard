'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown, ChevronUp, Shield } from 'lucide-react'
import { policies } from '@/data/policies'

export function PoliciesSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold">Security Deposit & Policies</h2>
        <Shield className="h-4 w-4 text-gray-400" />
      </div>

      <div className="space-y-1.5">
        {policies.map((p) => {
          const isOpen = expanded === p.id
          return (
            <Card key={p.id} className="overflow-hidden">
              <button
                className="w-full text-left p-2.5 flex items-center gap-2.5"
                onClick={() => setExpanded(isOpen ? null : p.id)}
              >
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-xs">{p.title}</span>
                  <span className="text-[10px] text-gray-400 ml-2">{p.items.length} items</span>
                </div>
                {isOpen
                  ? <ChevronUp className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                  : <ChevronDown className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                }
              </button>
              {isOpen && (
                <div className="px-2.5 pb-2.5 pt-0 space-y-1.5">
                  {p.items.map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-md p-2">
                      <span className="text-[11px] font-semibold text-gray-700">{item.label}</span>
                      <p className="text-[10px] text-gray-500 mt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
