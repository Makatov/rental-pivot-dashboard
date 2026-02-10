import Link from 'next/link'
import { BarChart3, Sparkles, ClipboardList } from 'lucide-react'
import { taskCategories } from '@/data/tasks'

export default function Home() {
  const totalTasks = taskCategories.reduce((sum, c) => sum + c.tasks.length, 0)
  const doneTasks = taskCategories.reduce((sum, c) => sum + c.tasks.filter(t => t.status === 'done').length, 0)
  const highTasks = taskCategories.reduce((sum, c) => sum + c.tasks.filter(t => t.priority === 'high' && t.status !== 'done').length, 0)

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

      {/* Navigation */}
      <div className="flex-1 px-5 py-4 space-y-2.5 max-w-lg mx-auto w-full">
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

      {/* Footer */}
      <div className="px-5 py-3 text-center text-[10px] text-gray-400">
        Flimod Rental Pivot 2026
      </div>
    </main>
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
