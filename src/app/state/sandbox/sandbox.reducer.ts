import { createReducer, on } from "@ngrx/store";
import { sandboxDummyAction } from "./sandbox.actions";
export interface ISandbox {
    testDummy: number
}

export const _initialState: ISandbox = {
    testDummy: 0
}

export const sandboxReducer = createReducer(
    _initialState,
    on(sandboxDummyAction, state => ({...state, testDummy: state.testDummy + 1}))
)