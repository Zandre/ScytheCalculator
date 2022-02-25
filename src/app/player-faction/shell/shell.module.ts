import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from '../card/card.module';
import { NewPlayerFactionCardModule } from '../new-player-faction-card/new-player-faction-card.module';

@NgModule({
  declarations: [
    ShellComponent,
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FlexLayoutModule,
    NewPlayerFactionCardModule,
  ]
})
export class ShellModule { }
