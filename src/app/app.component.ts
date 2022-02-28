import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerFaction } from './player-faction/interfaces/player-faction.interface';
import { getError, getPlayerFactions } from './player-faction/state';
import { PlayerFactionPageActions } from './player-faction/state/actions';
import { PlayerFactionState } from './player-faction/state/player-faction.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ScytheCalculator';

  playerFactions$: Observable<PlayerFaction[]>;
  error$: Observable<string>;

  constructor(private store: Store<PlayerFactionState>) {
  }

  ngOnInit(): void {
    this.playerFactions$ = this.store.select(getPlayerFactions);
    this.error$ = this.store.select(getError)
    this.store.dispatch(PlayerFactionPageActions.loadPlayerFactions());
  }
}
