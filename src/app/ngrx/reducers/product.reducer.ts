import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess } from '../actions/product.action';

export const initialProductState = {};

export const productReducer = createReducer(
  initialProductState,
  on(loadProductsSuccess, (_, { products }) => products),
);
