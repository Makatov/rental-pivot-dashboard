'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { businessModels, businessModelScenarios, modelSummary, itemLifetimeROI } from '@/data/business-models'
import { BusinessModel } from '@/types'

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

function ScenarioToggle({ modelId, active, onChange }: {
  modelId: string
  active: string
  onChange: (scenario: string) => void
}) {
  const scenarios = businessModelScenarios[modelId]
  if (!scenarios) return null
  const keys = Object.keys(scenarios)
  if (keys.length <= 1) return null

  return (
    <div className="flex bg-gray-100 rounded-md p-0.5 text-[9px]">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-2 py-0.5 rounded transition-colors ${
            active === key ? 'bg-white shadow-sm font-bold text-gray-900' : 'text-gray-500'
          }`}
        >
          {key === 'pre-positioned' ? 'US inventory' : 'From KZ (bulk)'}
        </button>
      ))}
    </div>
  )
}

function CostLine({ label, value }: { label: string; value: number }) {
  if (value === 0) return null
  return (
    <div className="flex justify-between text-[10px]">
      <span className="text-gray-500">{label}</span>
      <span className="text-red-500">-${value.toFixed(2)}</span>
    </div>
  )
}

function ModelCard({ model }: { model: BusinessModel }) {
  const { economics } = model

  return (
    <Card className="overflow-hidden">
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
          <div className="col-span-2">
            <span className="text-gray-400">Deposit</span>
            <p className="font-semibold">{model.mechanics.securityDeposit.split('(')[0].trim()}</p>
          </div>
        </div>

        {/* Granular unit economics */}
        <div className="bg-gray-50 rounded-md p-2 space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500">Revenue</span>
            <span className="font-bold">${economics.revenuePerCustomer}/mo</span>
          </div>
          <CostLine label="Shipping out" value={economics.costs.shippingOut} />
          <CostLine label="Shipping return" value={economics.costs.shippingReturn} />
          <CostLine label="Customs" value={economics.costs.customs} />
          <CostLine label="Cleaning" value={economics.costs.cleaning} />
          <CostLine label="Damage reserve" value={economics.costs.damageReserve} />
          <CostLine label="Stripe fees" value={economics.costs.stripeFees} />
          <CostLine label="Depreciation" value={economics.costs.depreciation} />
          <div className="border-t pt-1 flex justify-between text-[10px]">
            <span className="font-bold">Contribution</span>
            <span className="font-bold text-green-600">${economics.contributionMargin.toFixed(2)}/mo</span>
          </div>
          <MarginBar percent={economics.marginPercent} />
        </div>

        {/* CAC / Payback / LTV */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-blue-50 rounded-md p-1.5 text-center">
            <p className="text-[9px] text-gray-400">CAC</p>
            <p className="text-xs font-bold text-blue-600">${economics.cac}</p>
          </div>
          <div className="bg-green-50 rounded-md p-1.5 text-center">
            <p className="text-[9px] text-gray-400">Payback</p>
            <p className="text-xs font-bold text-green-600">{economics.paybackMonths} mo</p>
          </div>
          <div className="bg-purple-50 rounded-md p-1.5 text-center">
            <p className="text-[9px] text-gray-400">LTV</p>
            <p className="text-xs font-bold text-purple-600">${economics.ltv}</p>
          </div>
        </div>
        <div className="text-center">
          <span className="text-[9px] text-gray-400">LTV:CAC = </span>
          <span className="text-[10px] font-bold text-green-600">{economics.ltvCacRatio}</span>
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
  )
}

export function ModelComparison() {
  const [scenarios, setScenarios] = useState<Record<string, string>>({
    R2: 'pre-positioned',
    E1: 'pre-positioned',
    E3: 'pre-positioned',
  })

  const getModel = (defaultModel: BusinessModel): BusinessModel => {
    const modelScenarios = businessModelScenarios[defaultModel.id]
    if (!modelScenarios) return defaultModel
    const activeScenario = scenarios[defaultModel.id]
    if (activeScenario && modelScenarios[activeScenario as keyof typeof modelScenarios]) {
      return modelScenarios[activeScenario as keyof typeof modelScenarios]!
    }
    return defaultModel
  }

  return (
    <section className="space-y-3">
      <div className="flex items-baseline gap-2">
        <h2 className="text-base font-bold">{modelSummary.totalModels} Models to Test</h2>
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
        {businessModels.map((defaultModel) => {
          const model = getModel(defaultModel)
          const hasScenarios = Object.keys(businessModelScenarios[model.id] || {}).length > 1

          return (
            <div key={defaultModel.id} className="space-y-1">
              {hasScenarios && (
                <div className="flex justify-end">
                  <ScenarioToggle
                    modelId={model.id}
                    active={scenarios[model.id] || model.scenarioId || 'pre-positioned'}
                    onChange={(s) => setScenarios((prev) => ({ ...prev, [model.id]: s }))}
                  />
                </div>
              )}
              <ModelCard model={model} />
            </div>
          )
        })}
      </div>

      {/* Item Lifetime ROI */}
      <Card>
        <CardContent className="py-2.5 px-3 space-y-2">
          <p className="text-[11px] font-bold text-gray-700">Item Lifetime ROI (COGS = $0)</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <p className="text-[9px] text-gray-400">Avg contribution</p>
              <p className="text-sm font-bold">${itemLifetimeROI.avgContributionPerRental}</p>
              <p className="text-[9px] text-gray-400">per rental</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-gray-400">Item lifetime</p>
              <p className="text-sm font-bold">{itemLifetimeROI.itemLifetimeRentals}</p>
              <p className="text-[9px] text-gray-400">rentals</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-gray-400">Total per item</p>
              <p className="text-sm font-bold text-green-600">$1,250</p>
              <p className="text-[9px] text-gray-400">lifetime</p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-green-50 rounded-md p-2">
            <div className="text-[10px]">
              <span className="text-gray-500">Rent {itemLifetimeROI.itemLifetimeRentals}x:</span>
              <span className="font-bold text-green-600 ml-1">$1,250</span>
              <span className="text-gray-400 mx-1">vs</span>
              <span className="text-gray-500">Sell once:</span>
              <span className="font-bold text-gray-400 ml-1">${itemLifetimeROI.sellPrice}</span>
            </div>
            <span className="text-sm font-bold text-green-600">{itemLifetimeROI.rentalVsSellMultiplier}x better</span>
          </div>
        </CardContent>
      </Card>

      {/* Shipping note */}
      <Card>
        <CardContent className="py-2.5 px-3">
          <p className="text-[10px] text-gray-500">
            <span className="font-bold text-gray-700">Shipping: </span>
            DHL bulk from KZ: $30 per package of 4 items = <strong>$7.50/item</strong> + $15 customs = $22.50 total/item.
            Pre-positioned US items: $10 domestic. All models profitable even from KZ.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
