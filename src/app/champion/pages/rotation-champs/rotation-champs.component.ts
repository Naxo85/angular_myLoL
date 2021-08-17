import { Component, OnInit } from '@angular/core';

import { ChampionDetails } from '../../interfaces/championDetails.interface';
import { ChampionService } from '../../services/champion.service';

@Component({
  selector: 'app-rotation-champs',
  templateUrl: './rotation-champs.component.html',
  styleUrls: ['./rotation-champs.component.css'],
})
export class RotationChampsComponent implements OnInit {
  title: string = 'Champions in rotation';

  constructor(private championService: ChampionService) {}

  championsDetails: ChampionDetails[] = [];
  ngOnInit(): void {
    this.championService.getChampionsInRotation().subscribe(
      (championsInRotation) => {
        for (let championId of championsInRotation.freeChampionIds) {
          this.championService.getChampionDetails(championId + '.json').subscribe(
            (details) => {
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
}
