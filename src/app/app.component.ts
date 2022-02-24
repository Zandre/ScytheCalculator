import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerFactionInterface } from './player-faction/interfaces/player-faction.interface';
import { getPlayerFactions } from './player-faction/state';
import { PlayerFactionPageActions } from './player-faction/state/actions';
import { PlayerFactionState } from './player-faction/state/player-faction.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ScytheCalculator';

  playerFactions$: Observable<PlayerFactionInterface[]>;

  constructor(private store: Store<PlayerFactionState>) {
  }

  ngOnInit(): void {
    this.playerFactions$ = this.store.select(getPlayerFactions);
    this.store.dispatch(PlayerFactionPageActions.loadPlayerFactions());
  }
}
