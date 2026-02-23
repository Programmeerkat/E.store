import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})

export class ProductPage {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  product = signal<Product | null>(null);

  ngOnInit() { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getSingleProduct(id).subscribe((data: any) => {
      this.product.set(data);
    });
  }
}
