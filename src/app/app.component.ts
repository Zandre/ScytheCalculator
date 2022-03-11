import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerFactionModel } from './player-faction/models/player-faction.model';
import { getError, getPlayerFactions, getWinningPlayerFaction } from './player-faction/state';
import { PlayerFactionPageActions } from './player-faction/state/actions';
import { PlayerFactionState } from './player-faction/state/player-faction.reducer';
import { ValidationService } from './shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ScytheCalculator';

  playerFactions$: Observable<PlayerFactionModel[]>;
  winningPlayerFaction$:  Observable<PlayerFactionModel>;
  error$: Observable<string>;

  constructor(
    private validationService: ValidationService,
    private store: Store<PlayerFactionState>) {
  }

  ngOnInit(): void {
    this.validationService.setDefaultValidationMessages();

    this.playerFactions$ = this.store.select(getPlayerFactions);
    this.winningPlayerFaction$ = this.store.select(getWinningPlayerFaction);
    this.error$ = this.store.select(getError)
    this.store.dispatch(PlayerFactionPageActions.loadPlayerFactions());
  }
}
