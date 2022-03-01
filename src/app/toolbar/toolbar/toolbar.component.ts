import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerFactionDialogComponent } from 'src/app/player-faction/player-faction-dialog/player-faction-dialog.component';
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
      width: '400px',
      data: null
    }); 
  }

}
