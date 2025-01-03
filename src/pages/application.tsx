import { Loader2 } from 'lucide-react'

import { CreateGoal } from '../components/create-goal'
import { Dialog } from '../components/ui/dialog'
import { EmptyGoals } from '../components/empty-goals'
import { Summary } from '../components/summary'

import { useGetWeekSummary } from '../http/generated/api'

export function Application() {
  const { data, isLoading } = useGetWeekSummary()

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-6" />
      </div>
    )
  }

  return (
    <Dialog>
      {data?.summary.total && data.summary.total > 0 ? (
        <Summary summary={data.summary} />
      ) : (
        <EmptyGoals />
      )}
      <CreateGoal />
    </Dialog>
  )
}
