import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, PrimeNGModule],
})
export class MatchesModule {}
