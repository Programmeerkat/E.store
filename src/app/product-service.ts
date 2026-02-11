import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return [
      { 
        id: 1, 
        name: 'Product 1', 
        price: 10, 
        url: 'https://placehold.co/250x250' },
      {
        id: 2, 
        name: 'Product 2', 
        price: 20, 
        url: 'https://placehold.co/250x250' },
      { 
        id: 3, 
        name: 'Product 3', 
        price: 30, 
        url: 'https://placehold.co/250x250' },
    ];
  }
}
