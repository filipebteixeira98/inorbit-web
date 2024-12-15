import { CheckCircle2, Plus } from 'lucide-react'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { OutlineButton } from './ui/outline-button'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'

import { InOrbitIcon } from './in-orbit-icon'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">August 5th to 10th</span>
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
        <Progress value={8} max={15}>
          <ProgressIndicator
            style={{
              width: '50%',
            }}
          />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You completed <span className="text-zinc-100">8</span> out of{' '}
            <span className="text-zinc-100">15</span> goals this week
          </span>
          <span>58%</span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditate
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Exercise
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Pray
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Eat Regularly
        </OutlineButton>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Your week</h2>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Sunday <span className="text-zinc-400 text-xs">(August 10th)</span>
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-xs text-zinc-400">
                You completed "
                <span className="text-zinc-100">wake up early</span>" at{' '}
                <span className="text-zinc-100">8:15am</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Monday <span className="text-zinc-400 text-xs">(August 11th)</span>
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-xs text-zinc-400">
                You completed "
                <span className="text-zinc-100">wake up early</span>" at{' '}
                <span className="text-zinc-100">8:15am</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
