import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductReactiveComponent } from './add-product-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddProductReactiveComponent', () => {
  let component: AddProductReactiveComponent;
  let fixture: ComponentFixture<AddProductReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddProductReactiveComponent, // standalone component
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ----------------------------------
  // Basic
  // ----------------------------------

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form.value).toEqual({
      name: '',
      price: '',
    });
  });

  // ----------------------------------
  // Name Validation
  // ----------------------------------

  it('should require name', () => {
    const name = component.form.controls.name;
    name.setValue('');
    expect(name.hasError('required')).toBe(true);
  });

  it('should require minimum length of 3', () => {
    const name = component.form.controls.name;
    name.setValue('ab');
    expect(name.hasError('minlength')).toBe(true);
  });

  it('should require name to contain "product"', () => {
    const name = component.form.controls.name;
    name.setValue('invalid name');
    expect(name.hasError('doesNotContainProduct')).toBe(true);
  });

  it('should accept valid name', () => {
    const name = component.form.controls.name;
    name.setValue('awesome product');
    expect(name.valid).toBe(true);
  });

  // ----------------------------------
  // Price Validation
  // ----------------------------------

  it('should require price', () => {
    const price = component.form.controls.price;
    price.setValue('');
    expect(price.hasError('required')).toBe(true);
  });

  it('should accept valid price', () => {
    const price = component.form.controls.price;
    price.setValue('100');
    expect(price.valid).toBe(true);
  });

  // ----------------------------------
  // Getters
  // ----------------------------------

  it('should return true for invalidName when touched and invalid', () => {
    const name = component.form.controls.name;
    name.setValue('');
    name.markAsTouched();

    expect(component.invalidName).toBe(true);
  });

  it('should return true for invalidPrice when touched and invalid', () => {
    const price = component.form.controls.price;
    price.setValue('');
    price.markAsTouched();

    expect(component.invalidPrice).toBe(true);
  });

  it('should return true for invalidForm when both fields invalid', () => {
    component.form.controls.name.setValue('');
    component.form.controls.price.setValue('');

    component.form.controls.name.markAsTouched();
    component.form.controls.price.markAsTouched();

    expect(component.invalidForm).toBe(true);
  });

  // ----------------------------------
  // onSubmit
  // ----------------------------------

  it('should not submit if form is invalid', () => {
    const logSpy = vi.spyOn(console, 'log');

    component.form.setValue({ name: '', price: '' });
    component.onSubmit();

    expect(logSpy).not.toHaveBeenCalled();
  });

  it('should log values and reset form if valid', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    component.form.setValue({
      name: 'awesome product',
      price: '100',
    });

    component.onSubmit();

    expect(logSpy).toHaveBeenCalledWith('awesome product');
    expect(logSpy).toHaveBeenCalledWith('100');

    // After reset() Angular sets controls to null
    expect(component.form.value).toEqual({
      name: null,
      price: null,
    });
  });
});
