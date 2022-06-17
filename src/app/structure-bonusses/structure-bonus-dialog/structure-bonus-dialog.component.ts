import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { PlayerFactionPageActions } from 'src/app/player-faction/state/actions';
import { PlayerFactionState } from 'src/app/player-faction/state/player-faction.reducer';
import { StructureBonus } from '../interfaces/structure-bonus.interface';
import { StructureBonusPageActions } from '../state/actions';
import { StructureBonusState } from '../state/sructure-bonus.reducer';
import { StructureBonusModel } from './models/structure-bonus.model';

@Component({
  selector: 'app-structure-bonus-dialog',
  templateUrl: './structure-bonus-dialog.component.html',
  styleUrls: ['./structure-bonus-dialog.component.scss']
})
export class StructureBonusDialogComponent implements OnInit {

  structureBonusFormGroup: IFormGroup<StructureBonusModel>;
  model: StructureBonusModel;

  constructor(@Inject(MAT_DIALOG_DATA) public _model: StructureBonus,
    private readonly _rxFormBuilder: RxFormBuilder,
    private _dialogRef: MatDialogRef<StructureBonusDialogComponent, StructureBonusModel>,
    private structureBonusStore: Store<StructureBonusState>,
    private playerFactionStore: Store<PlayerFactionState>,) { }

  ngOnInit(): void {
    if(this._model) {
      this.model = StructureBonusModel.createFromType(this._model.structureBonusType);
    } else {
      this.model = StructureBonusModel.createEmpty();
    }

    this.structureBonusFormGroup = this._rxFormBuilder.formGroup(this.model) as IFormGroup<StructureBonusModel>;

    this.structureBonusFormGroup.controls.structureBonusType.valueChanges.subscribe(() => {
      this.model.setMetaData();
    });
  }

  closeDialog(): void {
    this._dialogRef.close();
  }

  saveDialog(): void {

    if(this.structureBonusFormGroup.invalid){
      this.structureBonusFormGroup.markAllAsTouched();
      return;
    }

    this.structureBonusStore.dispatch(StructureBonusPageActions.updateStructureBonus({ structureBonusType: this.structureBonusFormGroup.value.structureBonusType }));
    this.playerFactionStore.dispatch(PlayerFactionPageActions.getWinningPlayerFaction());

    this._dialogRef.close();
  }

}
