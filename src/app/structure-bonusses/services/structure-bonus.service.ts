
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { StructureBonusType } from "../enums/structure-bonus-type.enum";
import { StructureBonus } from "../interfaces/structure-bonus.interface";

@Injectable({
    providedIn: 'root',
})

export class StructureBonusService {
  private structureBonusUrl = 'api/structureBonus/0';

  constructor(private http: HttpClient) { }

  getStructureBonus(): Observable<StructureBonus> {
    return this.http.get<StructureBonus>(this.structureBonusUrl)
        .pipe(catchError(this.handleError));
  }

  updateStructureBonus(type: StructureBonusType): Observable<StructureBonusType> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.structureBonusUrl}`;
    return this.http.put<StructureBonus>(url, {id: 0, StructureBonusType: type}, { headers })
        .pipe(
            map(() => type),
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
