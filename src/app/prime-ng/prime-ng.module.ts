import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    ButtonModule,
    CardModule,
    DialogModule,
    TableModule,
    BadgeModule,
    ChipModule,
  ],
  exports: [
    MenuModule,
    ButtonModule,
    CardModule,
    DialogModule,
    TableModule,
    BadgeModule,
    ChipModule,
  ],
})
export class PrimeNGModule {}
