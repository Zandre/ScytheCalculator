import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { PlayerFaction } from '../interfaces/player-faction.interface';
import { PlayerFactionModel } from './models/player-faction.model';

@Component({
  selector: 'player-faction-dialog',
  templateUrl: './player-faction-dialog.component.html',
  styleUrls: ['./player-faction-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerFactionDialogComponent implements OnInit {

  playerFactionFormGroup: IFormGroup<PlayerFactionModel>;
  popularityArray = Array.from({length: 18}, (_, i) => i + 1);
  victoryStarsArray = Array.from({length: 6}, (_, i) => i + 1);
  territoriesArray = Array.from({length: 30}, (_, i) => i + 1);
  resourcesArray = Array.from({length: 50}, (_, i) => i + 1);
  moneyArray = Array.from({length: 50}, (_, i) => i + 1);
  structureBonusesArray = Array.from({length: 20}, (_, i) => i + 1);
  
  constructor(@Inject(MAT_DIALOG_DATA) public _model: PlayerFaction,
  private readonly _rxFormBuilder: RxFormBuilder,
  private _dialogRef: MatDialogRef<PlayerFactionDialogComponent, PlayerFactionModel>) { }

  ngOnInit(): void {
    this.playerFactionFormGroup = this._rxFormBuilder.formGroup(PlayerFactionModel) as IFormGroup<PlayerFactionModel>;
  }

  closeDialog(): void {
    console.log("Close clicked");
    this._dialogRef.close();
  }

  saveDialog(): void {
    console.log("Save clicked");
    this._dialogRef.close();
  }

}
