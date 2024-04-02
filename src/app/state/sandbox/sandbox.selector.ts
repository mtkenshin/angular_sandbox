import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";


const selectorState = (state: AppState) => state.sandbox

export const sandboxSelector = createSelector(selectorState, (state) => state.testDummy);