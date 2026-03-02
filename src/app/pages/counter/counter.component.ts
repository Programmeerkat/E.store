import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../ngrx/actions/counter.action';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [CommonModule, RouterLink],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  private store = Inject(Store<{ count: number }>);
  count$: Observable<number>;

  constructor() {
    // TODO: Connect `this.count$` stream to the current store `count` state
    // this.count$ = 1;
    this.count$ = this.store.select('count');
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
