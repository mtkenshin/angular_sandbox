import { createAction } from "@ngrx/store";

export const addToListAction = createAction('[Todo Component] Add', item => {
    return {
        payload: item
    }
});

export const removeFromListAction = createAction('[Todo Component] Remove', id => {
    return {
        payload: id
    }
})