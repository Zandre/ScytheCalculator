import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureBonusDialogComponent } from './structure-bonus-dialog/structure-bonus-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    StructureBonusDialogComponent
  ],
  exports: [
    StructureBonusDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class StructureBonussesModule { }
