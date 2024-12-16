import { Component, OnInit } from '@angular/core'
import { Batch } from '../types/batch'
import { Product } from '../types/product'
import { ProductsService } from '../products.service'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { v4 as uuidv4 } from 'uuid'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css',
})
export class BatchesComponent {
  product: Product | undefined
  productBatches: Batch[] = []
  newBatch: Batch = {
    id: uuidv4(),
    number: 1,
    createdAt: new Date(),
    currentStepNumber: 0,
    steps: [],
  }

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')
    if (productId) {
      this.productsService.getProductById(productId).subscribe(product => {
        this.product = product
        if (this.product) {
          this.productBatches = this.product.batches
          this.newBatch.number = this.product.batchesNumber + 1
        }
      })
    }
  }

  addBatch() {
    if (this.product && this.newBatch.id) {
      this.newBatch.createdAt = new Date()
      this.productsService.addBatchToProduct(this.product.id, this.newBatch).subscribe({
        next: (response) => {
          if (this.product){
            this.product.batchesNumber++
            this.productBatches.push(this.newBatch)
            this.newBatch = {
              id: uuidv4(),
              number: this.product.batchesNumber + 1,
              createdAt: new Date(),
              currentStepNumber: 0,
              steps: [],
            }
          } 
        },
        error: (err) => {
          console.error('Error while adding the batch:', err)
        },
        complete: () => {
          console.log('Bacth added successfully')
        }
      })
    }
  }
}
