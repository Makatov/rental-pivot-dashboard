'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Circle, ClipboardList, Table2 } from 'lucide-react'
import { legalItems } from '@/data/policies'

export function OperationsChecklist() {
  const doneCount = legalItems.filter(l => l.done).length

  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold">Operations & Legal</h2>

      {/* Inventory Tracking */}
      <Card>
        <CardContent className="py-2.5 px-3 space-y-1.5">
          <div className="flex items-center gap-2">
            <Table2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
            <span className="text-xs font-medium">Inventory Tracking</span>
            <Badge variant="warning" className="text-[9px] px-1.5 py-0 ml-auto">MVP</Badge>
          </div>
          <p className="text-[10px] text-gray-500">
            Built in code. Statuses: available → rented → cleaning → available. Fields: SKU, Item, Brand, Status, Customer, Ship Date, Return Date, Location.
            Pre-positioned items (20-30) tracked separately.
          </p>
          <div className="flex gap-1.5 text-[9px]">
            <Badge variant="info" className="text-[9px] px-1.5 py-0">In-app tracking</Badge>
            <Badge variant="secondary" className="text-[9px] px-1.5 py-0">Phase 2: Admin panel</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Legal Checklist */}
      <Card>
        <CardContent className="py-2.5 px-3 space-y-2">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-medium">Legal Requirements</span>
            <Badge variant={doneCount === legalItems.length ? 'success' : 'warning'} className="text-[9px] px-1.5 py-0 ml-auto">
              {doneCount}/{legalItems.length}
            </Badge>
          </div>
          <div className="space-y-1">
            {legalItems.map((item) => (
              <div key={item.id} className="flex items-start gap-2 p-1 rounded hover:bg-gray-50">
                {item.done ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="h-3.5 w-3.5 text-gray-300 flex-shrink-0 mt-0.5" />
                )}
                <div className="min-w-0">
                  <span className="text-[11px] font-medium">{item.title}</span>
                  <p className="text-[10px] text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
