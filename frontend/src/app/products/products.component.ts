import { Component } from '@angular/core'
import { NavbarComponent } from '../navbar/navbar.component'
import { Product } from '../types/product'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ProductsService } from '../products.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  constructor(private productsService: ProductsService) {}  // Inject service

  products: Product[] = []
  showForm = false
  newProduct: Product = {
    name: '',
    id: '',
    currentReleaseLink: '',
    createdAt: new Date(),
    batchesNumber: 0,
    imageUrl: 'assets/default-image.png', // Default image if no image is uploaded
    batches: []
  }
  selectedFile: File | null = null


  ngOnInit() {
    this.productsService.getProducts().subscribe(products=>{
      this.products=products;
    }); // Get products from service
  }

  addProduct() {
    if (this.selectedFile) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        this.newProduct.imageUrl = e.target.result
        this.saveProduct()
      }
      reader.readAsDataURL(this.selectedFile)
    } else {
      this.saveProduct()
    }
  }

  saveProduct() {
    this.productsService.addProduct({ ...this.newProduct }).subscribe({
      next: (product) => {
        this.products.push(product); 
        this.newProduct = {
          name: '',
          id: '',
          currentReleaseLink: '',
          createdAt: new Date(),
          batchesNumber: 0,
          imageUrl: 'assets/default-image.png',
          batches: []
        };
        this.showForm = false; 
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Error while adding the product:', err);
      },
      complete: () => {
        console.log('Post request done successfully');
      }
    });
  }

  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
  }
}
