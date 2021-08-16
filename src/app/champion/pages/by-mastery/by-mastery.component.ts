import { Component, OnInit } from '@angular/core';

import { ChampionDetails } from '../../interfaces/championDetails.interface';
import { ChampionService } from '../../services/champion.service';

@Component({
  selector: 'app-by-mastery',
  templateUrl: './by-mastery.component.html',
  styles: [],
})
export class ByMasteryComponent implements OnInit {
  title: string = 'Champions by Mastery';

  constructor(private championService: ChampionService) {}

  championsDetails: ChampionDetails[] = [];
  encryptedSummonerId: string = '82gdtzEFWNFtvviYyspWPYXY1Ov4pxKrWnIFypweVpjHXlM';

  ngOnInit(): void {
    this.championService.getMyChampionsByMastery(this.encryptedSummonerId).subscribe(
      (champions) => {
        for (let champion of champions) {
          this.championService.getChampionDetails(champion.championId + '.json').subscribe(
            (details) => {
              details.championLevel = champion.championLevel;
              details.championPoints = champion.championPoints;
              details.lastPlayTime = champion.lastPlayTime;
              this.championsDetails.push(details);
            },
            (err) => {
              console.log('Error calling getChampionDetails');
            }
          );
        }
      },
      (err) => {
        console.log('Error calling getMyChampionsByMastery');
      }
    );
  }

  ngDoCheck(): void {
    this.championService.sortChampionsDetailsArrayByMastery(this.championsDetails);
  }
}
