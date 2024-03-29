import { createReducer, on } from "@ngrx/store";
import {incrementCounterAction, decrementCounterAction, resetCounterAction} from './counter.actions' 

export interface TCounterState {
    count: number;
}

//Created initial state for store
export const initialCounterState: TCounterState = {
    count: 0
}

export const counterReducer = createReducer(
    initialCounterState, 
    on(incrementCounterAction, state => ({...state, count: state.count + 1})),
    on(decrementCounterAction, state => ({...state, count: state.count - 1})),
    on(resetCounterAction, state => initialCounterState)
)