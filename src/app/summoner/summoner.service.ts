import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Summoner } from './summoner.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SummonerService {
  constructor(private http: HttpClient) {}

  private riotApiUrl: string = 'https://euw1.api.riotgames.com/lol';
  private summoner_name: string = 'Lirieth';

  get httpParams() {
    return new HttpParams().set('api_key', 'RGAPI-2f49db97-399f-4825-bf69-bd8b661b1800');
  }

  getSummonerInfo(): Observable<Summoner> {
    const url = `${this.riotApiUrl}/summoner/v4/summoners/by-name/${this.summoner_name}`;
    return this.http.get<Summoner>(url, { params: this.httpParams });
  }
}
