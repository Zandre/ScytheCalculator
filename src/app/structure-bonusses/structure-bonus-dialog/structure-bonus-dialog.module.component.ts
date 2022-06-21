import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureBonusDialogComponent } from './structure-bonus-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class StructureBonusDialogModule { }
