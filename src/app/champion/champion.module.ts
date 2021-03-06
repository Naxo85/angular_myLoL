import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { PlayedChampsComponent } from './pages/played-champs/played-champs.component';
import { DetailsComponent } from './pages/details/details.component';
import { ChampionGridComponent } from './components/champion-grid/champion-grid.component';
import { RotationChampsComponent } from './pages/rotation-champs/rotation-champs.component';

@NgModule({
  declarations: [
    PlayedChampsComponent,
    DetailsComponent,
    ChampionGridComponent,
    RotationChampsComponent,
  ],
  exports: [PlayedChampsComponent, RotationChampsComponent, DetailsComponent],
  imports: [CommonModule, PrimeNGModule, RouterModule],
})
export class ChampionModule {}
