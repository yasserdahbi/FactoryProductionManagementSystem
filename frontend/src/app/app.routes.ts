import { Routes } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'
import { ProductsComponent } from './products/products.component'
import { BatchesComponent } from './batches/batches.component'
import { StepsComponent } from './steps/steps.component'

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: BatchesComponent },
  { path: 'product/:productId/:batchNumber', component: StepsComponent }
]
