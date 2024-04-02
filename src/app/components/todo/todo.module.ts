import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    NgFor,
    FormsModule,
    AsyncPipe
  ],
  exports: [TodoComponent]

})
export class TodoModule { }