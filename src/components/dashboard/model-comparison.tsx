'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { businessModels, modelSummary } from '@/data/business-models'

const BRAND_COLORS = { rotate: '#00B463', edit: '#D4A017' }

function MarginBar({ percent }: { percent: number }) {
  const color = percent >= 50 ? '#10b981' : percent >= 35 ? '#f59e0b' : '#ef4444'
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${percent}%`, backgroundColor: color }} />
      </div>
      <span className="text-[10px] font-bold" style={{ color }}>{percent}%</span>
    </div>
  )
}

export function ModelComparison() {
  return (
    <section className="space-y-3">
      <div className="flex items-baseline gap-2">
        <h2 className="text-base font-bold">7 Models to Test</h2>
        <span className="text-xs text-gray-400">margins {modelSummary.marginRange}</span>
      </div>

      {/* Summary badges */}
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="secondary" className="text-[10px]">
          Best margin: {modelSummary.bestMargin.name} ({modelSummary.bestMargin.margin}%)
        </Badge>
        <Badge variant="secondary" className="text-[10px]">
          Best ARPU: {modelSummary.bestRevenue.name} (${modelSummary.bestRevenue.revenue})
        </Badge>
        <Badge variant="secondary" className="text-[10px]">
          Lowest risk: {modelSummary.lowestRisk.name}
        </Badge>
      </div>

      {/* Model cards */}
      <div className="space-y-2">
        {businessModels.map((model) => (
          <Card key={model.id} className="overflow-hidden">
            <div className="h-1" style={{ backgroundColor: BRAND_COLORS[model.brand] }} />
            <CardHeader className="pb-1 pt-2.5 px-3">
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] font-bold text-white rounded px-1.5 py-0.5"
                  style={{ backgroundColor: BRAND_COLORS[model.brand] }}
                >
                  {model.id}
                </span>
                <CardTitle className="text-sm">{model.name}</CardTitle>
                <span className="text-[10px] text-gray-400 ml-auto">{model.brand}</span>
              </div>
              <p className="text-[11px] text-gray-500">{model.subtitle}</p>
            </CardHeader>
            <CardContent className="pt-0 pb-2.5 px-3 space-y-2">
              {/* Pricing + mechanics */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px]">
                <div>
                  <span className="text-gray-400">Price</span>
                  <p className="font-bold text-sm">{model.pricing.display}</p>
                </div>
                <div>
                  <span className="text-gray-400">Items</span>
                  <p className="font-semibold">{model.mechanics.items}</p>
                </div>
                <div>
                  <span className="text-gray-400">Swaps</span>
                  <p className="font-semibold">{model.mechanics.swaps}</p>
                </div>
                <div>
                  <span className="text-gray-400">Buyout</span>
                  <p className="font-semibold truncate">{model.mechanics.buyout.split('.')[0]}</p>
                </div>
              </div>

              {/* Unit economics */}
              <div className="bg-gray-50 rounded-md p-2 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-500">Revenue</span>
                  <span className="font-bold">${model.economics.revenuePerCustomer}/mo</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-red-500">-${model.economics.shippingPerMonth}</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-500">Other variable</span>
                  <span className="text-red-500">-${model.economics.otherVariable}</span>
                </div>
                <div className="border-t pt-1 flex justify-between text-[10px]">
                  <span className="font-bold">Contribution</span>
                  <span className="font-bold text-green-600">${model.economics.contributionMargin}/mo</span>
                </div>
                <MarginBar percent={model.economics.marginPercent} />
              </div>

              {/* Test segment + risks */}
              <div className="text-[10px] space-y-0.5">
                <div className="flex gap-1">
                  <span className="text-gray-400 shrink-0">Test:</span>
                  <span className="text-gray-600">{model.testSegment}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-green-500 shrink-0">+</span>
                  <span className="text-gray-600">{model.keyAdvantage}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-red-400 shrink-0">!</span>
                  <span className="text-gray-600">{model.keyRisk}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* DHL shipping note */}
      <Card>
        <CardContent className="py-2.5 px-3">
          <p className="text-[10px] text-gray-500">
            <span className="font-bold text-gray-700">Shipping: </span>
            DHL from KZ (-30% discount). KZ→US: ~$30/item. Returns to US contact: ~$10 domestic.
            Round-trip per swap: ~$40. No warehouse — direct to customer.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
