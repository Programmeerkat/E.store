import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private productService = inject(ProductService);
  products = signal<any[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products.set(data.products);
    });
  }
}
