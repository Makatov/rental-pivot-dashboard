import Link from 'next/link'
import { BarChart3, Sparkles, Package, DollarSign, Target } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 text-center">
        <h1 className="text-2xl font-bold">Rental Pivot</h1>
        <p className="text-sm text-gray-500 mt-1">Flimod &rarr; ÉDIT + rotate</p>
      </div>

      {/* Navigation cards */}
      <div className="flex-1 px-6 space-y-4 max-w-lg mx-auto w-full">
        <Link href="/dashboard" className="block">
          <div className="rounded-2xl bg-white border shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Team Dashboard</h2>
                <p className="text-sm text-gray-500">Statuses, metrics, timeline, financials</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/demo" className="block">
          <div className="rounded-2xl bg-white border shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Brand Demo</h2>
                <p className="text-sm text-gray-500">ÉDIT (London) & rotate (NYC) prototypes</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick stats */}
      <div className="px-6 py-6 max-w-lg mx-auto w-full">
        <div className="grid grid-cols-3 gap-3">
          <QuickStat icon={<Package className="h-4 w-4" />} value="3,631" label="items" />
          <QuickStat icon={<DollarSign className="h-4 w-4" />} value="$587K" label="value" />
          <QuickStat icon={<Target className="h-4 w-4" />} value="2,347" label="rental-ideal" />
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 text-center text-xs text-gray-400">
        Flimod Rental Pivot Research 2026
      </div>
    </main>
  )
}

function QuickStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl border p-3 text-center">
      <div className="flex justify-center text-gray-400 mb-1">{icon}</div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] text-gray-400 uppercase">{label}</p>
    </div>
  )
}
