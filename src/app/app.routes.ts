import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ProductPage } from './pages/product-page/product-page';
import { SearchPage } from './pages/search-page/search-page';
import { AddProductTemplateDrivenComponent } from './pages/add-product-template-driven/add-product-template-driven.component';
import { AddProductReactiveComponent } from './pages/add-product-reactive/add-product-reactive.component';
import { CounterComponent } from './pages/counter/counter.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'product/:id',
    component: ProductPage,
  },
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: 'add-product-td',
    component: AddProductTemplateDrivenComponent,
  },
  {
    path: 'add-product-reactive',
    component: AddProductReactiveComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
