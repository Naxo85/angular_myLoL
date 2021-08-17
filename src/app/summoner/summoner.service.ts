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
  private summoner_name: string = 'Cruzadix';
  private apiKey: string = 'RGAPI-b35b7b90-cc37-43a2-b5c6-76c3a9ffd493';

  get httpParams() {
    return new HttpParams().set('api_key', this.apiKey);
  }

  getSummonerInfo(): Observable<Summoner> {
    const url = `${this.riotApiUrl}/summoner/v4/summoners/by-name/${this.summoner_name}`;
    return this.http.get<Summoner>(url, { params: this.httpParams });
  }
}
