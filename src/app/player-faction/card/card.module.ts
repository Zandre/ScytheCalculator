import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    FlexLayoutModule
  ]
})
export class CardModule { }
