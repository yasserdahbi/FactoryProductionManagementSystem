import { Step } from './step'

export interface Batch {
  id: string
  number: number
  createdAt: Date
  currentStepNumber: number
  steps: Step[]
}
