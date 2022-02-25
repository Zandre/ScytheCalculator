import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
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

    updatePlayerFactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PlayerFactionPageActions.updatePlayerFaction),
            concatMap(action => this.playerFactionService.updatePlayerFaction(action.playerFaction)
                .pipe(
                    map(playerFaction => PlayerFactionApiActions.updateSuccess({ playerFaction })),
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
                    map(playerFaction => PlayerFactionApiActions.createSuccess({ playerFaction })),
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
}