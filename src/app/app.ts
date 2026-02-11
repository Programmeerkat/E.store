import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private productService = inject(ProductService);
  products = this.productService.getProducts();
}
