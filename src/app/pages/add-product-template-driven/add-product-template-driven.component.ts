import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-product-template-driven',
  imports: [FormsModule, RouterModule],
  templateUrl: './add-product-template-driven.component.html',
  styleUrl: './add-product-template-driven.component.css',
})
export class AddProductTemplateDrivenComponent {
  submitForm(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    console.log(formData.form);
    console.log(formData.form.value);

    formData.form.reset();
  }
}
