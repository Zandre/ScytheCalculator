import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'new-player-faction-card',
  templateUrl: './new-player-faction-card.component.html',
  styleUrls: ['./new-player-faction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPlayerFactionCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addNewPlayerFaction(): void {
    console.log('Add new player clicked');
  }
}
