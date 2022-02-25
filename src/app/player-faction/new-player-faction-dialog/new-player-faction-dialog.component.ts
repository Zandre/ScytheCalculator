import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-player-faction-dialog',
  templateUrl: './new-player-faction-dialog.component.html',
  styleUrls: ['./new-player-faction-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPlayerFactionDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
