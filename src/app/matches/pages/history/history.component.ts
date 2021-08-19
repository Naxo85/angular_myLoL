import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

import { SummonerService } from 'src/app/summoner/summoner.service';
import { CustomDetails } from '../../interfaces/customDetails.interface';
import { Participant } from '../../interfaces/matchDetails.interface';
import { MatchesService } from '../../matches.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(private summonerService: SummonerService, private matchesService: MatchesService) {}

  customDetails: CustomDetails[] = [];
  matchesId: string[] = [];
  summonerInfo!: Participant;
  summonerPuuid: string = '';
  start: number = 0;
  currentFirst!: number;
  rows: number = 10;
  loading: boolean = false;
  iconsUrl: string =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/';

  ngOnInit(): void {
    this.summonerService.getSummonerInfo().subscribe((info) => {
      this.summonerPuuid = info.puuid;
      this.matchesService.getMatchesbyPuuid(this.summonerPuuid, this.start, 100).subscribe(
        (matches) => {
          this.matchesId = matches;
        },
        (err) => {
          console.log('Error calling getSummonerInfo');
        }
      );
    });
  }

  loadMatches(event: LazyLoadEvent) {
    this.loading = true;
    if (
      (event.first != undefined && event.rows != undefined && event.first !== this.currentFirst) ||
      !this.currentFirst
    ) {
      this.currentFirst = event.first!;
      this.customDetails = [];
      setTimeout(() => {
        for (let match of this.matchesId.slice(event.first, event.first! + event.rows!)) {
          this.getMatchesDetails(match, this.summonerPuuid);
        }
      }, 500);
    }

    if (event.sortField) {
      setTimeout(() => {
        this.matchesService.sortMatchesDetailsArray(
          this.customDetails,
          event.sortField!,
          event.sortOrder!
        );
      }, 1000);
    }
    this.loading = false;
  }

  getMatchesDetails(match: string, puuid: string) {
    this.matchesService.getMatchDetails(match).subscribe(
      (matchDetails) => {
        for (let participant of matchDetails.info.participants) {
          if (participant.puuid === puuid) {
            this.summonerInfo = participant;
          }
        }
        this.customDetails.push({
          gameId: matchDetails.info.gameId,
          gameStartTimestamp: matchDetails.info.gameStartTimestamp,
          gameMode: matchDetails.info.gameMode,
          kills: this.summonerInfo.kills,
          assists: this.summonerInfo.assists,
          deaths: this.summonerInfo.deaths,
          championUrl: this.iconsUrl + this.summonerInfo.championId + '.png',
          championName: this.summonerInfo.championName,
          win: this.summonerInfo.win,
        });
      },
      (err) => {
        console.log('Error calling getMatchDetails');
      }
    );
  }

  getResultClass(result: boolean): string {
    return result ? 'success' : 'danger';
  }
  getResult(result: boolean): string {
    return result ? 'win' : 'lost';
  }
  getThumbsIcon(result: boolean): string {
    return result ? 'up' : 'down';
  }
}
