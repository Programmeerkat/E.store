import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../types';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-search-page',
  imports: [RouterLink, Card],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  
  products = signal<Product[]>([]);
  searchQuery = signal('');

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const searchquery = params.get('searchquery') ?? '';
      this.searchQuery.set(searchquery);

      this.productService.getProductsSearch(searchquery).subscribe((products) => {
        this.products.set(products);
      });
    });
  }
}
