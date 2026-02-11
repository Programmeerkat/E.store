import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Card } from './components/card/card';
import { Banner } from './components/banner/banner';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

import { BannerService } from './services/banner-service';
import { ProductService } from './services/product-service';

import { Product } from "./types";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Card, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private bannerService = inject(BannerService);
  banner = signal<Product[]>([]);
  
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.bannerService.getBanner().subscribe((data: any) => {
      this.banner.set(data.banner);
    });
    
    this.productService.getProducts().subscribe((data: any) => {
      this.products.set(data.products);
    });
  }
}
