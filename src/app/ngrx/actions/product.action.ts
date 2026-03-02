import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Loaded Products succesfully',
  props<{ products: any }>(),
);
