import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatchDetails } from './interfaces/matchDetails.interface';
import { CustomDetails } from './interfaces/customDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private riotApiUrlv2: string = 'https://europe.api.riotgames.com/lol';

  private apiKey: string = 'RGAPI-602dd8a5-d86d-4d4e-9074-0ab868d15ad1';

  get httpParams() {
    return new HttpParams().set('api_key', this.apiKey);
  }

  //uYkJifzok5GspJHducglTnF2PiGKT2BfhVytUyeL2-_AziwC1-A_7pS_8fJ8fUrZ3w054NzyQdUzlw/ids

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
    console.log(customDetails.length);
    customDetails.sort((a, b) => {
      let difference: string | number | boolean =
        a[sortField as keyof CustomDetails & number] - b[sortField as keyof CustomDetails & number];
      return difference * sortOrder;
    });
  }
}
