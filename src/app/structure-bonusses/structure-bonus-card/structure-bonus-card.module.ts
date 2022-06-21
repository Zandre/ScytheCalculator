import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureBonusCardComponent } from './structure-bonus-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StructureBonusCardComponent
  ],
  exports: [
    StructureBonusCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class StructureBonusCardModule { }
