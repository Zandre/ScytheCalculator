import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { playerFactionReducer } from './state/player-faction.reducer';
import { PlayerFactionEffects } from './state/player-faction.effects';
import { EffectsModule } from '@ngrx/effects';
import { PlayerFactionDialogModule } from './player-faction-dialog/player-faction-dialog.module';

@NgModule({

  imports: [
    CommonModule,
    StoreModule.forFeature('playerFactions', playerFactionReducer),
    EffectsModule.forFeature([PlayerFactionEffects]),
    PlayerFactionDialogModule
  ]
})
export class PlayerFactionModule { }
