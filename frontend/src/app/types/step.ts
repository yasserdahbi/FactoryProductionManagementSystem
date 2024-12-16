export interface Step {
  id: string
  number: number,
  createdAt: Date
  state: string
  description: string
  expectedEndDate: string
  actualEndDate?: string
}
