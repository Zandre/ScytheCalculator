import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayComponent } from './error-display.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ErrorDisplayComponent
  ],
  exports : [
    ErrorDisplayComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ErrorDisplayModule { }
