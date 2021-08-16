import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Champion } from '../interfaces/champion.interface';
import { ChampionDetails } from '../interfaces/championDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private riotApiUrl: string = 'https://euw1.api.riotgames.com/lol';

  get httpParams() {
    return new HttpParams().set('api_key', 'RGAPI-2f49db97-399f-4825-bf69-bd8b661b1800');
  }

  constructor(private http: HttpClient) {}

  getMyChampionsByMastery(encryptedSummonerId: string): Observable<Champion[]> {
    const url = `${this.riotApiUrl}/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}`;
    return this.http.get<Champion[]>(url, { params: this.httpParams });
  }

  getChampionDetails(championId: string) {
    return this.http.get<ChampionDetails>(
      `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${championId}`
    );
    //.pipe(tap(console.log));
  }

  sortChampionsDetailsArrayByMastery(championsDetails: ChampionDetails[]): ChampionDetails[] {
    return championsDetails.sort((a, b) => {
      if (a.championLevel! > b.championLevel!) {
        return -1;
      } else if (a.championLevel! == b.championLevel! && a.championPoints! > b.championPoints!) {
        return -1;
      }
      return 1;
    });
  }

  sortChampionsDetailsArrayByLastPlayTime(championsDetails: ChampionDetails[]): ChampionDetails[] {
    return championsDetails.sort(function (a, b) {
      return b.lastPlayTime! - a.lastPlayTime!;
    });
  }

  // private _championsPrueba: Champion[] = [
  //   {
  //     championId: 78,
  //     championPoints: 8900,
  //     championLevel: 7,
  //     championPointsSinceLastLevel: 200,
  //     championPointsUntilNextLevel: 200,
  //     chestGranted: true,
  //     lastPlayTime: 100,
  //     summonerId: 'hola',
  //     tokensEarned: 89,
  //   },
  //   {
  //     championId: 66,
  //     championPoints: 6666,
  //     championLevel: 6,
  //     championPointsSinceLastLevel: 600,
  //     championPointsUntilNextLevel: 600,
  //     chestGranted: true,
  //     lastPlayTime: 600,
  //     summonerId: 'hola',
  //     tokensEarned: 69,
  //   },
  // ];

  // get championsprueba(): Champion[] {
  //   return [...this._championsPrueba];
  // }
}
