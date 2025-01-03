import { useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'

import { OutlineButton } from './ui/outline-button'

import { useCreateCompletion, useGetPendingGoals } from '../http/generated/api'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useGetPendingGoals()

  const { mutateAsync: createGoalCompletion } = useCreateCompletion()

  if (isLoading || !data) {
    return null
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion({ data: { goalId } })

    queryClient.invalidateQueries({ queryKey: ['summary'] })

    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.pendingGoals.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
