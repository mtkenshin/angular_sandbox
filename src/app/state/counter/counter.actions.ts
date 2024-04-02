import { createAction, props } from '@ngrx/store';

export const incrementCounterAction = createAction('[Counter Component] Increment');
export const decrementCounterAction = createAction('[Counter Component] Decrement');
export const resetCounterAction = createAction('[Counter Component] Reset');