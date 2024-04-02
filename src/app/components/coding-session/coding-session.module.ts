import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { CodingSession } from './coding-session.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CodingSession],
  imports: [
    CommonModule,
    NgFor,
    FormsModule,
    AsyncPipe
  ],
  exports: [CodingSession]

})
export class CodingSessionModule { }