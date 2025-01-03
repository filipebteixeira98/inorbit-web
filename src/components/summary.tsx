import { CheckCircle2, Plus } from 'lucide-react'
import dayjs from 'dayjs'
import en from 'dayjs/locale/en'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'

import { PendingGoals } from './pending-goals'

import type { GetWeekSummary200Summary } from '../http/generated/api'

import { InOrbitIcon } from './in-orbit-icon'

dayjs.locale(en)

interface SummaryProps {
  summary: GetWeekSummary200Summary
}

export function Summary({ summary }: SummaryProps) {
  if (!summary) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf('week').format('MMM D')

  const lastDayOfWeek = dayjs().endOf('week').format('MMM D')

  const completedPercentage = summary.total
    ? Math.round((summary.completed * 100) / summary.total)
    : 0

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600"
          >
            <Plus className="size-4" />
            Register goal
          </Button>
        </DialogTrigger>
      </div>
      <div className="flex flex-col gap-3">
        <Progress value={summary.completed} max={summary.total ?? 0}>
          <ProgressIndicator
            style={{
              width: `${completedPercentage}%`,
            }}
          />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You completed{' '}
            <span className="text-zinc-100">{summary?.completed}</span> out of{' '}
            <span className="text-zinc-100">{summary?.total}</span> goals this
            week
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>
      <Separator />
      <PendingGoals />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Your week</h2>
        {summary.goalsPerDay &&
          Object.entries(summary.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd')

            const formattedDate = dayjs(date).format('MMMM D')

            return (
              <div key={date} className="flex flex-col gap-4">
                <h3 className="font-medium capitalize">
                  <span className="capitalize">{weekDay}</span>{' '}
                  <span className="text-zinc-400 text-xs">
                    ({formattedDate})
                  </span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {goals.map(goal => {
                    const parsedTime = dayjs(goal.completedAt).format('hh:mm a')

                    return (
                      <li key={goal.id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-xs text-zinc-400">
                          You completed "
                          <span className="text-zinc-100">{goal.title}</span>"
                          at <span className="text-zinc-100">{parsedTime}</span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
      </div>
    </div>
  )
}
