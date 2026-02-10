import Link from 'next/link'
import { BarChart3, Sparkles, Package, DollarSign, Target, ClipboardList } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="px-5 pt-6 pb-3 text-center">
        <h1 className="text-xl font-bold">Rental Pivot</h1>
        <p className="text-xs text-gray-500 mt-0.5">Flimod &rarr; ÉDIT + rotate</p>
      </div>

      {/* Navigation cards */}
      <div className="flex-1 px-5 space-y-3 max-w-lg mx-auto w-full">
        <Link href="/dashboard" className="block">
          <div className="rounded-xl bg-white border shadow-sm p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-sm font-bold">Team Dashboard</h2>
                <p className="text-xs text-gray-500">Statuses, metrics, timeline, financials</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/tasks" className="block">
          <div className="rounded-xl bg-white border shadow-sm p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-sm font-bold">Tasks</h2>
                <p className="text-xs text-gray-500">Brand, US infra, Stripe, marketing, product</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/demo" className="block">
          <div className="rounded-xl bg-white border shadow-sm p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h2 className="text-sm font-bold">Brand Demo</h2>
                <p className="text-xs text-gray-500">ÉDIT (London) & rotate (NYC) prototypes</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick stats */}
      <div className="px-5 py-5 max-w-lg mx-auto w-full">
        <div className="grid grid-cols-3 gap-2">
          <QuickStat icon={<Package className="h-3.5 w-3.5" />} value="3,631" label="items" />
          <QuickStat icon={<DollarSign className="h-3.5 w-3.5" />} value="$587K" label="value" />
          <QuickStat icon={<Target className="h-3.5 w-3.5" />} value="2,347" label="rental-ideal" />
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 text-center text-[10px] text-gray-400">
        Flimod Rental Pivot Research 2026
      </div>
    </main>
  )
}

function QuickStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-lg border p-2.5 text-center">
      <div className="flex justify-center text-gray-400 mb-0.5">{icon}</div>
      <p className="text-sm font-bold">{value}</p>
      <p className="text-[9px] text-gray-400 uppercase">{label}</p>
    </div>
  )
}
