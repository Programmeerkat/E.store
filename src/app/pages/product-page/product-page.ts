import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types';
import { ProductService } from '../../services/product-service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  private route = inject(ActivatedRoute);
  product = signal<Product | null>(null);

  constructor(private store: Store<{ count: number; products: Product[] }>) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.select('products').subscribe((products) => {
      if (products.length > 0) {
        console.log(
          'myProduct',
          products.find((product: Product) => product.id == id),
        );

        this.product.set(products.find((product: Product) => product.id == id) as Product);
      }
    });
  }
}
