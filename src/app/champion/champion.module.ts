import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { ByMasteryComponent } from './pages/by-mastery/by-mastery.component';
import { DetailsComponent } from './pages/details/details.component';
import { ChampionGridComponent } from './components/champion-grid/champion-grid.component';

@NgModule({
  declarations: [ByMasteryComponent, DetailsComponent, ChampionGridComponent],
  exports: [ByMasteryComponent, DetailsComponent],
  imports: [CommonModule, PrimeNGModule, RouterModule],
})
export class ChampionModule {}
