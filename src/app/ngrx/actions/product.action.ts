import { createAction, props } from '@ngrx/store';
import { Product } from '../../types';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Loaded Products succesfully',
  props<{ products: Product[] }>(),
);
export const addProduct = createAction('[Products] add a product', props<{ product: Product }>());
export const deleteProduct = createAction(
  '[Products] deletes a product',
  props<{ id: Number | undefined }>(),
);
export const editProduct = createAction(
  '[Products] edits a product',
  props<{ product: Product }>(),
);
