import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StructureBonusType } from 'src/app/structure-bonusses/enums/structure-bonus-type.enum';
import { getStructureBonus } from 'src/app/structure-bonusses/state';
import { StructureBonusState } from 'src/app/structure-bonusses/state/sructure-bonus.reducer';
import { PlayerFactionDialogComponent } from '../player-faction-dialog/player-faction-dialog.component';

@Component({
  selector: 'new-player-faction-card',
  templateUrl: './new-player-faction-card.component.html',
  styleUrls: ['./new-player-faction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPlayerFactionCardComponent implements OnInit {

  structureBonus$: Observable<StructureBonusType>;
  private structureBonusType: StructureBonusType;

  constructor(public dialog: MatDialog,
    private toastr: ToastrService,
    private structureBonusStore: Store<StructureBonusState>) { }

  ngOnInit(): void {
    this.structureBonus$ = this.structureBonusStore.select(getStructureBonus);
    this.structureBonus$.subscribe((type: StructureBonusType) => {
      this.structureBonusType = type;
    });
  }

  addNewPlayerFaction(): void {

    if (!this.structureBonusType) {
      this.toastr.warning('Please choose a structure bonus type before adding player factions', 'Structure Bonus type not set');
      return;
    }

     this.dialog.open(PlayerFactionDialogComponent, {
      width: '490px',
      data: null
    });
  }
}
