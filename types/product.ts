import { Batch } from "./batch";

export interface Product {
    id: string;
    name: string;
    currentReleaseLink: string;
    imageUrl: string;
    batches: Batch[];  // Relation hasMany with Batches
    batchesNumber: number;
    owner: string;
    updatedAt: string;
    createdAt: string;
}