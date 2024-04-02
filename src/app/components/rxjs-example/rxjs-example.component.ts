import { Component, OnInit } from "@angular/core";
import { Observable, interval, timer, fromEvent, of, from} from "rxjs";
import { filter, map, reduce, tap } from "rxjs/operators";
@Component({
    selector: 'rx-1',
    templateUrl: './rxjs-example.component.html',
    styleUrl: './rxjs-example.component.scss',
    imports: [],
    standalone: true,
})
export class exampleRX1 implements OnInit{
    
    protected _secondsTimelapse:number;


    constructor(){
        this._secondsTimelapse = 0;
    }
    /**
     * OBSERVABLES
     * */ 

    // #region Creation Operators
    private _intervalObs = interval(1000).subscribe({
        next: (value: number) => {
            this._secondsTimelapse = value;
        },
    });;
    private _timerObs = timer(0, 1000).subscribe({
        next: (val) => {
            // console.log('_timerObs', val);
        }
    });
    private _eventObs = fromEvent(document, 'click').subscribe({
        next: (val) => {
            console.log('_eventObs', val);
        }
    });;
    private _eventObs2 = fromEvent(document, 'keydown');
    private _ofObs = of(1,2,3,4,5);
    private _fromObs = from(
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json)) 
    );
    //#endregion

    // #region Pipeable Operators

    // Map Operator
    private _numbersWithSymbol = this._ofObs.pipe(
        map(value => `$${value}`)
    ).subscribe({
        next(val){
            console.log(val)
        }
    })
    // Filter Operator
    private _filterGreaterThan2 = this._ofObs.pipe(
        filter(x => x > 2), // Filters number greater than 2
        map(x => `$${x}`) // then adds a dollar sign
    ).subscribe({
        next(val){
            console.log(val)
        }
    });

    // Reduce Operator
    private _reduceOp = this._ofObs.pipe(
        filter(x => x < 3),
        reduce((acc, val) => acc + val, 0),
        map(x => `$${x}`)
    ).subscribe({
        next(val){
            console.log(val)
        }
    })

    private _tapOp = this._ofObs.pipe(
        tap({
            next(val) {
                console.log("tap", val)
            }
        })
    ).subscribe({
        next(val){
            console.log(val)
        }
    })


    // #endregion
    ngOnInit(): void {

        const ofSub = this._ofObs.subscribe({
            next: (val) => {
                console.log('ofSub', val);
            }
        });

        const fromSub = this._fromObs.subscribe({
            next(val) {
                console.log('fromSub', val);
            } 
        });
        
    }

}