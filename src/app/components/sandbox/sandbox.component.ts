import { Component, OnInit } from "@angular/core";
import { Observable, interval, of, reduce } from "rxjs";
import { AppState } from "../../state/app.state";
import { Store } from "@ngrx/store";
import { sandboxSelector } from '../../state/sandbox/sandbox.selector';
import { AsyncPipe } from "@angular/common";
import { sandboxDummyAction } from '../../state/sandbox/sandbox.actions';
import { map, switchMap } from "rxjs";

@Component({
    selector: 'c-sandbox',
    styleUrl: './sandbox.component.scss',
    templateUrl: './sandbox.component.html',
    imports: [AsyncPipe],
    standalone: true
})

export class Sandbox implements OnInit{
    // variable declarations
    protected _counter: number;
    protected _testDummy$: Observable<number>;

    constructor(private _store: Store<AppState>) {
        this._counter = 0;
        this._testDummy$ = _store.select(sandboxSelector);
    }
    // Getter Setters
    get counter(): number {
        return this._counter
    }

    set counter(val: number) {
        this._counter += val;
    }

    // Methods

    protected setTestDummyVal = () => {
        this._store.dispatch(sandboxDummyAction());
        
    };

    protected sendPOSTRequestToPlaceholder = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
        .then((json) => console.log(json));
    };
    
    protected sendGETRequestToPlaceholder = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
    };

    protected obs_1 = new Observable((subscriber)=> {
        subscriber.next('1');
        subscriber.complete();
    })

    protected numbersObs = of(1,2,3,4,5);

    protected dollars = this.numbersObs.pipe(
        map(x => `$${x}`)
    );
    protected dollarsTotal = this.numbersObs.pipe(
        reduce((acc, x) => acc + x),
        map(x => `$${x}`)
    )

    // Switch to a new observable every second using switchMap and interval
    protected switchMapEx =  of(1, 2, 3).pipe(
        switchMap(x => of(x, x ** 2, x ** 3))
        );


    ngOnInit(): void {

        this.obs_1.subscribe({
            next(val) {
                console.log(val);
            },
            error(err) {
                console.error(err);
            },
            complete() {
                console.log('Complete!')
            }
        });

        this.dollars.subscribe({
            next(val) {
                console.log(val);
            },
        });

        this.dollarsTotal.subscribe({
            next(val) {
                console.log(val);
            },
        })

        this.switchMapEx.subscribe({
            next(val) {
                console.log(val)
            }
        })

    }
}