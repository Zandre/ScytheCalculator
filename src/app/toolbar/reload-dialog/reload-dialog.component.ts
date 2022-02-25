import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PlayerFactionPageActions } from 'src/app/player-faction/state/actions';
import { PlayerFactionState } from 'src/app/player-faction/state/player-faction.reducer';

@Component({
  selector: 'app-reload-dialog',
  templateUrl: './reload-dialog.component.html',
  styleUrls: ['./reload-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReloadDialogComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<ReloadDialogComponent, null>,
  private store: Store<PlayerFactionState>) { }

  ngOnInit(): void {
  }

  reloadClicked(): void {
    this.store.dispatch(PlayerFactionPageActions.deleteAllPlayerFactions());
    this._dialogRef.close();
  }

  cancelClicked(): void {
    this._dialogRef.close();
  }

}
