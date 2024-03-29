import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectTodoState = (state: AppState) => state.todo;

export const selectTodoList = createSelector(
    selectTodoState, 
    (state) => state.todoList
);