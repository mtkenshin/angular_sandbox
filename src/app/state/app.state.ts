import { ICounterState } from "./counter/counter.reducer";
import { ISandbox } from "./sandbox/sandbox.reducer";
import { ITodoState } from "./todo/todo.reducer";

export interface AppState {
    counter: ICounterState
    todo: ITodoState,
    sandbox: ISandbox
}