export interface Roadmap {
    id: string;
    batchID: string;  // Relation belongsTo avec Batches
    estimatedEndDate: string;
    actualEndDate?: string;
    estimatedStepDates: string[];  
    actualStepDates: string[];  
    owner: string;
    updatedAt: string;
    createdAt: string;
}