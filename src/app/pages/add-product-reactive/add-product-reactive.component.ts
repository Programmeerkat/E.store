import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

function mustContainProduct(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  if (control.value.includes('product')) {
    return null;
  }
  return { doesNotContainProduct: true };
}

@Component({
  selector: 'app-add-product-reactive',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-product-reactive.component.html',
  styleUrl: './add-product-reactive.component.css',
})
export class AddProductReactiveComponent {
  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3), mustContainProduct],
    }),
    price: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value.name);
    console.log(this.form.value.price);

    this.form.reset();
  }

  get invalidName() {
    return this.form.controls.name.touched && this.form.controls.name.invalid;
  }
  get invalidPrice() {
    return this.form.controls.price.touched && this.form.controls.price.invalid;
  }

  get invalidForm() {
    return this.invalidName && this.invalidPrice;
  }
}
