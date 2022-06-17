import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerFactionDialogComponent } from 'src/app/player-faction/player-faction-dialog/player-faction-dialog.component';
import { StructureBonusDialogComponent } from 'src/app/structure-bonusses/structure-bonus-dialog/structure-bonus-dialog.component';
import { ReloadDialogComponent } from '../reload-dialog/reload-dialog.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  reloadClicked(): void {
    this.dialog.open(ReloadDialogComponent, {});
  }

  addClicked(): void {
    this.dialog.open(PlayerFactionDialogComponent, {
      width: '490px',
      data: null
    });
  }

  selectStructureBonusClicked(): void {
    this.dialog.open(StructureBonusDialogComponent, { width: '350px' });
  }

  repositoryClicked(): void {
    window.open('https://github.com/Zandre/ScytheCalculator', '_blank');
  }

  aboutDeveloperClicked(): void {
    window.open('https://cvzandrebotha.azurewebsites.net/', '_blank');
  }

}
