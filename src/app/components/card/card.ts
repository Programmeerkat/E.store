import { Component, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../types';
import { deleteProduct } from '../../ngrx/actions/product.action';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  name = input<string>();
  price = input.required<number>();
  url = input<string>();
  id = input<number>();

  constructor(private store: Store<{ count: number; products: Product[] }>) {}

  deleteMe($event: Event) {
    $event.stopPropagation();
    this.store.dispatch(deleteProduct({ id: this.id() }));
  }
}
