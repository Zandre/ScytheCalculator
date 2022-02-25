import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerFactionDialogComponent } from '../player-faction-dialog/player-faction-dialog.component';

@Component({
  selector: 'new-player-faction-card',
  templateUrl: './new-player-faction-card.component.html',
  styleUrls: ['./new-player-faction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPlayerFactionCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewPlayerFaction(): void {
     this.dialog.open(PlayerFactionDialogComponent, {
      width: '400px',
      data: null
    });
  }
}
