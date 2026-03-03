import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  deleteProduct,
  editProduct,
  loadProductsSuccess,
} from '../actions/product.action';
import { Product } from '../../types';

export let initialProductState: Product[] = [];

export const productReducer = createReducer(
  initialProductState,
  on(loadProductsSuccess, (_, { products }) => products),
  on(addProduct, (state, props) => [...state, props.product]),
  on(deleteProduct, (state, { id }) => {
    const myDeletedProductIndex = state.findIndex((state) => state.id == id);
    const myNewState = [...state];
    myNewState.splice(myDeletedProductIndex, 1);
    return myNewState;
  }),
  // on(editProduct, (state, { product }) => {
  //   // loop through my state to look for the id. and grab the index in the array
  //   // I splice array index,1
  //   // then push the new product
  //   // return the array without the editedProduct
  //   return state;
  // }),
);
