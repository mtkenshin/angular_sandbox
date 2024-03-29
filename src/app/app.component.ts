import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../template/header/header.component';
import { HttpClientModule } from '@angular/common/http';

import { CounterComponent } from './components/counter/counter.component';
import { TodoModule } from './components/todo/todo.module';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,  HeaderComponent, CounterComponent, TodoModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'sandbox';
}
