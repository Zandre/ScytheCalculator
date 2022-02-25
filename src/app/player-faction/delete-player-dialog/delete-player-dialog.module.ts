import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePlayerDialogComponent } from './delete-player-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DeletePlayerDialogComponent
  ],
  exports: [
    DeletePlayerDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class DeletePlayerDialogModule { }
