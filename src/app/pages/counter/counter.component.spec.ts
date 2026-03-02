import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from '../ngrx/reducers/counter.reducer';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent, CommonModule, RouterLink],
      providers: [
        provideRouter(routes),
        provideStore(),
        provideState({ name: 'count', reducer: counterReducer }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
