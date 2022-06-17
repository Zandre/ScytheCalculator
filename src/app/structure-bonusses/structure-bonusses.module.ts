import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureBonusDialogComponent } from './structure-bonus-dialog/structure-bonus-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FlexLayoutModule } from '@angular/flex-layout';
import { structureBonusReducer } from './state/sructure-bonus.reducer';
import { StructureBonusEffects } from './state/structure-bonus.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    StructureBonusDialogComponent
  ],
  exports: [
    StructureBonusDialogComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('structureBonusType', structureBonusReducer),
    EffectsModule.forFeature([StructureBonusEffects]),
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
export class StructureBonussesModule { }
