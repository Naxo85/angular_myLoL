import { Component, Input } from '@angular/core';

import { ChampionDetails } from '../../interfaces/championDetails.interface';

@Component({
  selector: 'app-champion-grid',
  templateUrl: './champion-grid.component.html',
  styleUrls: ['./champion-grid.component.css'],
})
export class ChampionGridComponent {
  @Input() championsDetails!: ChampionDetails[];

  styleCard = { 'text-align': 'center', margin: '10px' };

  changeStyle($event: { type: string }) {
    this.styleCard =
      $event.type == 'mouseover'
        ? { 'text-align': 'center', margin: '1px' }
        : { 'text-align': 'center', margin: '10px' };
  }

  getString(level: number, points: number): string {
    return 'Level: ' + level + ', Points: ' + points;
  }

  getUrlImage(id: number) {
    return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${id}/${id}000.jpg`;
  }
  getUrlMastery(level: number) {
    return `https://raw.githubusercontent.com/RiotAPI/Riot-Games-API-Developer-Assets/master/champion-mastery-icons/mastery-${level}.png`;
  }
}
