import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerFactionModel } from './player-faction/models/player-faction.model';
import { getError, getPlayerFactions, getWinningPlayerFaction } from './player-faction/state';
import { PlayerFactionPageActions } from './player-faction/state/actions';
import { PlayerFactionState } from './player-faction/state/player-faction.reducer';
import { ValidationService } from './shared/services/validation.service';
import { StructureBonusType } from './structure-bonusses/enums/structure-bonus-type.enum';
import { getStructureBonus } from './structure-bonusses/state';
import { StructureBonusPageActions } from './structure-bonusses/state/actions';
import { StructureBonusState } from './structure-bonusses/state/sructure-bonus.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ScytheCalculator';

  playerFactions$: Observable<PlayerFactionModel[]>;
  structureBonus$: Observable<StructureBonusType>;
  winningPlayerFaction$:  Observable<PlayerFactionModel>;
  error$: Observable<string>;

  constructor(
    private validationService: ValidationService,
    private playerFactionStore: Store<PlayerFactionState>,
    private structureBonusStore: Store<StructureBonusState>) {
  }

  ngOnInit(): void {
    this.validationService.setDefaultValidationMessages();

    this.playerFactions$ = this.playerFactionStore.select(getPlayerFactions);
    this.winningPlayerFaction$ = this.playerFactionStore.select(getWinningPlayerFaction);
    this.error$ = this.playerFactionStore.select(getError)
    this.structureBonus$ = this.structureBonusStore.select(getStructureBonus);

    this.playerFactionStore.dispatch(PlayerFactionPageActions.loadPlayerFactions());
    this.structureBonusStore.dispatch(StructureBonusPageActions.getStructureBonus());
  }
}
