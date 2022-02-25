import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PlayerFaction } from 'src/app/player-faction/interfaces/player-faction.interface';
import { PlayerFactionService } from 'src/app/player-faction/services/player-faction.service';
import { PlayerFactionPageActions } from 'src/app/player-faction/state/actions';
import { PlayerFactionState } from 'src/app/player-faction/state/player-faction.reducer';

@Component({
  selector: 'app-reload-dialog',
  templateUrl: './reload-dialog.component.html',
  styleUrls: ['./reload-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReloadDialogComponent implements OnInit {

  constructor(private playerFactionService: PlayerFactionService,
    private _dialogRef: MatDialogRef<ReloadDialogComponent, null>,
    private store: Store<PlayerFactionState>) {
   }

  ngOnInit(): void {

  }

  reloadClicked(): void {

    // This could be more elegant?

    this.playerFactionService.getPlayerFactions()
      .subscribe((playerFactions: PlayerFaction[]) =>
        playerFactions.map((playerFaction: PlayerFaction) => 
          this.store.dispatch(PlayerFactionPageActions.deletePlayerFaction({ playerFactionId: playerFaction.id })
          )
        )
      )

    this._dialogRef.close();
  }

  cancelClicked(): void {
    this._dialogRef.close();
  }

}
