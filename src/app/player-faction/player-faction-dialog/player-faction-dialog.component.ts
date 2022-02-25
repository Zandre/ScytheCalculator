import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'player-faction-dialog',
  templateUrl: './player-faction-dialog.component.html',
  styleUrls: ['./player-faction-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPlayerFactionDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
