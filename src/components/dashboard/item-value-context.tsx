'use client'

import { Card, CardContent } from '@/components/ui/card'

const topBrands = [
  { brand: 'D&G', flimod: 215, retail: 645 },
  { brand: 'Prada', flimod: 281, retail: 843 },
  { brand: 'Gucci', flimod: 263, retail: 789 },
  { brand: 'Dior', flimod: 304, retail: 912 },
]

export function ItemValueContext() {
  return (
    <section className="space-y-3">
      <div className="flex items-baseline gap-2">
        <h2 className="text-base font-bold">Item Value Context</h2>
        <span className="text-xs text-gray-400">COGS = $0</span>
      </div>

      <Card>
        <CardContent className="py-3 px-3 space-y-3">
          {/* Main value proposition */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">Flimod Avg Price</p>
              <p className="text-lg font-bold">$185</p>
              <p className="text-[10px] text-gray-400">82,000₸</p>
            </div>
            <div className="text-center px-3">
              <div className="text-xl font-bold text-amber-500">3x</div>
              <p className="text-[9px] text-gray-400">multiplier</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">Est. Retail Value</p>
              <p className="text-lg font-bold text-green-600">~$555</p>
              <p className="text-[10px] text-gray-400">luxury retail</p>
            </div>
          </div>

          {/* COGS + Opportunity cost */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-50 rounded-md p-2">
              <p className="text-[10px] text-gray-500">COGS</p>
              <p className="text-sm font-bold text-green-600">$0</p>
              <p className="text-[9px] text-gray-400">Inventory already owned</p>
            </div>
            <div className="bg-amber-50 rounded-md p-2">
              <p className="text-[10px] text-gray-500">Opportunity cost</p>
              <p className="text-sm font-bold text-amber-600">~$300</p>
              <p className="text-[9px] text-gray-400">Resale on eBay/Poshmark</p>
            </div>
          </div>

          {/* Rental vs Sell ROI */}
          <div className="bg-blue-50 rounded-md p-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] text-gray-500">Rental lifetime (25 rentals)</p>
                <p className="text-sm font-bold text-blue-600">$1,250 per item</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500">vs Sell once</p>
                <p className="text-sm font-bold text-gray-400">$300</p>
              </div>
              <div className="bg-blue-100 rounded px-2 py-1">
                <p className="text-lg font-bold text-blue-700">4.2x</p>
                <p className="text-[8px] text-blue-500">rent vs sell</p>
              </div>
            </div>
          </div>

          {/* Top brands */}
          <div>
            <p className="text-[10px] text-gray-400 mb-1">Top brands (Flimod → Retail est.)</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
              {topBrands.map((b) => (
                <div key={b.brand} className="flex justify-between text-[10px]">
                  <span className="text-gray-600">{b.brand}</span>
                  <span>
                    <span className="text-gray-400">${b.flimod}</span>
                    <span className="text-gray-300 mx-0.5">→</span>
                    <span className="font-semibold text-green-600">${b.retail}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
