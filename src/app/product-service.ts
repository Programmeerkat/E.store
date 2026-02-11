import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('https://dummyjson.com/products');
  }
}
