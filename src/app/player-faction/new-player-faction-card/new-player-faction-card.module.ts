import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPlayerFactionCardComponent } from './new-player-faction-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NewPlayerFactionCardComponent
  ],
  exports: [
    NewPlayerFactionCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class NewPlayerFactionCardModule { }
