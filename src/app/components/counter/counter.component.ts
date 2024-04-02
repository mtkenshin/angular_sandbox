import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectCount } from '../../state/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from '../../state/counter/counter.actions';
@Component({
  selector: 'counter-comp',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  imports: [AsyncPipe],
  standalone: true,
})
export class CounterComponent {
  count$: Observable<number>;

  constructor (private store: Store<AppState>) {
    this.count$ = store.select(selectCount)
  }

  protected increment = () => {
    this.store.dispatch(incrementCounterAction());
  }
  protected decrement = () => {
    this.store.dispatch(decrementCounterAction());
  }
  protected reset = () => {
    this.store.dispatch(resetCounterAction());
  }
}
