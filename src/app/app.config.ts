import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducer';
import { productReducer } from './ngrx/reducers/product.reducer';
import { ProductEffects } from './ngrx/effects/product.effect';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'count', reducer: counterReducer }),
    provideState({ name: 'products', reducer: productReducer }),
    provideEffects(ProductEffects),
  ],
};
