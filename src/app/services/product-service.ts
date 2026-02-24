import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types';

import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getSingleProduct(id: number) {
    return this.http.get<Product[]>(`${environment.apiUrl}/products/${id}`);
  }
}
