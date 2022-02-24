import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { playerFactionReducer } from './state/player-faction.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('playerFactions', playerFactionReducer)
  ]
})
export class PlayerFactionModule { }
