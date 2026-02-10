'use client'

import Link from 'next/link'
import { ArrowLeft, Circle, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { taskCategories, type TaskStatus, type TaskPriority } from '@/data/tasks'

const statusConfig: Record<TaskStatus, { icon: typeof Circle; color: string; label: string }> = {
  'todo': { icon: Circle, color: 'text-gray-300', label: 'To do' },
  'in-progress': { icon: Clock, color: 'text-blue-500', label: 'In progress' },
  'done': { icon: CheckCircle2, color: 'text-emerald-500', label: 'Done' },
  'blocked': { icon: AlertCircle, color: 'text-red-500', label: 'Blocked' },
}

const priorityConfig: Record<TaskPriority, { bg: string; label: string }> = {
  'high': { bg: 'bg-red-100 text-red-700', label: 'high' },
  'medium': { bg: 'bg-amber-100 text-amber-700', label: 'med' },
  'low': { bg: 'bg-gray-100 text-gray-500', label: 'low' },
}

export default function TasksPage() {
  const totalTasks = taskCategories.reduce((sum, c) => sum + c.tasks.length, 0)
  const doneTasks = taskCategories.reduce((sum, c) => sum + c.tasks.filter(t => t.status === 'done').length, 0)
  const highPriority = taskCategories.reduce((sum, c) => sum + c.tasks.filter(t => t.priority === 'high' && t.status !== 'done').length, 0)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 py-2.5">
        <div className="flex items-center gap-2.5 max-w-lg mx-auto">
          <Link href="/" className="p-0.5 -ml-1">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <h1 className="text-sm font-bold">Tasks</h1>
          <Badge variant="secondary" className="text-[10px] ml-auto">
            {doneTasks}/{totalTasks} done
          </Badge>
        </div>
      </div>

      {/* Summary */}
      <div className="max-w-lg mx-auto px-4 pt-4 pb-2">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white rounded-lg border p-2.5 text-center">
            <p className="text-lg font-bold">{totalTasks}</p>
            <p className="text-[9px] text-gray-400 uppercase">total</p>
          </div>
          <div className="bg-white rounded-lg border p-2.5 text-center">
            <p className="text-lg font-bold text-red-600">{highPriority}</p>
            <p className="text-[9px] text-gray-400 uppercase">high priority</p>
          </div>
          <div className="bg-white rounded-lg border p-2.5 text-center">
            <p className="text-lg font-bold text-emerald-600">{doneTasks}</p>
            <p className="text-[9px] text-gray-400 uppercase">completed</p>
          </div>
        </div>
      </div>

      {/* Task categories */}
      <div className="max-w-lg mx-auto px-4 py-2 space-y-4">
        {taskCategories.map((category) => {
          const done = category.tasks.filter(t => t.status === 'done').length
          return (
            <Card key={category.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: category.color }} />
                  <CardTitle className="text-sm">{category.name}</CardTitle>
                  <span className="text-[10px] text-gray-400 ml-auto">{done}/{category.tasks.length}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-0.5">
                {category.tasks.map((task) => {
                  const status = statusConfig[task.status]
                  const StatusIcon = status.icon
                  const priority = priorityConfig[task.priority]
                  return (
                    <div key={task.id} className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50">
                      <StatusIcon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${status.color}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`text-xs ${task.status === 'done' ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                            {task.title}
                          </span>
                          <span className={`text-[9px] px-1.5 py-0 rounded-full ${priority.bg}`}>
                            {priority.label}
                          </span>
                          {task.assignee && (
                            <span className="text-[9px] px-1.5 py-0 rounded-full bg-blue-50 text-blue-600">
                              {task.assignee}
                            </span>
                          )}
                        </div>
                        {task.description && (
                          <p className="text-[10px] text-gray-400 mt-0.5">{task.description}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          )
        })}

        <div className="h-4" />
      </div>
    </main>
  )
}
