import { Message } from "./message";
import { Roadmap } from "./roadmap";
import { Step } from "./step";

export interface Batch {
    id: string;
    productID: string;  // Relation belongsTo with Products
    currentStep: string;
    messages: Message[];  // Relation hasMany with Messages
    owner: string;
    updatedAt: string;
    createdAt: string;
    steps: Step[];  // Relation hasMany with Steps
    roadmap: Roadmap;  // Relation hasOne with Roadmap
}