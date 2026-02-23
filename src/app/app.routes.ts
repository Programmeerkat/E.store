import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ProductPage } from './pages/product-page/product-page';
export const routes: Routes = [
  {
    path: '',
    component: HomePage, 
  },
  {
    path: 'product',
    component: ProductPage,
  },
];
