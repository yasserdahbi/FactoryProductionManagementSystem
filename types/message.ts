export interface Message {
    id: string;
    batchID: string;  // Relation belongsTo with Batches
    senderID: string;
    timeStamp: string;
    content: string;
    owner: string;
    updatedAt: string;
    createdAt: string;
}