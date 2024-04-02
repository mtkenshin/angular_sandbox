import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { todoReducer } from './state/todo/todo.reducer';
import { sandboxReducer } from './state/sandbox/sandbox.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(),
    provideState(
      { name: 'counter', reducer: counterReducer}
    ),
    provideState(
      { name: 'todo', reducer: todoReducer}
    ),
    provideState(
      { name: 'sandbox', reducer: sandboxReducer}
    ),
  ]
};
