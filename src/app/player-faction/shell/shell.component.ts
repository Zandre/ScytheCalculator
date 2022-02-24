import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerFactionState } from '../state/player-faction.reducer';

@Component({
  selector: 'player-faction-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  constructor(private store: Store<PlayerFactionState>) {

   }

  ngOnInit(): void {
  }

}
