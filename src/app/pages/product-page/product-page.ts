import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  product = signal<Product | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getSingleProduct(id).subscribe((product) => {
      this.product.set(product);
    });
  }
}
