import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { PlayerFaction } from '../interfaces/player-faction.interface';
import { PlayerFactionService } from '../services/player-faction.service';
import { PlayerFactionPageActions } from '../state/actions';
import { PlayerFactionState } from '../state/player-faction.reducer';
import { PlayerFactionModel } from './models/player-faction.model';

@Component({
  selector: 'player-faction-dialog',
  templateUrl: './player-faction-dialog.component.html',
  styleUrls: ['./player-faction-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerFactionDialogComponent implements OnInit {

  playerFactionFormGroup: IFormGroup<PlayerFactionModel>;
  model: PlayerFactionModel;

  existingPlayerFactions: PlayerFaction[] = [];

  popularityArray = Array.from({length: 18}, (_, i) => i + 1);
  victoryStarsArray = Array.from({length: 6}, (_, i) => i + 1);
  territoriesArray = Array.from({length: 30}, (_, i) => i + 1);
  resourcesArray = Array.from({length: 50}, (_, i) => i + 1);
  moneyArray = Array.from({length: 50}, (_, i) => i + 1);
  structureBonusesArray = Array.from({length: 20}, (_, i) => i + 1);
  
  constructor(@Inject(MAT_DIALOG_DATA) public _model: PlayerFaction,
  private readonly _rxFormBuilder: RxFormBuilder,
  private _dialogRef: MatDialogRef<PlayerFactionDialogComponent, PlayerFactionModel>,
  private store: Store<PlayerFactionState>,
  private playerFactionService: PlayerFactionService,
  private toastr: ToastrService) { }

  ngOnInit(): void {

    if(this._model) {
      this.model = PlayerFactionModel.createFromInput(this._model);
    } else {
      this.model = PlayerFactionModel.createEmpty();
    }

    this.playerFactionFormGroup = this._rxFormBuilder.formGroup(this.model) as IFormGroup<PlayerFactionModel>;

    this.playerFactionService.getPlayerFactions()
    .subscribe((playerFactions: PlayerFaction[]) =>
      playerFactions.map((playerFaction: PlayerFaction) => 
        this.existingPlayerFactions.push(playerFaction)
      )
    )
  }

  closeDialog(): void {
    this._dialogRef.close();
  }

  saveDialog(): void {

    if(this.playerFactionFormGroup.invalid){
      this.playerFactionFormGroup.markAllAsTouched();
      return;
    }

    if(this.playerFactionFormGroup.value.id === 0 && 
      this.existingPlayerFactions.find(p => p.playerFactionType === this.playerFactionFormGroup.value.playerFactionType)) {
        this.toastr.warning('This player faction already exists', 'Choose a different player faction');
        return;
    }

    if(this.playerFactionFormGroup.value.id !== 0 &&
      this.existingPlayerFactions.find(p => p.playerFactionType === this.playerFactionFormGroup.value.playerFactionType && p.id !== this.playerFactionFormGroup.value.id)) {
        this.toastr.warning('This player faction already exists', 'Choose a different player faction');
        return;
    } 

    if (this.playerFactionFormGroup.value.id === 0) {
      this.store.dispatch(PlayerFactionPageActions.createPlayerFaction({ playerFaction: this.playerFactionFormGroup.value }));
    } else {
      this.store.dispatch(PlayerFactionPageActions.updatePlayerFaction({ playerFaction: this.playerFactionFormGroup.value }));
    }

    this._dialogRef.close();
  }

}
