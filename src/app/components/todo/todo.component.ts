import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectTodoList } from "../../state/todo/todo.selector";
import { AppState } from "../../state/app.state";

import { addToListAction, removeFromListAction } from "../../state/todo/todo.actions";
import { ITodoItem } from "../../state/todo/todo.reducer";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'todo-comp',
    styleUrl: './todo.component.scss',
    templateUrl: './todo.component.html'
})

export class TodoComponent {
    protected userInput;
    protected todo$: Observable<Array<ITodoItem>>
    constructor(private store: Store<AppState>) {
        this.userInput = '';
        this.todo$ = store.select(selectTodoList);
        this.todo$.subscribe({
            next: (items) => {
              console.log('Items emitted by the observable:', items);
            },
            error: (error) => {
              console.error('Error occurred:', error);
            },
            complete: () => {
              console.log('Observable completed');
            },
        });
    }

    protected addToList = () => {
        const sendPayload:ITodoItem = {
            id: uuidv4(),
            desc: this.userInput
        }
        this.store.dispatch(addToListAction(sendPayload))
    }
    protected removeItemFromList = (id: string) => {
        this.store.dispatch(removeFromListAction(id));
    }
}