export interface Step {
    id: string;
    batchID: string;  // Relation belongsTo with Batches
    description: string;
    expectedEndDate: string;
    actualEndDate?: string;
    state: string;
    owner: string;
    updatedAt: string;
    createdAt: string;
}