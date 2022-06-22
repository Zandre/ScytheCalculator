import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { StructureBonusType } from "src/app/structure-bonusses/enums/structure-bonus-type.enum";
import { PlayerFaction } from "../interfaces/player-faction.interface";
import { PlayerFactionModel } from "../models/player-faction.model";
import { PlayerFactionService } from "../services/player-faction.service";
import { PlayerFactionPageActions, PlayerFactionApiActions } from "./actions";

@Injectable()
export class PlayerFactionEffects {

    constructor(private actions$: Actions,
        private playerFactionService: PlayerFactionService) {

    }

    loadPlayerFactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PlayerFactionPageActions.loadPlayerFactions),
            mergeMap(() => this.playerFactionService.getPlayerFactions().pipe(
                map(playerFactions => PlayerFactionApiActions.loadSuccess({ playerFactions })),
                catchError(error => of(PlayerFactionApiActions.loadFailure({ error })))
            ))
        );
    });

    getWinningPlayerFaction$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PlayerFactionPageActions.getWinningPlayerFaction),
            concatMap(action => this.playerFactionService.getPlayerFactions()
              .pipe(
                map(playerFactions => PlayerFactionApiActions.getWinningPlayerFactionSuccess({ playerFaction: this.getWinningPlayerFaction(playerFactions, action.structureBonusType) })),
                catchError(error => of(PlayerFactionApiActions.getWinningPlayerFactionFailure({ error })))
              )
            )
        );
    });

    private getWinningPlayerFaction(playerFactions: PlayerFaction[], structureBonusType: StructureBonusType): PlayerFaction {

        if(playerFactions.length < 2) {
            return null
        }

        let sortedPlayerFactions: PlayerFaction[] = playerFactions
            .map(pf => PlayerFactionModel.create(pf, structureBonusType))
            .sort((a, b) => {
                return b.TOTAL - a.TOTAL
            })

        // code doesn't cater for a draw
        return sortedPlayerFactions[0];
    }

    updatePlayerFactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PlayerFactionPageActions.updatePlayerFaction),
            concatMap(action => this.playerFactionService.updatePlayerFaction(action.playerFaction)
                .pipe(
                    map(playerFaction => PlayerFactionApiActions.updateSuccess({ playerFaction: playerFaction, structureBonusType: action.structureBonusType })),
                    catchError(error => of(PlayerFactionApiActions.updateFailure({ error })))
                )
            )
        );
    });

    createPlayerFactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PlayerFactionPageActions.createPlayerFaction),
            concatMap(action => this.playerFactionService.createPlayerFaction(action.playerFaction)
                .pipe(
                    map(playerFaction => PlayerFactionApiActions.createSuccess({ playerFaction: playerFaction, structureBonusType: action.structureBonusType })),
                    catchError(error => of(PlayerFactionApiActions.createFailure({ error })))
                )
            )
        );
    });

    deletePlayerFactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PlayerFactionPageActions.deletePlayerFaction),
            concatMap(action => this.playerFactionService.deletePlayerFaction(action.playerFactionId)
                .pipe(
                    map(() => PlayerFactionApiActions.deleteSuccess({ playerFactionId: action.playerFactionId })),
                    catchError(error => of(PlayerFactionApiActions.deleteFailure({ error })))
                )
            )
        );
    });

    deleteAllPlayerFactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PlayerFactionPageActions.resetDatabase),
            concatMap(() => this.playerFactionService.resetDatabase()
                .pipe(
                    map(() => PlayerFactionApiActions.resetDatabaseSuccess()),
                    catchError(error => of(PlayerFactionApiActions.resetDatabaseFailure({ error })))
                )
            )
        );
    });
}
