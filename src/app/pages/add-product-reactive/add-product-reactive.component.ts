import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct } from '../../ngrx/actions/product.action';
import { Product } from '../../types';

// function mustContainProduct(control: AbstractControl) {
//   if (!control.value) {
//     return null;
//   }
//   if (control.value.includes('product')) {
//     return null;
//   }
//   return { doesNotContainProduct: true };
// }

@Component({
  selector: 'app-add-product-reactive',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-product-reactive.component.html',
  styleUrl: './add-product-reactive.component.css',
})
export class AddProductReactiveComponent {
  form = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    price: new FormControl('', {
      validators: [Validators.required],
    }),
    brand: new FormControl('', {
      validators: [Validators.required],
    }),
    category: new FormControl('', {
      validators: [Validators.required],
    }),
    image: new FormControl('', {
      validators: [Validators.required],
    }),
    thumbnail: new FormControl('', {
      validators: [Validators.required],
    }),
    id: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  constructor(private store: Store<{ count: number; products: Product[] }>) {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    const addMyProduct = {
      title: this.form.value.title,
      price: parseInt(this.form.value.price ?? '0', 10),
      brand: this.form.value.brand,
      category: this.form.value.category,
      images: [this.form.value.image],
      thumbnail: this.form.value.thumbnail,
      id: parseInt(this.form.value.id ?? '0', 10),
    };
    this.store.dispatch(addProduct({ product: addMyProduct as Product }));
    this.form.reset();
  }

  get invalidTitle() {
    return this.form.controls.title.touched && this.form.controls.title.invalid;
  }
  get invalidPrice() {
    return this.form.controls.price.touched && this.form.controls.price.invalid;
  }

  get invalidForm() {
    return this.invalidTitle && this.invalidPrice;
  }
}
