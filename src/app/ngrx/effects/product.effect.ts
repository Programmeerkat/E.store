import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../services/product-service';
import { loadProducts, loadProductsSuccess } from '../actions/product.action';

@Injectable()
export class ProductEffects {
  private productService = inject(ProductService);
  private actions$ = inject(Actions);

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => {
            return loadProductsSuccess({ products });
          }),
        ),
      ),
    );
  });
}
