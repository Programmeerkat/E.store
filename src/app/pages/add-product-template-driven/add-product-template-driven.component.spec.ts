import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductTemplateDrivenComponent } from './add-product-template-driven.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

describe('AddProductTemplateDrivenComponent', () => {
  let component: AddProductTemplateDrivenComponent;
  let fixture: ComponentFixture<AddProductTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductTemplateDrivenComponent, FormsModule, CommonModule, RouterLink],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should reset the form after I submit it', () => {
    expect(component).toBeTruthy();

    const formElement = fixture.nativeElement.querySelector('form');
    const nameInput = formElement.querySelector('input[name="name"]');
    const priceInput = formElement.querySelector('input[name="price"]');
    const submitButton = formElement.querySelector('button[type="submit"]');

    nameInput.value = 'myname';
    priceInput.value = '123';
    nameInput.dispatchEvent(new Event('input'));
    priceInput.dispatchEvent(new Event('input'));

    submitButton.click();

    expect(nameInput.value).toBe('');
    expect(priceInput.value).toBe('');
  });

  it('should not reset the form after I submit it if my form is invalid when i only enter 3 characters for the name', () => {
    expect(component).toBeTruthy();

    const formElement = fixture.nativeElement.querySelector('form');
    const nameInput = formElement.querySelector('input[name="name"]');
    const priceInput = formElement.querySelector('input[name="price"]');
    const submitButton = formElement.querySelector('button[type="submit"]');

    nameInput.value = 'abc';
    priceInput.value = '123';
    nameInput.dispatchEvent(new Event('input'));
    priceInput.dispatchEvent(new Event('input'));

    submitButton.click();

    expect(nameInput.value).toBe('abc');
    expect(priceInput.value).toBe('123');
  });
});
