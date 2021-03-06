import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { StructureBonus } from "src/app/structure-bonusses/interfaces/structure-bonus.interface";
import { StructureBonusService } from "src/app/structure-bonusses/services/structure-bonus.service";
import { PlayerFaction } from "../interfaces/player-faction.interface";
import { PlayerFactionModel } from "../models/player-faction.model";

@Injectable({
    providedIn: 'root',
})

export class PlayerFactionService {
    private playerFactionsUrl = 'api/playerFactions';

    constructor(private http: HttpClient,
      private structureBonusService: StructureBonusService) {

    }

    getPlayerFactions(): Observable<PlayerFaction[]> {
        return this.http.get<PlayerFaction[]>(this.playerFactionsUrl)
            .pipe(
                // tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    createPlayerFaction(playerFaction: PlayerFaction): Observable<PlayerFaction> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // PlayerFaction Id must be null for the Web API to assign an Id
        const newPlayerFaction = { ...playerFaction, id: Math.random() };
        return this.http.post<PlayerFaction>(this.playerFactionsUrl, newPlayerFaction, { headers })
            .pipe(
                // tap(data => console.log('create PlayerFaction: ', JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    deletePlayerFaction(id: number): Observable<{}> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.playerFactionsUrl}/${id}`;
        return this.http.delete<PlayerFaction>(url, { headers })
            .pipe(
                // tap(data => console.log('delete PlayerFaction: ', id)),
                catchError(this.handleError)
            );
    }

    resetDatabase(): Observable<{}> {
        return this.http.post('commands/resetDb', { clear: true })
            .pipe(
                // tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    updatePlayerFaction(playerFaction: PlayerFaction): Observable<PlayerFaction> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.playerFactionsUrl}/${playerFaction.id}`;
        return this.http.put<PlayerFaction>(url, playerFaction, { headers })
            .pipe(
                // tap(() => console.log('update PlayerFaction: ', playerFaction.id)),
                // return the player faction on an update
                map(() => playerFaction),
                catchError(this.handleError)
            );
    }

    private handleError(err: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
