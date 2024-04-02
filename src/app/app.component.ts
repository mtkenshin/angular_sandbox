import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../template/header/header.component';
import { HttpClientModule } from '@angular/common/http';

// Components & Modules
import { CounterComponent } from './components/counter/counter.component';
import { exampleRX1 } from './components/rxjs-example/rxjs-example.component';
import { TodoModule } from './components/todo/todo.module';
import { Sandbox } from './components/sandbox/sandbox.component';
import { CodingSessionModule } from './components/coding-session/coding-session.module';

import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,  HeaderComponent, CounterComponent, TodoModule, exampleRX1, Sandbox, CodingSessionModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'sandbox';
}
