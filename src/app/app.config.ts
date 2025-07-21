import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { AssociateEffect } from './store/Associate/Associate.effect';
import { AssociateReducer } from './store/Associate/Associate.reducer';
import { AppEffects } from './store/common/App.effect';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({ associate: AssociateReducer }), provideEffects([AssociateEffect, AppEffects]), provideStoreDevtools(), provideAnimationsAsync(), provideHttpClient()]
};
