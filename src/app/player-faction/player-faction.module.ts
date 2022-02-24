import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { playerFactionReducer } from './state/player-faction.reducer';
import { ShellComponent } from './shell/shell.component';
import { PlayerFactionEffects } from './state/player-faction.effects';
import { EffectsModule } from '@ngrx/effects';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('playerFactions', playerFactionReducer),
    EffectsModule.forFeature([PlayerFactionEffects]),
    CardModule
  ]
})
export class PlayerFactionModule { }
