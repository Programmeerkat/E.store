import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Card } from './components/card/card';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

import { ProductService } from './services/product-service';

import { Product } from "./types";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit() { 
    this.productService.getProducts().subscribe((data: any) => {
      this.products.set(data.products);
    });
  }
}
