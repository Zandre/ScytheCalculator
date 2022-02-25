import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PlayerFactionModel } from '../player-faction-dialog/models/player-faction.model';
import { PlayerFactionDialogComponent } from '../player-faction-dialog/player-faction-dialog.component';
import { PlayerFactionPageActions } from '../state/actions';
import { PlayerFactionState } from '../state/player-faction.reducer';

@Component({
  selector: 'app-delete-player-dialog',
  templateUrl: './delete-player-dialog.component.html',
  styleUrls: ['./delete-player-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletePlayerDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public playerFactionId: number,
  private _dialogRef: MatDialogRef<PlayerFactionDialogComponent, PlayerFactionModel>,
  private store: Store<PlayerFactionState>) { }

  ngOnInit(): void {
  }

  deleteClicked(): void {
    this.store.dispatch(PlayerFactionPageActions.deletePlayerFaction({ playerFactionId: this.playerFactionId }));
    this._dialogRef.close();
  }

  cancelClicked(): void {
    this._dialogRef.close();
  }

}
