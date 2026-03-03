import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Store } from '@ngrx/store';
import { loadProducts } from './ngrx/actions/product.action';
import { Product } from './types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private store: Store<{ count: number; products: Product[] }>) {}
  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
