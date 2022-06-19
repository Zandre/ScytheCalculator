import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PlayerFactionPageActions } from 'src/app/player-faction/state/actions';
import { PlayerFactionState } from 'src/app/player-faction/state/player-faction.reducer';
import { StructureBonusPageActions } from 'src/app/structure-bonusses/state/actions';
import { StructureBonusState } from 'src/app/structure-bonusses/state/sructure-bonus.reducer';

@Component({
  selector: 'app-reload-dialog',
  templateUrl: './reload-dialog.component.html',
  styleUrls: ['./reload-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReloadDialogComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<ReloadDialogComponent, null>,
    private playerFactionStore: Store<PlayerFactionState>,
    private structureBonusStore: Store<StructureBonusState>) {
   }

  ngOnInit(): void {

  }

  reloadClicked(): void {
    this.playerFactionStore.dispatch(PlayerFactionPageActions.resetDatabase());
    this.structureBonusStore.dispatch(StructureBonusPageActions.updateStructureBonus({ structureBonusType: 0 }));
    this.playerFactionStore.dispatch(PlayerFactionPageActions.getWinningPlayerFaction());
    this._dialogRef.close();
  }

  cancelClicked(): void {
    this._dialogRef.close();
  }

}
