import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from './types/product'
import { Batch } from './types/batch'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/api/products/'

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  getBatch(productId: string, batchNumber: number): Observable<Batch> {
    return this.http.get<Batch>(`${this.apiUrl}/${productId}/batches/${batchNumber}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
  }

  addBatchToProduct(productId: string, batch: Batch): Observable<any> { 
    return this.http.post(`${this.apiUrl}/${productId}/batches`, batch)
  }

  addNextStep(productId: string, batchNumber: number, stepNumber: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${productId}/batches/${batchNumber}/steps`, {
      stepNumber,
    })
  }
}
