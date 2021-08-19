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
  private apiKey: string = 'RGAPI-602dd8a5-d86d-4d4e-9074-0ab868d15ad1';

  get httpParams() {
    return new HttpParams().set('api_key', this.apiKey);
  }

  getSummonerInfo(): Observable<Summoner> {
    const url = `${this.riotApiUrl}/summoner/v4/summoners/by-name/${this.summoner_name}`;
    return this.http.get<Summoner>(url, { params: this.httpParams });
  }
}
