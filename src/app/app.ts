import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = [
    {name: 'pepsi bottle', price: 1.99, url: 'https://placehold.co/250x250'},
    {name: 'cola bottle', price: 2.09, url: 'https://placehold.co/250x250'},
    {name: 'fanta bottle', price: 0.99, url: 'https://placehold.co/250x250'},
    {name: 'sprite bottle', price: 1.49, url: 'https://placehold.co/250x250'},
    {name: 'mountain dew bottle', price: 1.79, url: 'https://placehold.co/250x250'},
  ];
}
