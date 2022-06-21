import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { PlayerFaction } from 'src/app/player-faction/interfaces/player-faction.interface';
import { PlayerFactionService } from 'src/app/player-faction/services/player-faction.service';
import { PlayerFactionState } from 'src/app/player-faction/state/player-faction.reducer';
import { StructureBonusType } from '../enums/structure-bonus-type.enum';
import { StructureBonus } from '../interfaces/structure-bonus.interface';
import { StructureBonusService } from '../services/structure-bonus.service';
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

  private existingPlayerFactions: PlayerFaction[] = [];
  private existingStructureBonusType: StructureBonusType;

  constructor(@Inject(MAT_DIALOG_DATA) public _model: StructureBonus,
    private readonly _rxFormBuilder: RxFormBuilder,
    private _dialogRef: MatDialogRef<StructureBonusDialogComponent, StructureBonusModel>,
    private toastr: ToastrService,
    private structureBonusStore: Store<StructureBonusState>,
    private playerFactionStore: Store<PlayerFactionState>,
    private playerFactionService: PlayerFactionService,
    private structureBonusService: StructureBonusService) { }

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

    this.playerFactionService.getPlayerFactions()
    .subscribe((playerFactions: PlayerFaction[]) =>
      playerFactions.map((playerFaction: PlayerFaction) =>
        this.existingPlayerFactions.push(playerFaction)
      )
    )

    this.structureBonusService.getStructureBonus()
    .subscribe((structureBonus: StructureBonus) => {
      this.existingStructureBonusType = structureBonus.structureBonusType;
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

    if(this.existingPlayerFactions.length > 0 &&
      this.structureBonusFormGroup.value.structureBonusType !== this.existingStructureBonusType) {
        this.toastr.warning('The structure bonus type cannot be changed if there are already existing player factions. To start over, press "Reload" on the toolbar menu', 'Interaction not allowed');
        return;
      }

    this.structureBonusStore.dispatch(StructureBonusPageActions.updateStructureBonus({ structureBonusType: this.structureBonusFormGroup.value.structureBonusType }));
    this._dialogRef.close();
  }

}
