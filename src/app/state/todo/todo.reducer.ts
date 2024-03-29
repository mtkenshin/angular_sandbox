import { createReducer, on} from "@ngrx/store";
import { addToListAction, removeFromListAction } from "./todo.actions";

export interface TTodoItem {
    id: string,
    desc: string
}
export interface TTodoState {
    todoList: Array<TTodoItem>
}

export const initialTodoState:TTodoState = {
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