import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PlayerFactionDialogComponent } from 'src/app/player-faction/player-faction-dialog/player-faction-dialog.component';
import { StructureBonusType } from 'src/app/structure-bonusses/enums/structure-bonus-type.enum';
import { StructureBonus } from 'src/app/structure-bonusses/interfaces/structure-bonus.interface';
import { StructureBonusMetaDataModel } from 'src/app/structure-bonusses/models/structure-bonus-metadata.model';
import { getStructureBonus } from 'src/app/structure-bonusses/state';
import { StructureBonusState } from 'src/app/structure-bonusses/state/sructure-bonus.reducer';
import { StructureBonusDialogComponent } from 'src/app/structure-bonusses/structure-bonus-dialog/structure-bonus-dialog.component';
import { ReloadDialogComponent } from '../reload-dialog/reload-dialog.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  structureBonus$: Observable<StructureBonusType>;
  metaData: StructureBonusMetaDataModel;
  private structureBonusType: StructureBonusType;

  constructor(public dialog: MatDialog,
    private toastr: ToastrService,
    private structureBonusStore: Store<StructureBonusState>) { }

  ngOnInit(): void {
    this.structureBonus$ = this.structureBonusStore.select(getStructureBonus);
    this.structureBonus$.subscribe((type: StructureBonusType) => {
      this.metaData = StructureBonusMetaDataModel.createFromType(type);
      this.structureBonusType = type;
    });
  }

  reloadClicked(): void {
    this.dialog.open(ReloadDialogComponent, {});
  }

  addClicked(): void {

    if (!this.structureBonusType) {
      this.toastr.warning('Please choose a structure bonus type before adding player factions', 'Structure Bonus type not set');
      return;
    }

    this.dialog.open(PlayerFactionDialogComponent, {
      width: '490px',
      data: null
    });
  }

  selectStructureBonusClicked(): void {
    if(!this.structureBonusType) {
      this.dialog.open(StructureBonusDialogComponent, { width: '350px' });
    } else {
      this.dialog.open(StructureBonusDialogComponent,
        {
          width: '350px',
          data: {id: 0, structureBonusType: this.structureBonusType} as StructureBonus
        });
    }
  }

  repositoryClicked(): void {
    window.open('https://github.com/Zandre/ScytheCalculator', '_blank');
  }

  aboutDeveloperClicked(): void {
    window.open('https://cvzandrebotha.azurewebsites.net/', '_blank');
  }

}
