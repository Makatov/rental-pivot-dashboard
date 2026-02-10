import Link from 'next/link'
import { BarChart3, Sparkles, ClipboardList, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react'
import { taskCategories } from '@/data/tasks'
import { projections, breakEven, unitEconomics, totalBudget } from '@/data/financials'
import { milestones } from '@/data/milestones'

export default function Home() {
  const totalTasks = taskCategories.reduce((sum, c) => sum + c.tasks.length, 0)
  const doneTasks = taskCategories.reduce((sum, c) => sum + c.tasks.filter(t => t.status === 'done').length, 0)
  const highTasks = taskCategories.reduce((sum, c) => sum + c.tasks.filter(t => t.priority === 'high' && t.status !== 'done').length, 0)
  const nextMilestone = milestones.find(m => !m.done)
  const realistM6 = projections.realist[5]

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-5 pt-6 pb-4 max-w-lg mx-auto">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Flimod</p>
          <h1 className="text-xl font-bold mt-0.5">Rental Pivot</h1>
          <p className="text-xs text-gray-500 mt-1">3 models: RO1 (rotate) + ED1 & ED2 (ÉDIT). Pre-positioned in US.</p>
        </div>
      </div>

      {/* Key metrics */}
      <div className="px-5 pt-4 pb-2 max-w-lg mx-auto w-full">
        <div className="grid grid-cols-4 gap-2">
          <Metric icon={<DollarSign className="h-3 w-3" />} value={`$${(totalBudget / 1000).toFixed(0)}K`} label="budget" />
          <Metric icon={<TrendingUp className="h-3 w-3" />} value={breakEven.scenarios.realist.breakEvenMonth.replace('Month ', 'M')} label="break-even" />
          <Metric icon={<Users className="h-3 w-3" />} value={`${realistM6.ro1 + realistM6.ed1 + realistM6.ed2}`} label="M6 subs" />
          <Metric icon={<Calendar className="h-3 w-3" />} value={`W${nextMilestone?.week ?? '—'}`} label="next goal" />
        </div>
      </div>

      {/* Unit economics mini */}
      <div className="px-5 py-2 max-w-lg mx-auto w-full">
        <div className="bg-white rounded-xl border p-3">
          <div className="grid grid-cols-3 gap-3 text-center">
            {(['ro1', 'ed1', 'ed2'] as const).map((key) => {
              const ue = unitEconomics[key]
              return (
                <div key={key}>
                  <p className="text-[9px] text-gray-400 uppercase">{key}</p>
                  <p className="text-sm font-bold">${ue.arpu}</p>
                  <p className="text-[9px] text-emerald-600">{ue.marginPercent}% margin</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-5 py-3 space-y-2.5 max-w-lg mx-auto w-full">
        <NavCard
          href="/dashboard"
          icon={<BarChart3 className="h-5 w-5 text-indigo-600" />}
          iconBg="bg-indigo-100"
          title="Dashboard"
          subtitle="Financials, timeline, models, risks"
        />
        <NavCard
          href="/tasks"
          icon={<ClipboardList className="h-5 w-5 text-amber-600" />}
          iconBg="bg-amber-100"
          title="Tasks"
          subtitle={`${highTasks} high priority, ${doneTasks}/${totalTasks} done`}
        />
        <NavCard
          href="/demo"
          icon={<Sparkles className="h-5 w-5 text-rose-600" />}
          iconBg="bg-rose-100"
          title="Brand Demo"
          subtitle="ÉDIT & rotate landing prototypes"
        />
      </div>

      {/* Realist M6 snapshot */}
      <div className="px-5 pb-4 max-w-lg mx-auto w-full">
        <div className="bg-white rounded-xl border p-3">
          <p className="text-[9px] text-gray-400 uppercase mb-2">Realist M6 snapshot</p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <p className="text-gray-500">Revenue</p>
              <p className="font-bold">${(realistM6.revenue / 1000).toFixed(1)}K</p>
            </div>
            <div>
              <p className="text-gray-500">Net</p>
              <p className="font-bold text-emerald-600">+${realistM6.net}</p>
            </div>
            <div>
              <p className="text-gray-500">Cumulative</p>
              <p className="font-bold text-emerald-600">+${(realistM6.cumulative / 1000).toFixed(1)}K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 text-center text-[10px] text-gray-400">
        Flimod Rental Pivot 2026
      </div>
    </main>
  )
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-lg border p-2 text-center">
      <div className="flex justify-center text-gray-400 mb-0.5">{icon}</div>
      <p className="text-sm font-bold">{value}</p>
      <p className="text-[8px] text-gray-400 uppercase">{label}</p>
    </div>
  )
}

function NavCard({ href, icon, iconBg, title, subtitle }: {
  href: string; icon: React.ReactNode; iconBg: string; title: string; subtitle: string
}) {
  return (
    <Link href={href} className="block">
      <div className="rounded-xl bg-white border shadow-sm p-3.5 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold">{title}</h2>
            <p className="text-[11px] text-gray-500">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
