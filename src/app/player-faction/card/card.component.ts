import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePlayerDialogComponent } from '../delete-player-dialog/delete-player-dialog.component';
import { PlayerFactionType } from '../enums/player-faction-type.enum';
import { PlayerFaction } from '../interfaces/player-faction.interface';
import { PlayerFactionDialogComponent } from '../player-faction-dialog/player-faction-dialog.component';
import { PlayerFactionModel } from '../models/player-faction.model';

@Component({
  selector: 'faction-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() playerFaction: PlayerFactionModel;
  @Input() winningPlayerFaction: PlayerFactionModel | null;

  model: PlayerFactionModel;

  readonly polaniaFaction = PlayerFactionType.Polania;
  readonly saxonyFaction = PlayerFactionType.Saxony;
  readonly crimeaFaction = PlayerFactionType.Crimea;
  readonly nordicFaction = PlayerFactionType.Nordic;
  readonly rusvietFaction = PlayerFactionType.Rusviet;
  readonly albionFaction = PlayerFactionType.Albion;
  readonly togawaFaction = PlayerFactionType.Togawa;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  editClicked(playerFaction: PlayerFaction): void {
    this.dialog.open(PlayerFactionDialogComponent, {
      width: '400px',
      data: playerFaction
    });
  }

  deleteClicked(playerFaction: PlayerFaction): void {
    this.dialog.open(DeletePlayerDialogComponent, {
      data: playerFaction.id
    });
  }

}
