import { Component, inject, signal } from '@angular/core';
import { Product } from '../../types';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})

export class ProductPage {
  private productService = inject(ProductService);
  product = signal<Product | null>(null);

  ngOnInit() { 
    this.productService.getSingleProduct(1).subscribe((data: any) => {
      console.log(data)
      this.product.set(data);
    });
  }
}
