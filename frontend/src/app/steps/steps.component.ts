import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../types/product';
import { Batch } from '../types/batch';
import { Step } from '../types/step';
import { CommonModule, NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {

  product : Product | undefined;
  batch  : Batch | undefined;
  steps : Step[] = [];
  actualStepNumber : number = 0;


  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}


  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId')
    const batchNumber = Number(this.route.snapshot.paramMap.get('batchNumber'))
    if (productId) {
      this.productsService.getProductById(productId).subscribe(product=>{
        this.product=product;
      });
      this.productsService.getBatch(productId, batchNumber).subscribe(batch=>{
        this.batch=batch;
        if (this.batch) {
          this.steps = this.batch.steps
        }
      });
    }
  }

  addNextStep() {
    const productId = this.route.snapshot.paramMap.get('productId');
    const batchNumber = Number(this.route.snapshot.paramMap.get('batchNumber'));
  
    if (productId && this.batch) {
      this.batch.currentStepNumber++;
      this.productsService.addNextStep(productId, batchNumber, this.batch.currentStepNumber).subscribe({
        next: (response) => {
          this.steps.push(response.step); 
        },
        error: (err) => {
          console.error('Error while adding next step:', err);
        },
        complete: () => {
          console.log('Post request for adding next step done successfully.');
        }
      });
    }
  
    console.log(this.steps);
  }
  

  markStepAsCompleted(step: Step) {
    step.state = 'Done';
    step.actualEndDate = new Date().toISOString();
  }

}
