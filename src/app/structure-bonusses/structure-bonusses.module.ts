import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { structureBonusReducer } from './state/sructure-bonus.reducer';
import { StructureBonusEffects } from './state/structure-bonus.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StructureBonusDialogModule } from './structure-bonus-dialog/structure-bonus-dialog.module.component';
import { StructureBonusCardModule } from './structure-bonus-card/structure-bonus-card.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('structureBonusType', structureBonusReducer),
    EffectsModule.forFeature([StructureBonusEffects]),
    StructureBonusDialogModule,
    StructureBonusCardModule
  ]
})
export class StructureBonussesModule { }
