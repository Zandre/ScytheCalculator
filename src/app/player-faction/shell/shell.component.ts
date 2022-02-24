import { Component, Input } from '@angular/core';
import { PlayerFaction } from '../interfaces/player-faction.interface';

@Component({
  selector: 'player-faction-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})

export class ShellComponent {
  @Input() playerFactions: PlayerFaction[];
}
