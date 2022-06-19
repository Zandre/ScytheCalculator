import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StructureBonusType } from '../enums/structure-bonus-type.enum';
import { StructureBonusMetaDataModel } from '../models/structure-bonus-metadata.model';
import { getStructureBonus } from '../state';
import { StructureBonusState } from '../state/sructure-bonus.reducer';
import { StructureBonusDialogComponent } from '../structure-bonus-dialog/structure-bonus-dialog.component';

@Component({
  selector: 'structure-bonus-card',
  templateUrl: './structure-bonus-card.component.html',
  styleUrls: ['./structure-bonus-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureBonusCardComponent implements OnInit {

  structureBonus$: Observable<StructureBonusType>;
  metaData: StructureBonusMetaDataModel;

  constructor(public dialog: MatDialog,
    private structureBonusStore: Store<StructureBonusState>) { }

  ngOnInit(): void {
    this.structureBonus$ = this.structureBonusStore.select(getStructureBonus);
    this.structureBonus$.subscribe((type: StructureBonusType) => {
      this.metaData = StructureBonusMetaDataModel.createFromType(type);
    })
  }

  selectStructureBonusClicked(): void {
    this.dialog.open(StructureBonusDialogComponent, { width: '350px' });
  }

}
