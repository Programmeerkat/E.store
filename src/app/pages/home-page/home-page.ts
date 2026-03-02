import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../types';
import { ProductService } from '../../services/product-service';
import { Card } from '../../components/card/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { decrement } from '../../ngrx/actions/counter.action';
import { loadProducts } from '../../ngrx/actions/product.action';

@Component({
  selector: 'app-home-page',
  imports: [Card, RouterLink, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  count$: Observable<number>;
  producties$: Observable<any>;

  constructor(private store: Store<{ count: number; products: any }>) {
    this.count$ = store.select('count');
    this.producties$ = store.select('products');
  }

  decrement() {
    this.store.dispatch(decrement());
  }
  ngOnInit() {
    // this.productService.getProducts().subscribe((products) => {
    //   this.products.set(products);
    //   console.log(products);
    // });

    this.store.dispatch(loadProducts());
  }
}
