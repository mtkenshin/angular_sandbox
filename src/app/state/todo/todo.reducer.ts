import { createReducer, on} from "@ngrx/store";
import { addToListAction, removeFromListAction } from "./todo.actions";

export interface ITodoItem {
    id: string,
    desc: string
}
export interface ITodoState {
    todoList: Array<ITodoItem>
}

export const initialTodoState:ITodoState = {
    todoList: []
}

export const todoReducer = createReducer(
    initialTodoState, 
    on(
        addToListAction,  
        (state, { payload }) => ({
            ...state,
            todoList: [...state.todoList, payload]
        })
    ),
    on(
        removeFromListAction,
        (state, { payload }) => ({
            ...state,
            todoList: state.todoList.filter(x => x.id !== payload)
        })
    )
);