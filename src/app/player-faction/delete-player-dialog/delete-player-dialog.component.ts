import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { StructureBonus } from 'src/app/structure-bonusses/interfaces/structure-bonus.interface';
import { StructureBonusService } from 'src/app/structure-bonusses/services/structure-bonus.service';
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
  private _dialogRef: MatDialogRef<DeletePlayerDialogComponent, null>,
  private store: Store<PlayerFactionState>,
  private structureBonusService: StructureBonusService) { }

  ngOnInit(): void {
  }

  deleteClicked(): void {
    this.store.dispatch(PlayerFactionPageActions.deletePlayerFaction({ playerFactionId: this.playerFactionId }));
    this.structureBonusService.getStructureBonus().subscribe((structureBonus: StructureBonus) => {
      this.store.dispatch(PlayerFactionPageActions.getWinningPlayerFaction({structureBonusType: structureBonus.structureBonusType}));
    });
    this._dialogRef.close();
  }

  cancelClicked(): void {
    this._dialogRef.close();
  }

}
