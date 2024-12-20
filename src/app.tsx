import { useState, useEffect } from 'react'

import { Dialog } from './components/ui/dialog'

import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'

type SummaryProps = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export function App() {
  const [summary, setSummary] = useState<SummaryProps | null>(null)

  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => response.json())
      .then(data => setSummary(data.summary))
  }, [])

  return (
    <Dialog>
      {summary?.total && summary.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
