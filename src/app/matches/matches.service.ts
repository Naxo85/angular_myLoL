import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatchDetails } from './interfaces/matchDetails.interface';
import { CustomDetails } from './interfaces/customDetails.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private riotApiUrlv2: string = 'https://europe.api.riotgames.com/lol';

  get httpParams() {
    return new HttpParams().set('api_key', environment.apiKey);
  }

  constructor(private http: HttpClient) {}

  getMatchesbyPuuid(puuid: string, start: number, count: number): Observable<string[]> {
    const url = `${this.riotApiUrlv2}/match/v5/matches/by-puuid/${puuid}/ids`;
    return this.http.get<string[]>(url, {
      params: this.httpParams.set('start', start).set('count', count),
    });
  }

  getMatchDetails(gameId: string): Observable<MatchDetails> {
    const url = `${this.riotApiUrlv2}/match/v5/matches/${gameId}`;
    return this.http.get<MatchDetails>(url, { params: this.httpParams });
  }

  sortMatchesDetailsArray(customDetails: CustomDetails[], sortField: string, sortOrder: number) {
    customDetails.sort((a, b) => {
      let difference: string | number | boolean =
        a[sortField as keyof CustomDetails & number] - b[sortField as keyof CustomDetails & number];
      return difference * sortOrder;
    });
  }
}
