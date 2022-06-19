import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of, concatMap } from "rxjs";
import { StructureBonusService } from "../services/structure-bonus.service";
import { StructureBonusApiActions, StructureBonusPageActions } from "./actions";

@Injectable()
export class StructureBonusEffects {

    constructor(private actions$: Actions,
        private structureBonusService: StructureBonusService) { }

    getStructureBonus$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StructureBonusPageActions.getStructureBonus),
            mergeMap(() => this.structureBonusService.getStructureBonus().pipe(
                map(structureBonus => StructureBonusApiActions.loadSuccess({ structureBonus })),
                catchError(error => of(StructureBonusApiActions.loadFailure({ error })))
            ))
        );
    });

    updatePlayerFactions$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(StructureBonusPageActions.updateStructureBonus),
          concatMap(action => this.structureBonusService.updateStructureBonus(action.structureBonusType)
              .pipe(
                  map(structureBonusType => StructureBonusApiActions.updateSuccess({ structureBonusType })),
                  catchError(error => of(StructureBonusApiActions.updateFailure({ error })))
              )
          )
      );
    });
  }
