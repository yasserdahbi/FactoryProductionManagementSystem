import { Batch } from './batch'

export interface Product {
  name: string
  id: string
  currentReleaseLink: string
  createdAt: Date
  batchesNumber: number
  imageUrl: string
  batches: Batch[]
}
  