import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StructureBonusDialogComponent } from '../structure-bonus-dialog/structure-bonus-dialog.component';

@Component({
  selector: 'structure-bonus-card',
  templateUrl: './structure-bonus-card.component.html',
  styleUrls: ['./structure-bonus-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureBonusCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  selectStructureBonusClicked(): void {
    this.dialog.open(StructureBonusDialogComponent, { width: '350px' });
  }

}
