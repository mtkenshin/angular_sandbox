import { TCounterState } from "./counter/counter.reducer";
import { TTodoState } from "./todo/todo.reducer";

export interface AppState {
    counter: TCounterState
    todo: TTodoState
}