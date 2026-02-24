import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../types';

import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<{products: Product[]}>(`${environment.apiUrl}/products`).pipe(
      map(data => data.products)
    );
  }

  getSingleProduct(id: number) {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  getProductsSearch(searchquery: string) {
    return this.http.get<{products: Product[]}>(`${environment.apiUrl}/products/search`, { params: { q: searchquery } }).pipe(
      map(data => data.products)
    );
  }
}
