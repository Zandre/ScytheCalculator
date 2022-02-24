import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { playerFactionReducer } from './state/player-faction.reducer';
import { ShellComponent } from './shell/shell.component';
import { PlayerFactionEffects } from './state/player-faction.effects';
import { EffectsModule } from '@ngrx/effects';


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
    EffectsModule.forFeature([PlayerFactionEffects])
  ]
})
export class PlayerFactionModule { }
