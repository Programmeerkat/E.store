import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../types';
import { ProductService } from '../../services/product-service';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-home-page',
  imports: [Card, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit() { 
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }
}
