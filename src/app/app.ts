import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Card } from './card/card';
import { Banner } from './banner/banner';
import { Footer } from './footer/footer';
import { Header } from './header/header';

import { BannerService } from './banner-service';
import { ProductService } from './product-service';

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
