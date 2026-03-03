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
  imports: [Card, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  count$: Observable<number>;
  products$: Observable<Product[]>;

  constructor(private store: Store<{ count: number; products: Product[] }>) {
    this.count$ = store.select('count');
    this.products$ = store.select('products');
    // this.products$.subscribe((data) => console.log(data));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
