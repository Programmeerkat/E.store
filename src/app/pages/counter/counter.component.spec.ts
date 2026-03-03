import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { CounterComponent } from './counter.component';
import { increment, decrement, reset } from '../../ngrx/actions/counter.action';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let storeMock: {
    select: ReturnType<typeof vi.fn>;
    dispatch: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    storeMock = {
      select: vi.fn(),
      dispatch: vi.fn(),
    };

    // mock select to return observable of 0
    storeMock.select.mockReturnValue(of(0));

    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [
        provideRouter([]), // because RouterLink is used
        { provide: Store, useValue: storeMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ----------------------------
  // Basic
  // ----------------------------

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select count from store', () => {
    component.count$.subscribe((value) => {
      expect(value).toBe(0);
    });

    expect(storeMock.select).toHaveBeenCalledWith('count');
  });

  // ----------------------------
  // Dispatch tests
  // ----------------------------

  it('should dispatch increment action', () => {
    component.increment();
    expect(storeMock.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should dispatch decrement action', () => {
    component.decrement();
    expect(storeMock.dispatch).toHaveBeenCalledWith(decrement());
  });

  it('should dispatch reset action', () => {
    component.reset();
    expect(storeMock.dispatch).toHaveBeenCalledWith(reset());
  });
});
